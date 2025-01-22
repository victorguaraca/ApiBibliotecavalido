import { Module } from '@nestjs/common';
import { ImagenBibliotecarioService } from './imagen-bibliotecario.service';
import { ImagenBibliotecarioController } from './imagen-bibliotecario.controller';

@Module({
  controllers: [ImagenBibliotecarioController],
  providers: [ImagenBibliotecarioService],
})
export class ImagenBibliotecarioModule {}
