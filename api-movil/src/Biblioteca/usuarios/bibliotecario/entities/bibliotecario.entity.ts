import { Prestamo } from 'src/Biblioteca/libros/componentes/prestamos/entities/prestamo.entity';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ImagenBibliotecario } from '../imagen-bibliotecario/entities/imagen-bibliotecario.entity';

@Entity()
export class Bibliotecario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type:'varchar',length:10,nullable:true})
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @CreateDateColumn()
  fechaDeContratacion: Date;

  @Column({ default: true })
  activo: boolean;


  @OneToMany(() => ImagenBibliotecario, (imagen) => imagen.bibliotecario)
  imagenes: ImagenBibliotecario[];  // Los bibliotecarios pueden tener múltiples imágenes



    @OneToMany(() => Prestamo, (prestamo) => prestamo.bibliotecario)
    prestamos: Prestamo[]

    @ManyToMany(type => Rol, rol => rol.Admin, {eager: true})
    @JoinTable({
        name: 'bibliotecario_rol',
        joinColumn: {name: 'bibliotecario_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: Rol[];

}
