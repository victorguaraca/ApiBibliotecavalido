import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { CreatePrestamoDto } from 'src/Biblioteca/libros/componentes/prestamos/dto/create-prestamo.dto';


@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  // Crear un nuevo estudiante
  @Post()
  async crearEstudiante(@Body() createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    return this.estudianteService.create(createEstudianteDto);
  }

  // Obtener todos los estudiantes
  @Get()
  async obtenerEstudiantes(): Promise<Estudiante[]> {
    return this.estudianteService.obtenerEstudiantes();
  }

  // Obtener un estudiante por su ID
  @Get(':id')
  async obtenerEstudiante(@Param('id') id: number): Promise<Estudiante> {
    return this.estudianteService.obtenerEstudiantePorId(id);
  }

  // Actualizar un estudiante por su ID
  @Put(':id')
  async actualizarEstudiante(
    @Param('id') id: number,
    @Body() createEstudianteDto: CreateEstudianteDto,
  ): Promise<Estudiante> {
    return this.estudianteService.actualizarEstudiante(id, createEstudianteDto);
  }

  // Eliminar un estudiante por su ID
  @Delete(':id')
  async eliminarEstudiante(@Param('id') id: number): Promise<void> {
    return this.estudianteService.eliminarEstudiante(id);
  }

  // Realizar un préstamo de libro para un estudiante
  @Post(':id/prestamo')
  async realizarPrestamo(
    @Param('id') estudianteId: number,
    @Body() prestamoDTO: CreatePrestamoDto,  // DTO para préstamo de libro
  ) {
    return this.estudianteService.realizarPrestamo(
      prestamoDTO.libroId,
      estudianteId,
      prestamoDTO.fechaPrestamo,
      prestamoDTO.fechaDevolucion,
    );
  }
}