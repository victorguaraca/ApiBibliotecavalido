import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';


@Controller('prestamos')
export class PrestamosController {
  constructor(private readonly prestamoService: PrestamosService) {}

  // Obtener todos los préstamos
  @Get()
  async obtenerTodosLosPrestamos(): Promise<Prestamo[]> {
    return this.prestamoService.obtenerTodosLosPrestamos();
  }

  // Obtener un préstamo por su ID
  @Get(':id')
  async obtenerPrestamoPorId(@Param('id') id: number): Promise<Prestamo> {
    return this.prestamoService.obtenerPrestamoPorId(id);
  }

  // Crear un nuevo préstamo
  @Post()
  async crearPrestamo(@Body() prestamoDTO: CreatePrestamoDto): Promise<Prestamo> {
    return this.prestamoService.crearPrestamo(prestamoDTO);
  }

  // Actualizar un préstamo existente
  @Put(':id')
  async actualizarPrestamo(
    @Param('id') id: number,
    @Body() prestamoDTO: CreatePrestamoDto,
  ): Promise<Prestamo> {
    return this.prestamoService.actualizarPrestamo(id, prestamoDTO);
  }

  // Eliminar un préstamo
  @Delete(':id')
  async eliminarPrestamo(@Param('id') id: number): Promise<void> {
    return this.prestamoService.eliminarPrestamo(id);
  }
}
