import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bibliotecario } from "../../entities/bibliotecario.entity";

@Entity('bibliotecarioimagenes')
export class ImagenBibliotecario {


    @PrimaryGeneratedColumn('increment')
    id: number;  // Identificador único de la imagen

    @Column({ type: 'varchar', length: 255 })
    url: string;  // URL de la imagen (puede ser una URL o una ruta en el servidor)

    @ManyToOne(() => Bibliotecario, (bibliotecario) => bibliotecario.imagenes)
    bibliotecario: Bibliotecario;  // Relación con la entidad Bibliotecario
}
