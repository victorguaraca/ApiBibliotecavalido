import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';
import { Libros } from '../../entities/libro.entity';
import { Estudiante } from 'src/Biblioteca/usuarios/estudiante/entities/estudiante.entity';
import { Bibliotecario } from 'src/Biblioteca/usuarios/bibliotecario/entities/bibliotecario.entity';

@Injectable()
export class PrestamosService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly prestamoRepository: Repository<Prestamo>,
    
    @InjectRepository(Libros)
    private readonly librosRepository: Repository<Libros>,
    
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
    
    @InjectRepository(Bibliotecario)
    private readonly bibliotecarioRepository: Repository<Bibliotecario>,
  ) {}

  // Crear un préstamo
  async crearPrestamo(prestamoDTO: CreatePrestamoDto): Promise<Prestamo> {
    const libro = await this.librosRepository.findOne({
      where: { id: prestamoDTO.libroId }, // Especificamos que busque por el ID
    });
    if (!libro) {
      throw new NotFoundException('Libro no encontrado');
    }

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: prestamoDTO.estudianteId }, // Buscamos por ID también
    });
    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    const bibliotecario = await this.bibliotecarioRepository.findOne({
      where: { id: prestamoDTO.bibliotecarioId }, // Buscamos por ID
    });
    if (!bibliotecario) {
      throw new NotFoundException('Bibliotecario no encontrado');
    }

    const prestamo = this.prestamoRepository.create({
      libro,
      estudiante,
      bibliotecario,
      fechaPrestamo: prestamoDTO.fechaPrestamo,
      fechaDevolucion: prestamoDTO.fechaDevolucion,
      fechaRealDevolucion: prestamoDTO.fechaRealDevolucion,
      estaDevuelto: prestamoDTO.estaDevuelto,
    });

    return this.prestamoRepository.save(prestamo);
  }

  // Obtener todos los préstamos
  async obtenerTodosLosPrestamos(): Promise<Prestamo[]> {
    return this.prestamoRepository.find({
      relations: ['libro', 'estudiante', 'bibliotecario'],
    });
  }

  // Obtener un préstamo por ID
  async obtenerPrestamoPorId(id: number): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOne({
      where: { id }, // Buscamos por el ID del préstamo
      relations: ['libro', 'estudiante', 'bibliotecario'],
    });
    if (!prestamo) {
      throw new NotFoundException('Prestamo no encontrado');
    }
    return prestamo;
  }

  // Actualizar un préstamo
  async actualizarPrestamo(id: number, prestamoDTO: CreatePrestamoDto): Promise<Prestamo> {
    const prestamo = await this.prestamoRepository.findOne({
      where: { id },
    });
    if (!prestamo) {
      throw new NotFoundException('Prestamo no encontrado');
    }

    const libro = await this.librosRepository.findOne({
      where: { id: prestamoDTO.libroId },
    });
    if (!libro) {
      throw new NotFoundException('Libro no encontrado');
    }

    const estudiante = await this.estudianteRepository.findOne({
      where: { id: prestamoDTO.estudianteId },
    });
    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    const bibliotecario = await this.bibliotecarioRepository.findOne({
      where: { id: prestamoDTO.bibliotecarioId },
    });
    if (!bibliotecario) {
      throw new NotFoundException('Bibliotecario no encontrado');
    }

    prestamo.libro = libro;
    prestamo.estudiante = estudiante;
    prestamo.bibliotecario = bibliotecario;
    prestamo.fechaPrestamo = prestamoDTO.fechaPrestamo;
    prestamo.fechaDevolucion = prestamoDTO.fechaDevolucion;
    prestamo.fechaRealDevolucion = prestamoDTO.fechaRealDevolucion;
    prestamo.estaDevuelto = prestamoDTO.estaDevuelto;

    return this.prestamoRepository.save(prestamo);
  }

  // Eliminar un préstamo
  async eliminarPrestamo(id: number): Promise<void> {
    const prestamo = await this.prestamoRepository.findOne({
      where: { id },
    });
    if (!prestamo) {
      throw new NotFoundException('Prestamo no encontrado');
    }

    await this.prestamoRepository.remove(prestamo);
  }
}
