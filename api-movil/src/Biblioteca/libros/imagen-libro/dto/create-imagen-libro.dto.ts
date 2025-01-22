import { IsNotEmpty, IsString } from "class-validator";

export class CreateImagenLibroDto {

    @IsString()
    @IsNotEmpty()
    public_id: string;  // public_id de Cloudinary
  
    @IsString()
    @IsNotEmpty()
    url: string; 
}
