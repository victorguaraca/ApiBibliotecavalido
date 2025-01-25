import { hash } from "bcrypt";
import { Libros } from "src/Biblioteca/libros/entities/libro.entity";
import { Rol } from "src/Biblioteca/roles/entities/role.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImagenAdmin } from "../imagen-admin/entities/imagen-admin.entity";


@Entity('admin')
export class Admin {

    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({type:'varchar',length:10,nullable:true})
    nombre: string;
  
    @Column({type:'varchar',length:10,nullable:true,unique:true})
    nombreAdmin: string;
  
    @Column({type:'varchar',length:10,nullable:false,unique:true})
    email: string;
  
    @Column({type:'varchar',nullable:false,unique:false})
    password: string;

    
    @OneToMany(type => ImagenAdmin, imagen => imagen.admin)
    imagenes: ImagenAdmin[];  // Relación de uno a muchos con ImagenAdmin

  
    @ManyToMany(type => Rol, rol => rol.Admin, {eager: true})
    @JoinTable({
        name: 'admin_rol',
        joinColumn: {name: 'admin_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })

    roles: Rol[];
     
      @BeforeInsert()
        @BeforeUpdate()
        async hashPasword() {
            if(!this.password) return;
            this.password = await hash(this.password, 10);
        }


}
