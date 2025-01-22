import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagenEstudianteService } from './imagen-estudiante.service';
import { CreateImagenEstudianteDto } from './dto/create-imagen-estudiante.dto';
import { UpdateImagenEstudianteDto } from './dto/update-imagen-estudiante.dto';

@Controller('imagen-estudiante')
export class ImagenEstudianteController {
  constructor(private readonly imagenEstudianteService: ImagenEstudianteService) {}

  @Post()
  create(@Body() createImagenEstudianteDto: CreateImagenEstudianteDto) {
    return this.imagenEstudianteService.create(createImagenEstudianteDto);
  }

  @Get()
  findAll() {
    return this.imagenEstudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenEstudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagenEstudianteDto: UpdateImagenEstudianteDto) {
    return this.imagenEstudianteService.update(+id, updateImagenEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenEstudianteService.remove(+id);
  }
}
