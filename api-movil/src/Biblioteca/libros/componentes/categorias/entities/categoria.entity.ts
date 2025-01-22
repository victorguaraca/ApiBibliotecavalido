import { Libros } from 'src/Biblioteca/libros/entities/libro.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ImagenCategoria } from '../imagen-categoria/entities/imagen-categoria.entity';


@Entity('categorias')
export class Categoria {
@PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100, unique: true })
  nombre: string;

  @OneToMany(() => Libros, (libro) => libro.categoria)
  libros: Libros[]; 
  
  @OneToMany(() => ImagenCategoria, (imagenCategoria) => imagenCategoria.categoria)
  imagenes: ImagenCategoria[];
  
}
