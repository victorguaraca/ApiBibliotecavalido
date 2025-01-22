import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/role.entity';
import { MessageDto } from 'src/common/message.dto';
import { Rolrepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor( @InjectRepository(Rol) private readonly rolrepository:Rolrepository )
  {

  }
  async getAll():Promise<Rol[]>{
    const roles=await this.rolrepository.find();

    if(!roles.length){
      throw new BadRequestException(new MessageDto('No hay roles'))

    }
    return roles;

  }

  async create(dto: CreateRoleDto): Promise<any> {
    const exists = await this.rolrepository.findOne({where: {rolNombre: dto.rolNombre}});
    if(exists) throw new BadRequestException(new MessageDto('El Rol Ingresado ya existe'));
    await this.rolrepository.save(dto as Rol);
    return new MessageDto('Rol creado');
}

}
