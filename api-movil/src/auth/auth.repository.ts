import { Admin, EntityRepository, Repository } from "typeorm";

@EntityRepository(Admin)
export class authRepository extends Repository<Admin> {

}