import { IsBoolean, IsDateString, IsEmail, IsInt, IsOptional, IsString, Length, Max, Min } from "class-validator";

export class CreateEstudianteDto {


    @IsString()
    @Length(1, 100)
    nombre: string;
  
    @IsEmail()
    @Length(1, 150)
    email: string;
  
    @IsDateString()
    fechaDeNacimiento: string;
  
    @IsBoolean()
    activo: boolean;
  
    @IsOptional()
    @IsString()
    @Length(0, 100)
    carrera?: string;
  
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(12)
    semestre?: number;
}
