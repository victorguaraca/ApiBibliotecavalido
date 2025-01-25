import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "../../entities/admin.entity";

@Entity('imagen_admin')

export class ImagenAdmin {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 255 })
    url: string;  // Esta columna almacenará la URL de la imagen

    @ManyToOne(type => Admin, admin => admin.imagenes, { nullable: true })
    admin: Admin;  // Relación con la tabla Admin

}
