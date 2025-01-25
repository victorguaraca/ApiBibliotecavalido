import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "@nestjs/class-validator";

export class CreateBibliotecarioDto {
 
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    nombre: string;
  
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    nombreUsuario: string;
  
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    email: string;
  
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @Length(6, 250, { message: 'La contraseña debe tener entre 6 y 20 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, {
      message: 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número',
    })
    password: string;

}
