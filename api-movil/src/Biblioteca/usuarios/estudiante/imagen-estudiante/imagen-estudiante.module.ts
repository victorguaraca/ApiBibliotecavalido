import { Module } from '@nestjs/common';
import { ImagenEstudianteService } from './imagen-estudiante.service';
import { ImagenEstudianteController } from './imagen-estudiante.controller';

@Module({
  controllers: [ImagenEstudianteController],
  providers: [ImagenEstudianteService],
})
export class ImagenEstudianteModule {}
