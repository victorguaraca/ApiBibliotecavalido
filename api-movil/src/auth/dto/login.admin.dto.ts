import { isEmail, IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "@nestjs/class-validator";

export class loginAdmin {
   
    @IsNotEmpty({ message: 'Ingrese el correo' })
    Email: string;
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    password: string;

}
