import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { Libros } from 'src/Biblioteca/libros/entities/libro.entity';
import { Bibliotecario } from '../bibliotecario/entities/bibliotecario.entity';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { MessageDto } from 'src/common/message.dto';
import { NombreRol } from 'src/Biblioteca/roles/nombreRol';


@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
    
    @InjectRepository(Prestamo)
    private readonly prestamoRepository: Repository<Prestamo>,
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,

    @InjectRepository(Libros)
    private readonly librosRepository: Repository<Libros>,

    @InjectRepository(Bibliotecario)
    private readonly bibliotecarioRepository: Repository<Bibliotecario>,  // Si lo necesitas
  ) {}

  // Crear un nuevo estudiante con verificación usando `where`
  async crearEstudiante(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudianteExistente = await this.estudianteRepository.findOne({
      where: { email: createEstudianteDto.email },
    });

    if (estudianteExistente) {
      throw new Error('Ya existe un estudiante con ese email');
    }

    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return this.estudianteRepository.save(estudiante);
  }

  async obtenerEstudiantes(): Promise<Estudiante[]> {
    const estudiantes = await this.estudianteRepository.find();
  
    if (estudiantes.length === 0) {
      throw new BadRequestException(new MessageDto('No hay estudiantes registrados en el sistema.'));
    }
  
    return estudiantes;
  }
  

  // Obtener un estudiante por su ID usando `where`
  async obtenerEstudiantePorId(id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({
      where: { id },
    });
    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }
    return estudiante;
  }

  // Actualizar un estudiante
  async actualizarEstudiante(id: number, createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.obtenerEstudiantePorId(id);
    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }

    estudiante.nombre = createEstudianteDto.nombre;
    estudiante.email = createEstudianteDto.email;
    estudiante.fechaDeNacimiento = createEstudianteDto.fechaDeNacimiento;
    estudiante.activo = createEstudianteDto.activo;
    estudiante.carrera = createEstudianteDto.carrera;
    estudiante.semestre = createEstudianteDto.semestre;

    return this.estudianteRepository.save(estudiante);
  }

  // Eliminar un estudiante
  async eliminarEstudiante(id: number): Promise<void> {
    const estudiante = await this.obtenerEstudiantePorId(id);
    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }
    await this.estudianteRepository.remove(estudiante);
  }

  // Realizar un préstamo de libro para un estudiante
  async realizarPrestamo(libroId: number, estudianteId: number, fechaPrestamo: string, fechaDevolucion: string): Promise<Prestamo> {
    // Buscar el estudiante
    const estudiante = await this.obtenerEstudiantePorId(estudianteId);
    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }

    // Buscar el libro por ID
    const libro = await this.librosRepository.findOne({
      where: { id: libroId },
    });

    if (!libro) {
      throw new Error('Libro no encontrado');
    }

    // Verificación de disponibilidad del libro: Si ya está prestado, no permitir el préstamo
    const libroPrestado = await this.prestamoRepository.findOne({
      where: {
        libro: libro,
        estaDevuelto: false,  // Solo los préstamos no devueltos
      },
    });

    if (libroPrestado) {
      throw new Error('El libro ya está prestado');
    }

    // Buscar al bibliotecario (esto depende de tu lógica, aquí lo supongo como estático)
    const bibliotecario = await this.bibliotecarioRepository.findOne({
      where: { id: 1 },  // Aquí deberías obtener el ID de un bibliotecario desde el contexto o alguna sesión
    });

    if (!bibliotecario) {
      throw new Error('Bibliotecario no encontrado');
    }

    const prestamo = new Prestamo();
    prestamo.libro = libro;  // Relación con la entidad libro
    prestamo.estudiante = estudiante;  // Relación con la entidad estudiante
    prestamo.bibliotecario = bibliotecario;  // Relación con la entidad bibliotecario
    prestamo.fechaPrestamo = fechaPrestamo;
    prestamo.fechaDevolucion = fechaDevolucion;
    prestamo.estaDevuelto = false;  // Inicialmente, el libro no ha sido devuelto
    prestamo.fechaRealDevolucion = null;  // Aún no se ha devuelto el libro

    return this.prestamoRepository.save(prestamo);
  }


  async create(dto: CreateEstudianteDto): Promise<any> {
    const {nombre, email} = dto;
    const exists = await this.estudianteRepository.findOne({where: [{nombre: nombre}, {email: email}]});
    if(exists) throw new BadRequestException(new MessageDto('El Estudiante Ya Esta Registrado'));
    const rolEstudiante = await this.rolRepository.findOne({where: {rolNombre: NombreRol.ESTUDIANTE}});
    if(!rolEstudiante ) throw new InternalServerErrorException(new MessageDto('El rol Estudiante aún no han sido creado'));
    const estudiante = this.estudianteRepository.create(dto);
    estudiante.roles = [rolEstudiante];
    await this.estudianteRepository.save(estudiante);
    return new MessageDto('Estudiante creado');
}


}
