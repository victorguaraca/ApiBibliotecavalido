import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagenLibroService } from './imagen-libro.service';
import { CreateImagenLibroDto } from './dto/create-imagen-libro.dto';
import { UpdateImagenLibroDto } from './dto/update-imagen-libro.dto';

@Controller('imagen-libro')
export class ImagenLibroController {
  constructor(private readonly imagenLibroService: ImagenLibroService) {}

  @Post()
  create(@Body() createImagenLibroDto: CreateImagenLibroDto) {
    return this.imagenLibroService.create(createImagenLibroDto);
  }

  @Get()
  findAll() {
    return this.imagenLibroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenLibroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagenLibroDto: UpdateImagenLibroDto) {
    return this.imagenLibroService.update(+id, updateImagenLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenLibroService.remove(+id);
  }
}
