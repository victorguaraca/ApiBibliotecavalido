import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { ImagenCategoriaModule } from './imagen-categoria/imagen-categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libros } from '../../entities/libro.entity';
import { Categoriaspository } from './CategoriaRepository';
import { Categoria } from './entities/categoria.entity';
import { ImagenCategoria } from './imagen-categoria/entities/imagen-categoria.entity';
import { Librospository } from '../../libros.repository';
import { LibrosModule } from '../../libros.module';

@Module({

  imports:[TypeOrmModule.forFeature([Categoria,Libros]),
ImagenCategoriaModule
],
  controllers: [CategoriasController],
  providers: [CategoriasService],
  exports: [TypeOrmModule],
  
})
export class CategoriasModule {}
