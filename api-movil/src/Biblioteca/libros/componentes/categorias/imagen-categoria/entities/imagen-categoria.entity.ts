import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Categoria } from "../../entities/categoria.entity";

@Entity('imagenes_categorias')
export class ImagenCategoria {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  url: string;  // URL de la imagen (puede ser una URL o un enlace base64)

  @ManyToOne(() => Categoria, (categoria) => categoria.imagenes)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;  // Relación con la entidad Categoria
}
