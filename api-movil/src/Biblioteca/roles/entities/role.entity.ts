import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NombreRol } from "../nombreRol";
import { Admin } from "src/Biblioteca/usuarios/admin/entities/admin.entity";
import { Bibliotecario } from "src/Biblioteca/usuarios/bibliotecario/entities/bibliotecario.entity";
import { Estudiante } from "src/Biblioteca/usuarios/estudiante/entities/estudiante.entity";
import { Docente } from "src/Biblioteca/usuarios/docente/entities/docente.entity";

@Entity({name:'rol'})
export class Rol {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    rolNombre:NombreRol;

    @ManyToMany(type => Admin, Admin => Admin.roles)
    Admin: Admin[];

    @ManyToMany(type => Bibliotecario, bibliotecario =>bibliotecario.roles)
    Bibliotecario: Admin[];


    @ManyToMany(type => Estudiante, estudiante =>estudiante.roles)
    Estudiante: Estudiante[];

    @ManyToMany(type => Docente, docente =>docente.roles)
    Docente: Estudiante[];

}

