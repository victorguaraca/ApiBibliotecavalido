import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estudiante } from "../../entities/estudiante.entity";

@Entity('estudiante')
export class ImagenEstudiante {

    @PrimaryGeneratedColumn('increment')
    id: number;  // Identificador único de la imagen

    @Column({ type: 'varchar', length: 255 })
    url: string;  // URL de la imagen (puede ser una URL o una ruta en el servidor)

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.imagenes)
    estudiante: Estudiante;  // Relación con la entidad Estudiante
}
