import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenCategoriaDto } from './create-imagen-categoria.dto';

export class UpdateImagenCategoriaDto extends PartialType(CreateImagenCategoriaDto) {}
