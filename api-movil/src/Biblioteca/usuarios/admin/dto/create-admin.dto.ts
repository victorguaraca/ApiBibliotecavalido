import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateAdminDto {

    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombre: string;
  
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    nombreAdmin: string;
  
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    email: string;
  
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/, {
      message: 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número',
    })  
    password: string;
    
}
