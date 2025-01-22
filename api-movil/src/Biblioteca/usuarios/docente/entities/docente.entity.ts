import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ImagenDocente } from '../imagen-docente/entities/imagen-docente.entity';

@Entity('docentes') // Nombre de la tabla en la base de datos
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ length: 100 })
  departamento: string; // Departamento al que pertenece el docente

  @Column({ type: 'date' })
  fechaDeContratacion: string;

  @Column({ default: true })
  activo: boolean; // Indica si el docente está activo

  @OneToMany(() => ImagenDocente, (imagen) => imagen.docente)
  imagenes: ImagenDocente[];  // Los docentes pueden tener múltiples imágenes

  @CreateDateColumn()
  fechaDeCreacion: Date;

  @UpdateDateColumn()
  fechaDeActualizacion: Date;

@ManyToMany(type => Rol, rol => rol.Admin, {eager: true})
    @JoinTable({
        name: 'docente_rol',
        joinColumn: {name: 'docente_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: Rol[];
}
