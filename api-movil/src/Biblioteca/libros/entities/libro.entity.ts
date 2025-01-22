import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Admin } from 'src/Biblioteca/usuarios/admin/entities/admin.entity';
import { Prestamo } from '../componentes/prestamos/entities/prestamo.entity';
import { Categoria } from '../componentes/categorias/entities/categoria.entity';
import { ImagenLibro } from '../imagen-libro/entities/imagen-libro.entity';

@Entity('libros')
export class Libros extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 13, unique: true })
  isbn: string;  // ISBN único del libro

  @Column({ type: 'varchar', length: 100 })
  tipo: string;  // Tipo de libro (físico, digital)

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'varchar', length: 255 })
  areaDeConocimiento: string;

  @Column({ type: 'varchar', length: 255 })
  autor: string;

  @Column({ type: 'int' })
  numeroEjemplares: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  codigoUbicacionFisica: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  verificacion: string;

  @Column({ type: 'varchar', length: 100 })
  editorial: string;

  @Column({ type: 'int' })
  ano: number;

  @Column({ type: 'varchar', length: 50 })
  edicion: string;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.libro)
  prestamos: Prestamo[];

  @ManyToOne(() => Categoria, (categoria) => categoria.libros)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @OneToMany(() => ImagenLibro, (imagenLibro) => imagenLibro.libro)
  imagenes: ImagenLibro[];


}
