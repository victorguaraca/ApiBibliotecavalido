import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenBibliotecarioDto } from './create-imagen-bibliotecario.dto';

export class UpdateImagenBibliotecarioDto extends PartialType(CreateImagenBibliotecarioDto) {}
