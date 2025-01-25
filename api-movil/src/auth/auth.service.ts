import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginUsuarioDto } from './dto/login.usuario.dto';
import { authRepository } from './auth.repository';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Rolrepository } from 'src/Biblioteca/roles/roles.repository';
import { MessageDto } from 'src/common/message.dto';
import { compare } from 'bcrypt';
import { AdminAuth, authinterface } from './auth.interface';
import { NombreRol } from 'src/Biblioteca/roles/nombreRol';
import { JwtService } from '@nestjs/jwt';
import { loginAdmin } from './dto/login.admin.dto';
import { Admin } from 'src/Biblioteca/usuarios/admin/entities/admin.entity';
import { Adminpository } from 'src/Biblioteca/usuarios/admin/admin.repository';

@Injectable()
export class AuthService {


  constructor(
    @InjectRepository(Rol)
   private readonly rolRepository:Rolrepository,
    @InjectRepository(Admin)
    private readonly adminpository:Adminpository,

    private readonly jetservice:JwtService
  
  ){

  }

  async loginadmin(dto:loginAdmin):Promise <any>{
    const {Email} =dto;
    const admin =await this.adminpository.findOne({where:[{email:Email}]})


     if(!admin){
            return new UnauthorizedException(new MessageDto('No se autirzo a realaizar esta operacion'))
    
        }
        
        const passwordok = await compare(dto.password,admin.password)
        if(!passwordok){
          return new UnauthorizedException(new MessageDto('Contraseña erronea'))

        }

        const autenticacion :AdminAuth={
          id:admin.id,
          Email:admin.email,
          roles:admin.roles.map(rol => rol.rolNombre as NombreRol)
        }

        const token = await this.jetservice.sign(autenticacion)

        return {token};
  }
 

}
