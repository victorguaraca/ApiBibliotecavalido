import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagenAdminService } from './imagen-admin.service';
import { CreateImagenAdminDto } from './dto/create-imagen-admin.dto';
import { UpdateImagenAdminDto } from './dto/update-imagen-admin.dto';

@Controller('imagen-admin')
export class ImagenAdminController {
  constructor(private readonly imagenAdminService: ImagenAdminService) {}

  @Post()
  create(@Body() createImagenAdminDto: CreateImagenAdminDto) {
    return this.imagenAdminService.create(createImagenAdminDto);
  }

  @Get()
  findAll() {
    return this.imagenAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagenAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagenAdminDto: UpdateImagenAdminDto) {
    return this.imagenAdminService.update(+id, updateImagenAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagenAdminService.remove(+id);
  }
}
