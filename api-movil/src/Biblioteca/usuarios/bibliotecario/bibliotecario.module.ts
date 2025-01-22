import { Module } from '@nestjs/common';
import { BibliotecarioService } from './bibliotecario.service';
import { BibliotecarioController } from './bibliotecario.controller';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Estudiante } from '../estudiante/entities/estudiante.entity';
import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { Libros } from 'src/Biblioteca/libros/entities/libro.entity';
import { Bibliotecario } from './entities/bibliotecario.entity';
import { ImagenBibliotecarioModule } from './imagen-bibliotecario/imagen-bibliotecario.module';

@Module({
  imports:[TypeOrmModule.forFeature([Bibliotecario,Rol,Estudiante,Prestamo,Libros]), ImagenBibliotecarioModule],
  controllers: [BibliotecarioController],
  providers: [BibliotecarioService,JwtService],
})
export class BibliotecarioModule {}
