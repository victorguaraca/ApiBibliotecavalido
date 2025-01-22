import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ImagenEstudiante } from '../imagen-estudiante/entities/imagen-estudiante.entity';

@Entity('estudiantes')  // Nombre de la tabla en la base de datos
export class Estudiante {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true, length: 150 })
  email: string;

  @Column({ type: 'date' })
  fechaDeNacimiento: string;

  @Column({ default: true })
  activo: boolean;

  @Column({ length: 100, nullable: true })  // Campo carrera, puede ser nulo si es opcional
  carrera: string;

  @Column({ type: 'int', nullable: true })  // Campo semestre, puede ser nulo si es opcional
  semestre: number;

  @CreateDateColumn()
  fechaDeCreacion: Date;

  @UpdateDateColumn()
  fechaDeActualizacion: Date;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.estudiante)
  prestamos: Prestamo[];

  

@ManyToMany(type => Rol, rol => rol.Admin, {eager: true})
    @JoinTable({
        name: 'estudiante_rol',
        joinColumn: {name: 'estudiante_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: Rol[];


    @OneToMany(() => ImagenEstudiante, (imagen) => imagen.estudiante)
  imagenes: ImagenEstudiante[];  // Los estudiantes pueden tener múltiples imágenes



}
