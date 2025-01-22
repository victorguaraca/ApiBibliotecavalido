
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/Biblioteca/usuarios/admin/entities/admin.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/config/constants';
import { AdminAuth, authinterface } from '../auth.interface';
import { MessageDto } from 'src/common/message.dto';
import { Adminpository } from 'src/Biblioteca/usuarios/admin/admin.repository';


/*@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Admin)
    private readonly authRepository:authRepository,
    private readonly configservice:ConfigService,
    private readonly jwtservice:JwtService,
    @InjectRepository(Admin)
    private readonly adminRepository:Adminpository,

  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configservice.get(JWT_SECRET)
    });
  }

  async validate(payload:authinterface,payloadadmin:AdminAuth) {
    const {Nombreusuario,Email} =payload
    const usuario =await this.authRepository.findOne({where:[{nombreUsuario:Nombreusuario},{email:Email}]})

    const administrador =await this.adminRepository.findOne({where:[{email:Email}]})
    if(!usuario || !administrador){
        return new UnauthorizedException(new MessageDto('Credenciales erroneas'))

    }else{
        return payload || payloadadmin;
    }
  }



}
*/