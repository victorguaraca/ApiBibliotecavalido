import { Injectable } from '@nestjs/common';
import { CreateImagenCategoriaDto } from './dto/create-imagen-categoria.dto';
import { UpdateImagenCategoriaDto } from './dto/update-imagen-categoria.dto';

@Injectable()
export class ImagenCategoriaService {
  create(createImagenCategoriaDto: CreateImagenCategoriaDto) {
    return 'This action adds a new imagenCategoria';
  }

  findAll() {
    return `This action returns all imagenCategoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagenCategoria`;
  }

  update(id: number, updateImagenCategoriaDto: UpdateImagenCategoriaDto) {
    return `This action updates a #${id} imagenCategoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagenCategoria`;
  }
}
