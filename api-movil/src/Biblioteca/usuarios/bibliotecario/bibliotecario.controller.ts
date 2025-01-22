import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, NotFoundException, BadRequestException } from '@nestjs/common';
import { BibliotecarioService } from './bibliotecario.service';
import { CreateBibliotecarioDto } from './dto/create-bibliotecario.dto';
import { UpdateBibliotecarioDto } from './dto/update-bibliotecario.dto';
import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { CreatePrestamoDto } from 'src/Biblioteca/libros/componentes/prestamos/dto/create-prestamo.dto';
import { Bibliotecario } from './entities/bibliotecario.entity';

@Controller('bibliotecario')
export class BibliotecarioController {
  constructor(private readonly bibliotecarioService: BibliotecarioService) {}



  @Post('/nuevo')
  async crearBibliotecario(
    @Body() createBibliotecarioDto: CreateBibliotecarioDto,
  ): Promise<Bibliotecario> {
    return this.bibliotecarioService.crearBibliotecario(createBibliotecarioDto);
  }

  @Get()
  async obtenerTodosBibliotecarios(): Promise<Bibliotecario[]> {
    const bibliotecarios = await this.bibliotecarioService.obtenerTodosBibliotecarios();
    if (bibliotecarios.length === 0) {
      throw new NotFoundException('No se encontraron bibliotecarios.');
    }
    return bibliotecarios;
  }

  // Endpoint para crear un nuevo préstamo
  @Post(':bibliotecarioId/prestar')
  async crearPrestamo(
    @Param('bibliotecarioId') bibliotecarioId: number,
    @Body() createPrestamoDto: CreatePrestamoDto,
  ): Promise<Prestamo> {
    // Verificamos que el bibliotecario existe
    const bibliotecario = await this.bibliotecarioService.findOne(bibliotecarioId);
    if (!bibliotecario) {
      throw new NotFoundException('Bibliotecario no encontrado');
    }

    // Llamamos al servicio para crear el préstamo
    try {
      const prestamo = await this.bibliotecarioService.crearPrestamo(createPrestamoDto);
      return prestamo;
    } catch (error) {
      throw new BadRequestException('Error al crear el préstamo', error.message);
    }
  }
}