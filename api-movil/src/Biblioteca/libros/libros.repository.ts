
import {EntityRepository, Repository } from "typeorm";
import { Libros } from "./entities/libro.entity";


@EntityRepository (Libros)
export class Librospository extends Repository<Libros> {


}