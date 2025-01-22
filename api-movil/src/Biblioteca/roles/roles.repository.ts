import { EntityRepository, Repository } from "typeorm";
import { Rol } from "../roles/entities/role.entity";

@EntityRepository (Rol)
export class Rolrepository extends Repository<Rol> {


}