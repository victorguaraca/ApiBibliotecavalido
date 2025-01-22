import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenLibroDto } from './create-imagen-libro.dto';

export class UpdateImagenLibroDto extends PartialType(CreateImagenLibroDto) {}
