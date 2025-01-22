import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Obtener todos los administradores
  @Get()
  async getAll(): Promise<Admin[]> {
    return this.adminService.getAll();  // Aquí indicamos el tipo explícito de retorno
  }

  // Crear un nuevo administrador
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  async create(@Body() dto: CreateAdminDto): Promise<any> {
    return this.adminService.create(dto);
  }
}