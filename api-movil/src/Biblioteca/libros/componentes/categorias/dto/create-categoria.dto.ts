import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateImagenCategoriaDto } from '../imagen-categoria/dto/create-imagen-categoria.dto';

export class CreateCategoriaDto {
  nombre: string;
  imagenes: { url: string; nombre: string }[]; // Aseguramos que las imágenes tengan una URL y nombre
}
