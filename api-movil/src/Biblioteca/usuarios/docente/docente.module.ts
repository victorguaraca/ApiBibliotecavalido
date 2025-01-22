import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { ImagenDocenteModule } from './imagen-docente/imagen-docente.module';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService],
  imports: [ImagenDocenteModule],
})
export class DocenteModule {}
