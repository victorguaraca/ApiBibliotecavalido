import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libros } from '../../entities/libro.entity';
import { Categoria } from '../categorias/entities/categoria.entity';
import { ImagenLibro } from '../../imagen-libro/entities/imagen-libro.entity';
import { Prestamo } from './entities/prestamo.entity';
import { Bibliotecario } from 'src/Biblioteca/usuarios/bibliotecario/entities/bibliotecario.entity';
import { Estudiante } from 'src/Biblioteca/usuarios/estudiante/entities/estudiante.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Prestamo,Libros, Categoria, ImagenLibro,Bibliotecario,Estudiante])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
})
export class PrestamosModule {}
