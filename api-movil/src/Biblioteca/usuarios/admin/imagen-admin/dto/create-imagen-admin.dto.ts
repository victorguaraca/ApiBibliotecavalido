import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateImagenAdminDto {

        @IsString()
        @IsNotEmpty()
        url: string;  // URL de la imagen
      
        @IsInt()
        @IsNotEmpty()
        adminId: number;  // ID del Admin que tiene la imagen asociada
    
}
