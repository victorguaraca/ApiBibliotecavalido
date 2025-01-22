import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenEstudianteDto } from './create-imagen-estudiante.dto';

export class UpdateImagenEstudianteDto extends PartialType(CreateImagenEstudianteDto) {}
