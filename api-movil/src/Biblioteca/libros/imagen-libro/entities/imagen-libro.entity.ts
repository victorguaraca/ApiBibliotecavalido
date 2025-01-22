import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Libros } from "../../entities/libro.entity";

@Entity('imagenes_libros')
export class ImagenLibro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  url: string;  // URL de la imagen (puede ser una URL o un enlace base64)
  @Column({ type: 'varchar', length: 255 })
  public_id: string; // public_id de la imagen en Cloudinary

  @ManyToOne(() => Libros, (libro) => libro.imagenes)
  @JoinColumn({ name: 'libro_id' })
  libro: Libros;  // Relación con la entidad Libro
}
