import { Injectable } from '@nestjs/common';
import { CreateImagenBibliotecarioDto } from './dto/create-imagen-bibliotecario.dto';
import { UpdateImagenBibliotecarioDto } from './dto/update-imagen-bibliotecario.dto';

@Injectable()
export class ImagenBibliotecarioService {
  create(createImagenBibliotecarioDto: CreateImagenBibliotecarioDto) {
    return 'This action adds a new imagenBibliotecario';
  }

  findAll() {
    return `This action returns all imagenBibliotecario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagenBibliotecario`;
  }

  update(id: number, updateImagenBibliotecarioDto: UpdateImagenBibliotecarioDto) {
    return `This action updates a #${id} imagenBibliotecario`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagenBibliotecario`;
  }
}
