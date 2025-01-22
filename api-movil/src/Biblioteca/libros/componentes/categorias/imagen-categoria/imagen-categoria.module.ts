import { Module } from '@nestjs/common';
import { ImagenCategoriaService } from './imagen-categoria.service';
import { ImagenCategoriaController } from './imagen-categoria.controller';
import { ImagenCategoria } from './entities/imagen-categoria.entity';
import { Categoria } from '../entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
    imports:[TypeOrmModule.forFeature([ImagenCategoria])],
  controllers: [ImagenCategoriaController],
  providers: [ImagenCategoriaService],
  exports: [TypeOrmModule]
})
export class ImagenCategoriaModule {}
