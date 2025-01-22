import { Controller, Get, Post, Body, Param, Put, Delete, ParseArrayPipe, ParseIntPipe, Query, BadRequestException, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { JwAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/rol.guard';
import { RolDecorator } from 'src/decorators/rol.decorator';
import { NombreRol } from '../roles/nombreRol';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryStorageService } from 'src/services/cloudinaryStorageService';
import { ImagenLibro } from './imagen-libro/entities/imagen-libro.entity';


@Controller('libros')
export class LibrosController {
  constructor(private readonly libroService: LibrosService) { }

  @Post('create')
  @UseInterceptors(FileInterceptor('image', { storage: CloudinaryStorageService.storage }))
  async createLibro(
    @Body() createLibroDto: CreateLibroDto, // DTO para crear el libro
    @UploadedFile() file: Express.Multer.File, // Recibe el archivo de imagen
  ) {
    if (!file) {
      throw new BadRequestException('No se ha recibido ningún archivo');
    }

    // La URL de la imagen subida a Cloudinary
    const imageUrl = file.path;

    // Crear el libro utilizando el DTO
    const libro = await this.libroService.create(createLibroDto);

    // Crear la entidad ImagenLibro con la URL de la imagen y asociarla al libro
    const imagenLibro = new ImagenLibro();
    imagenLibro.url = imageUrl;
    imagenLibro.public_id = file.filename; // Guardamos el public_id generado por Cloudinary
    imagenLibro.libro = libro;

    // Guardar la imagen asociada al libro en la base de datos
    await this.libroService.saveImage(imagenLibro);

    return {
      message: 'Libro creado con imagen',
      libro,
    };
  }
  @Get()
  findAll() {
    return this.libroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.libroService.findOne(id);
  }

  

 
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.libroService.remove(id);
  }
}
