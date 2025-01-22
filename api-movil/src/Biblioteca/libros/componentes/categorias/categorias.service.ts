import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Like, Repository } from 'typeorm';
import { CategoriaDTO } from './dto/update-categoria.dto';
import { ImagenCategoria } from './imagen-categoria/entities/imagen-categoria.entity';
import { CreateImagenCategoriaDto } from './imagen-categoria/dto/create-imagen-categoria.dto';



@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,

    @InjectRepository(ImagenCategoria)
    private readonly imagenCategoriaRepository: Repository<ImagenCategoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({ relations: ['imagenes'] }); // Relacionar imágenes con categorías
  }

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(categoria);
  }

  // Guardar la imagen asociada a la categoría
  async saveImage(imagenCategoria: ImagenCategoria): Promise<ImagenCategoria> {
    return await this.imagenCategoriaRepository.save(imagenCategoria);
  }
}
