import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "@nestjs/class-validator";

export class loginUsuarioDto {
   
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    nombreUsuario: string;
   
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    password: string;

}
