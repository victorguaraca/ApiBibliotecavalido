import { IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreatePrestamoDto {
  
  @IsNotEmpty()
  libroId: number;

  @IsNotEmpty()
  estudianteId: number;

  @IsNotEmpty()
  bibliotecarioId: number;

  @IsDateString()
  fechaPrestamo: string;

  @IsDateString()
  fechaDevolucion: string;

  @IsOptional()
  @IsDateString()
  fechaRealDevolucion?: string; // Es opcional, ya que puede no estar disponible inmediatamente

  @IsOptional()
  estaDevuelto?: boolean = false; // Por defecto es falso si no se especifica
    nombreEstudiante: string;
    carreraEstudiante: string;
    semestreEstudiante: number;
  emailEstudiante: any;
}
