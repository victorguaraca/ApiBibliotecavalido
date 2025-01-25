import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches,IsArray } from "class-validator";
import { CreateImagenAdminDto } from "../imagen-admin/dto/create-imagen-admin.dto";
import { Type } from "class-transformer";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateAdminDto {

    @PrimaryGeneratedColumn('increment')
      id: number;
    
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombre: string;
  
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    nombreAdmin: string;
  
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    email: string;
    @IsArray()
      @IsOptional()
      @Type(() => CreateImagenAdminDto ) // Suponiendo que tienes un DTO para imagenes
      imagenes?: CreateImagenAdminDto [];
  
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/, {
      message: 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número',
    })  
    password: string;
    
}
