import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagenCategoriaService } from './imagen-categoria.service';
import { CreateImagenCategoriaDto } from './dto/create-imagen-categoria.dto';
import { UpdateImagenCategoriaDto } from './dto/update-imagen-categoria.dto';

@Controller('imagen-categoria')
export class ImagenCategoriaController {
  constructor(private readonly imagenCategoriaService: ImagenCategoriaService) {}

  @Post()
  create(@Body() createImagenCategoriaDto: CreateImagenCategoriaDto) {
    return this.imagenCategoriaService.create(createImagenCategoriaDto);
  }

  @Get()
  findAll() {
    return this.imagenCategoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenCategoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagenCategoriaDto: UpdateImagenCategoriaDto) {
    return this.imagenCategoriaService.update(+id, updateImagenCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenCategoriaService.remove(+id);
  }
}
