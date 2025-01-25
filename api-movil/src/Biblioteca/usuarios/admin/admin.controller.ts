import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, BadRequestException, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { MessageDto } from 'src/common/message.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Obtener todos los administradores
  @Get()
  async getAll(): Promise<Admin[]> {
    return this.adminService.getAll();  // Aquí indicamos el tipo explícito de retorno
  }

  // Crear un nuevo administrador
  // Asumimos que el adminId se obtiene de alguna manera, por ejemplo, del body o del contexto de la petición
@Post()
@UseInterceptors(FilesInterceptor('imagenes', 10))  // Limita la cantidad de archivos
async create(@Body() createAdminDto: CreateAdminDto, @UploadedFiles() files: Express.Multer.File[]): Promise<MessageDto> {
  try {
    // Si hay imágenes, asignarlas al DTO
    if (files && files.length > 0) {
      createAdminDto.imagenes = files.map(file => ({
        url: file.path,  // Asigna la URL de la imagen
        adminId: createAdminDto.id,  // Asegúrate de pasar el adminId, asumiendo que ya está en createAdminDto
      }));
    }

    // Llamamos al servicio para crear el Admin
    await this.adminService.create(createAdminDto);
    return new MessageDto('Administrador creado con éxito');
  } catch (error) {
    throw error;
  }
}

}