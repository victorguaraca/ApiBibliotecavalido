import { IsNotEmpty, IsString, IsInt, IsOptional, IsPositive, IsISBN, MaxLength, IsUrl, IsMimeType, IsArray } from 'class-validator';
import { IsBase64 } from 'class-validator';
import { CreateImagenLibroDto } from '../imagen-libro/dto/create-imagen-libro.dto';
import { Type } from 'class-transformer';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  isbn: string; // ISBN único del libro

  @IsString()
  @IsNotEmpty()
  tipo: string; // Tipo de libro (físico, digital)

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  areaDeConocimiento: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsInt()
  @Type(() => Number)
  numeroEjemplares: number;

  @IsString()
  @IsNotEmpty()
  codigoUbicacionFisica: string;

  @IsOptional()
  @IsString()
  verificacion?: string; // Verificación (opcional)

  @IsString()
  @IsNotEmpty()
  editorial: string;

  @IsInt()
  @Type(() => Number)
  ano: number;

  @IsString()
  @IsNotEmpty()
  edicion: string;

  @IsArray()
  @IsOptional()
  @Type(() => CreateImagenLibroDto ) // Suponiendo que tienes un DTO para imagenes
  imagenes?: CreateImagenLibroDto [];

  @IsInt()
  @Type(() => Number)
  categoriaId: number; // ID de la categoría relacionada (en lugar de un objeto completo)
}
