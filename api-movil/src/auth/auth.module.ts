import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JWT_SECRET } from 'src/config/constants';
import { PassportModule } from '@nestjs/passport';
//import { JwtStrategy } from './strategies/jwt.strategies';
import { authRepository } from './auth.repository';
import { Rolrepository } from 'src/Biblioteca/roles/roles.repository';
import { RolesModule } from 'src/Biblioteca/roles/roles.module';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/Biblioteca/usuarios/admin/entities/admin.entity';


@Module({
  imports:[
    
    TypeOrmModule.forFeature([Rol,Admin,authRepository]),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>(JWT_SECRET),
      signOptions:{
        expiresIn:7200
      }
    }),
    inject: [ConfigService],

  }),
],
  controllers: [AuthController],
  providers: [AuthService],
  //exports:[PassportModule,JwtStrategy],
})
export class AuthModule {}
