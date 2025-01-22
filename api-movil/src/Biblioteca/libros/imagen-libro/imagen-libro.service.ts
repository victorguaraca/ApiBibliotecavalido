import { Injectable } from '@nestjs/common';
import { CreateImagenLibroDto } from './dto/create-imagen-libro.dto';
import { UpdateImagenLibroDto } from './dto/update-imagen-libro.dto';

@Injectable()
export class ImagenLibroService {
  create(createImagenLibroDto: CreateImagenLibroDto) {
    return 'This action adds a new imagenLibro';
  }

  findAll() {
    return `This action returns all imagenLibro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagenLibro`;
  }

  update(id: number, updateImagenLibroDto: UpdateImagenLibroDto) {
    return `This action updates a #${id} imagenLibro`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagenLibro`;
  }
}
