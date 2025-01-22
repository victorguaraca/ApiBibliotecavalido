import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBibliotecarioDto } from './dto/create-bibliotecario.dto';
import { UpdateBibliotecarioDto } from './dto/update-bibliotecario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { Rolrepository } from 'src/Biblioteca/roles/roles.repository';
import { MessageDto } from 'src/common/message.dto';
import { NombreRol } from 'src/Biblioteca/roles/nombreRol';
import { Bibliotecario } from './entities/bibliotecario.entity';
import { Repository } from 'typeorm';
import { Estudiante } from '../estudiante/entities/estudiante.entity';
import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { Libros } from 'src/Biblioteca/libros/entities/libro.entity';
import { CreateEstudianteDto } from '../estudiante/dto/create-estudiante.dto';
import { CreatePrestamoDto } from 'src/Biblioteca/libros/componentes/prestamos/dto/create-prestamo.dto';


@Injectable()
export class BibliotecarioService {
  constructor(
    @InjectRepository(Bibliotecario)
    private readonly bibliotecarioRepository: Repository<Bibliotecario>,
    
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,

    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
    
    @InjectRepository(Prestamo)
    private readonly prestamoRepository: Repository<Prestamo>,
    
    @InjectRepository(Libros)
    private readonly libroRepository: Repository<Libros>,
  ) {}




  async findOne(bibliotecarioId: number): Promise<Bibliotecario> {
    const bibliotecario = await this.bibliotecarioRepository.findOne({ where: { id: bibliotecarioId } });
    if (!bibliotecario) {
      throw new NotFoundException('Bibliotecario no encontrado');
    }
    return bibliotecario;
  }



  async findEstudianteById(estudianteId: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({ where: { id: estudianteId } });
    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }
    return estudiante;
  }

  // Crear un estudiante (si no existe)
  async createEstudiante(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    // Verificamos si el estudiante ya existe
    const existingEstudiante = await this.estudianteRepository.findOne({
      where: { email: createEstudianteDto.email },
    });
    if (existingEstudiante) {
      throw new BadRequestException('El estudiante con este correo electrónico ya existe');
    }

    // Creamos el nuevo estudiante
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return this.estudianteRepository.save(estudiante);
  }

  // Verificar si un libro existe
  async findLibroById(libroId: number): Promise<Libros> {
    const libro = await this.libroRepository.findOne({ where: { id: libroId } });
    if (!libro) {
      throw new NotFoundException('Libro no encontrado');
    }
    return libro;
  }

  // Crear un préstamo
  async crearPrestamo(createPrestamoDto: CreatePrestamoDto): Promise<Prestamo> {
    // Obtener el libro, estudiante y bibliotecario completos
    const libro = await this.findLibroById(createPrestamoDto.libroId);
    const estudiante = await this.findEstudianteById(createPrestamoDto.estudianteId);
    const bibliotecario = await this.findOne(createPrestamoDto.bibliotecarioId); // Asegúrate de obtener el bibliotecario por ID

    // Verificar si el libro ya está prestado
    const libroPrestado = await this.prestamoRepository.findOne({
      where: { libro: libro, estaDevuelto: false },
    });

    if (libroPrestado) {
      throw new BadRequestException('Este libro ya ha sido prestado y no ha sido devuelto');
    }

    // Crear un nuevo préstamo
    const prestamo = this.prestamoRepository.create({
      libro: libro,
      estudiante: estudiante,
      bibliotecario: bibliotecario, // Aquí asignamos el objeto bibliotecario completo
      fechaPrestamo: createPrestamoDto.fechaPrestamo,
      fechaDevolucion: createPrestamoDto.fechaDevolucion,
      estaDevuelto: false,
    });

    return this.prestamoRepository.save(prestamo);
  }

  async crear(createBibliotecarioDto: CreateBibliotecarioDto): Promise<Bibliotecario> {
    const bibliotecario = this.bibliotecarioRepository.create(createBibliotecarioDto);
    return this.bibliotecarioRepository.save(bibliotecario);
  }


  async crearBibliotecario(dto: CreateBibliotecarioDto): Promise<any> {
    const {nombre, email} = dto;
    const exists = await this.bibliotecarioRepository.findOne({where: [{nombre: nombre}, {email: email}]});
    if(exists) throw new BadRequestException(new MessageDto('El bibliotecario Ya Esta Registrado'));
    const rolEstudiante = await this.rolRepository.findOne({where: {rolNombre: NombreRol.BIBLIOTECARIO}});
    if(!rolEstudiante ) throw new InternalServerErrorException(new MessageDto('El rol bibliotecario aún no han sido creado'));
    const estudiante = this.bibliotecarioRepository.create(dto);
    estudiante.roles = [rolEstudiante];
    await this.bibliotecarioRepository.save(estudiante);
    return new MessageDto('Bibliotecario creado');
}

  async obtenerTodosBibliotecarios(): Promise<Bibliotecario[]> {
    return this.bibliotecarioRepository.find();
  }
}
