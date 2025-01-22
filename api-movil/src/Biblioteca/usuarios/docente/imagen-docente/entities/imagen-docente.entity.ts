import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Docente } from "../../entities/docente.entity";

export class ImagenDocente {
    
    @PrimaryGeneratedColumn('increment')
    id: number;  // Identificador único de la imagen

    @Column({ type: 'varchar', length: 255 })
    url: string;  // URL de la imagen (puede ser una URL o una ruta en el servidor)

    @ManyToOne(() => Docente, (docente) => docente.imagenes)
    docente: Docente;  // Relación con la entidad Docente
    
}
