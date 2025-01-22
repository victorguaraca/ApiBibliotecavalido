import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';

import { IsString, IsOptional } from 'class-validator';

export class CategoriaDTO {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  imagen?: string; // La imagen es opcional
}
