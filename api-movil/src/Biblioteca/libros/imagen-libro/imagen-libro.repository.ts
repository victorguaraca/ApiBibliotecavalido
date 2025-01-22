
import {EntityRepository, Repository } from "typeorm";
import { ImagenLibro } from "./entities/imagen-libro.entity";


@EntityRepository (ImagenLibro)
export class ImagenLibroRepository extends Repository<ImagenLibro> {
    


}