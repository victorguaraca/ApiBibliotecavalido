
import {EntityRepository, Repository } from "typeorm";
import { Categoria } from "./entities/categoria.entity";



@EntityRepository (Categoria)
export class Categoriaspository extends Repository<Categoria> {


}