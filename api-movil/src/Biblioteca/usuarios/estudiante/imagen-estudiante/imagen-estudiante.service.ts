import { Injectable } from '@nestjs/common';
import { CreateImagenEstudianteDto } from './dto/create-imagen-estudiante.dto';
import { UpdateImagenEstudianteDto } from './dto/update-imagen-estudiante.dto';

@Injectable()
export class ImagenEstudianteService {
  create(createImagenEstudianteDto: CreateImagenEstudianteDto) {
    return 'This action adds a new imagenEstudiante';
  }

  findAll() {
    return `This action returns all imagenEstudiante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagenEstudiante`;
  }

  update(id: number, updateImagenEstudianteDto: UpdateImagenEstudianteDto) {
    return `This action updates a #${id} imagenEstudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagenEstudiante`;
  }
}
