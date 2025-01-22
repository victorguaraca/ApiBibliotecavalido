import { Module } from '@nestjs/common';
import { ImagenLibroService } from './imagen-libro.service';
import { ImagenLibroController } from './imagen-libro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenLibro } from './entities/imagen-libro.entity';
import { ImagenLibroRepository } from './imagen-libro.repository';

@Module({
   imports:[TypeOrmModule.forFeature([ImagenLibro,ImagenLibroRepository])],
  controllers: [ImagenLibroController],
  providers: [ImagenLibroService],
})
export class ImagenLibroModule {}
