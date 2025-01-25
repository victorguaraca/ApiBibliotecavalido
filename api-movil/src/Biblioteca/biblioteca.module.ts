

import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { LibrosModule } from './libros/libros.module';
import { CategoriasModule } from './libros/componentes/categorias/categorias.module';
import { PrestamosModule } from './libros/componentes/prestamos/prestamos.module';
import { BibliotecarioModule } from './usuarios/bibliotecario/bibliotecario.module';
import { EstudianteModule } from './usuarios/estudiante/estudiante.module';
import { AdminModule } from './usuarios/admin/admin.module';

@Module({
    imports: [AdminModule,RolesModule,LibrosModule,CategoriasModule,PrestamosModule,BibliotecarioModule,EstudianteModule],
    controllers: [],
    providers: [],
})
export class BibliotecaModule { }
