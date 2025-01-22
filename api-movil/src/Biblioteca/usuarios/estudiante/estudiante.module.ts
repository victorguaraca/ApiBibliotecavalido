import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { Estudiante } from './entities/estudiante.entity';
import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { Libros } from 'src/Biblioteca/libros/entities/libro.entity';
import { Bibliotecario } from '../bibliotecario/entities/bibliotecario.entity';
import { ImagenEstudianteModule } from './imagen-estudiante/imagen-estudiante.module';

@Module({
  imports:[TypeOrmModule.forFeature([Rol,Estudiante,Prestamo,Libros,Bibliotecario]), ImagenEstudianteModule],
  controllers: [EstudianteController],
  providers: [EstudianteService],
})
export class EstudianteModule {}
