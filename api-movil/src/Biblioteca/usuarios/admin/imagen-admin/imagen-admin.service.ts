import { Injectable } from '@nestjs/common';
import { CreateImagenAdminDto } from './dto/create-imagen-admin.dto';
import { UpdateImagenAdminDto } from './dto/update-imagen-admin.dto';

@Injectable()
export class ImagenAdminService {
  create(createImagenAdminDto: CreateImagenAdminDto) {
    return 'This action adds a new imagenAdmin';
  }

  findAll() {
    return `This action returns all imagenAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagenAdmin`;
  }

  update(id: number, updateImagenAdminDto: UpdateImagenAdminDto) {
    return `This action updates a #${id} imagenAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagenAdmin`;
  }
}
