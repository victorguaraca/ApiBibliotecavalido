import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagenBibliotecarioService } from './imagen-bibliotecario.service';
import { CreateImagenBibliotecarioDto } from './dto/create-imagen-bibliotecario.dto';
import { UpdateImagenBibliotecarioDto } from './dto/update-imagen-bibliotecario.dto';

@Controller('imagen-bibliotecario')
export class ImagenBibliotecarioController {
  constructor(private readonly imagenBibliotecarioService: ImagenBibliotecarioService) {}

  @Post()
  create(@Body() createImagenBibliotecarioDto: CreateImagenBibliotecarioDto) {
    return this.imagenBibliotecarioService.create(createImagenBibliotecarioDto);
  }

  @Get()
  findAll() {
    return this.imagenBibliotecarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenBibliotecarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagenBibliotecarioDto: UpdateImagenBibliotecarioDto) {
    return this.imagenBibliotecarioService.update(+id, updateImagenBibliotecarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenBibliotecarioService.remove(+id);
  }
}
