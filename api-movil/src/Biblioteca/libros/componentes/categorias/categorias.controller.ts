import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriaDTO } from './dto/update-categoria.dto';
import { CreateImagenCategoriaDto } from './imagen-categoria/dto/create-imagen-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryStorageService } from 'src/services/cloudinaryStorageService';
import { ImagenCategoria } from './imagen-categoria/entities/imagen-categoria.entity';
import { Libros } from '../../entities/libro.entity';
@ApiTags('categorias') // Etiqueta de Swagger

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  async findAll(): Promise<Categoria[]> {
    return this.categoriasService.findAll(); // Devuelve todas las categorías con las imágenes asociadas
  }
  
  @Post('create')
  @UseInterceptors(FileInterceptor('image', { storage: CloudinaryStorageService.storage }))
  async createCategoria(
    @Body() createCategoriaDto: CreateCategoriaDto,
    @UploadedFile() file: Express.Multer.File,  // Recibe el archivo
  ) {
    if (!file) {
      throw new Error('No se ha recibido ningún archivo');
    }

    // Subir la imagen a Cloudinary y obtener la URL
    const imageUrl = file.path; // La URL del archivo subido a Cloudinary

    // Crear la categoría con el nombre
    const categoria = await this.categoriasService.create(createCategoriaDto);

    // Crear la entidad ImagenCategoria con la URL de la imagen y asociarla a la categoría
    const imagenCategoria = new ImagenCategoria();
    imagenCategoria.url = imageUrl;
    imagenCategoria.categoria = categoria;

    // Guardar la imagen en la base de datos
    await this.categoriasService.saveImage(imagenCategoria);

    return {
      message: 'Categoría creada con imagen',
      categoria,
    };
  }


  @Get(':id/libros')
  async findLibrosByCategoria(@Param('id') id: number): Promise<Libros[]> {
    return this.categoriasService.findLibrosByCategoria(id);
  }
}