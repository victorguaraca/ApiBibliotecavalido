import { Injectable, NotFoundException, BadRequestException, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libros } from './entities/libro.entity';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { MessageDto } from 'src/common/message.dto';
import { Categoria } from './componentes/categorias/entities/categoria.entity';
import { ImagenLibro } from './imagen-libro/entities/imagen-libro.entity';
import { CloudinaryStorageService } from 'src/services/cloudinaryStorageService';

@Injectable()
export class LibrosService {
  CloudinaryStorageService: any;
  constructor(
    @InjectRepository(Libros)
    private readonly libroRepository: Repository<Libros>,
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,

    @InjectRepository(ImagenLibro)
    private readonly imagenLibroRepository: Repository<ImagenLibro>,
    private readonly cloudinaryStorageService: CloudinaryStorageService,  // Servicio de almacenamiento en Cloudinary




  ) {}

 // Crear libro y asociar la categoría
async create(createLibroDto: CreateLibroDto): Promise<any> {
  // Buscar la categoría usando el id
  const categoria = await this.categoriaRepository.findOne({
      where: { id: createLibroDto.categoriaId }, // Usamos 'where' para especificar la búsqueda por id
  });

  // Verificamos si la categoría existe
  if (!categoria) {
      throw new Error('Categoría no encontrada');
  }

  // Creamos el libro y lo asociamos con la categoría
  const libro = this.libroRepository.create({
      ...createLibroDto,
      categoria, // Asignamos la categoría al libro
  });

  // Guardamos el libro con la categoría asociada
  return await this.libroRepository.save(libro);
}
h

  // Guardar la imagen asociada al libro
  async saveImage(imagenLibro: ImagenLibro): Promise<ImagenLibro> {
    return await this.imagenLibroRepository.save(imagenLibro);
  }
  
  // Obtener todos los libros
  async findAll(): Promise<Libros[]> {
    return await this.libroRepository.find({ relations: ["imagenes"] });
}

  // Obtener un libro por su ID
  async findOne(id: number): Promise<Libros> {
    const libro = await this.libroRepository.findOne({ where: { id } });

    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado.`);
    }

    return libro;
  }

  // Actualizar un libro
  async update(id: number, updateLibroDto: UpdateLibroDto): Promise<string> {
    const libro = await this.libroRepository.findOne({ where: { id } });

    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado.`);
    }

    // Actualizar los campos del libro
    Object.assign(libro, updateLibroDto);

    // Guardar el libro actualizado
    await this.libroRepository.save(libro);

    return `El libro con ID ${id} ha sido actualizado con éxito.`;
  }

  // Eliminar un libro
  async remove(id: number): Promise<string> {
    const libro = await this.libroRepository.findOne({ where: { id } });

    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado.`);
    }

    // Eliminar el libro
    await this.libroRepository.remove(libro);

    return `Libro con ID ${id} ha sido eliminado con éxito.`;
  }

  // Buscar libros por área de conocimiento
  async findByAreaDeConocimiento(areaDeConocimiento: string): Promise<Libros[]> {
    const libros = await this.libroRepository.find({ where: { areaDeConocimiento } });

    if (libros.length === 0) {
      throw new NotFoundException('No se encontraron libros en esta área de conocimiento.');
    }

    return libros;
  }
}