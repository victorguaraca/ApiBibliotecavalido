import {EntityRepository, Repository } from "typeorm";
import { Bibliotecario } from "./entities/bibliotecario.entity";




@EntityRepository (Bibliotecario)
export class Bibliotecariorepository extends Repository<Bibliotecario> {


}