import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libros } from './entities/libro.entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ImagenLibroModule } from './imagen-libro/imagen-libro.module';
import { Categoria } from './componentes/categorias/entities/categoria.entity';
import { Librospository } from './libros.repository';
import { CategoriasModule } from './componentes/categorias/categorias.module';
import { ImagenLibroRepository } from './imagen-libro/imagen-libro.repository';
import { ImagenLibro } from './imagen-libro/entities/imagen-libro.entity';
import { CloudinaryStorageService } from 'src/services/cloudinaryStorageService';
import { PrestamosModule } from './componentes/prestamos/prestamos.module';

@Module({
   imports:[TypeOrmModule.forFeature([Libros, Categoria, ImagenLibro])],
  controllers: [LibrosController],
  providers: [LibrosService,JwtService,CloudinaryStorageService], 
})
export class LibrosModule {}
