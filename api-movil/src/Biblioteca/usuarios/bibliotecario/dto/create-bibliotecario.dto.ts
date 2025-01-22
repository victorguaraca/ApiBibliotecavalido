import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "@nestjs/class-validator";

export class CreateBibliotecarioDto {
    @IsOptional() // Este campo es opcional
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @Length(1, 20, { message: 'El nombre debe tener entre 1 y 10 caracteres' })
    nombre: string;
  
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
    @Length(1, 20, { message: 'El nombre de usuario debe tener entre 1 y 10 caracteres' })
    nombreUsuario: string;
  
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    @Length(1, 50, { message: 'El correo electrónico debe tener entre 1 y 20 caracteres' })
    email: string;
  
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    @Length(6, 250, { message: 'La contraseña debe tener entre 6 y 20 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, {
      message: 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número',
    })
    password: string;

}
