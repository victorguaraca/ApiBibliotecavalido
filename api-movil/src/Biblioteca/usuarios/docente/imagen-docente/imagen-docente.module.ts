import { Module } from '@nestjs/common';
import { ImagenDocenteService } from './imagen-docente.service';
import { ImagenDocenteController } from './imagen-docente.controller';

@Module({
  controllers: [ImagenDocenteController],
  providers: [ImagenDocenteService],
})
export class ImagenDocenteModule {}
