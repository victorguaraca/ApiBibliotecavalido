import { IsEnum } from "@nestjs/class-validator";
import { NombreRol } from "../nombreRol";


export class CreateRoleDto {

    @IsEnum(NombreRol, {message: 'El Rol sólo puede ser Admin,Bibliotecario,Estudiante,Docente'})
    rolNombre:NombreRol;
}
