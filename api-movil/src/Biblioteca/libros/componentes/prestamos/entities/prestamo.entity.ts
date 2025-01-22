import { IsString } from 'class-validator';
import { Libros } from 'src/Biblioteca/libros/entities/libro.entity';
import { Bibliotecario } from 'src/Biblioteca/usuarios/bibliotecario/entities/bibliotecario.entity';
import { Estudiante } from 'src/Biblioteca/usuarios/estudiante/entities/estudiante.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
 // Suponiendo que tienes la entidad Estudiante

@Entity('prestamos')
export class Prestamo {
@PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Libros, (libro) => libro.prestamos)
  @JoinColumn({ name: 'libro_id' })
  libro: Libros;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.prestamos)
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;


  @ManyToOne(() => Bibliotecario, (bibliotecario) => bibliotecario.prestamos)
  @JoinColumn({ name: 'bibliotecario_id' })
  bibliotecario: Bibliotecario; // Relación con Bibliotecario

  @IsString()
  nombreEstudiante: string; // Nombre del Estudiante (si es necesario)

  @IsString()
  carreraEstudiante: string; // Carrera del Estudiante (si es necesario)

  @IsString()
  semestreEstudiante: string; // Semestre del Estudiante (si es necesario)

  @Column({ type: 'date' })
  fechaPrestamo: string;

  @Column({ type: 'date' })
  fechaDevolucion: string;

  @Column({ nullable: true })
  fechaRealDevolucion: string; // Si se devuelve antes o después de la fecha de vencimiento

  @Column({ default: false })
  estaDevuelto: boolean; // Si el libro ha sido devuelto o no

  @CreateDateColumn()
  fechaDeCreacion: Date;

  @UpdateDateColumn()
  fechaDeActualizacion: Date;
}
