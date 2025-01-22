import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "../../entities/admin.entity";

export class ImagenAdmin {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 255 })
    url: string;  // Esta columna almacenará la URL de la imagen

    @ManyToOne(type => Admin, admin => admin.imagenes, { nullable: false })
    admin: Admin;  // Relación con la tabla Admin

}
