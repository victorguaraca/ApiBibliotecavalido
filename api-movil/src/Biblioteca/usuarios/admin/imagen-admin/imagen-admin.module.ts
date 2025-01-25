import { Module } from '@nestjs/common';
import { ImagenAdminService } from './imagen-admin.service';
import { ImagenAdminController } from './imagen-admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../entities/admin.entity';
import { ImagenAdmin } from './entities/imagen-admin.entity';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';

@Module({
   imports:[TypeOrmModule.forFeature([ImagenAdmin,Admin,Rol])],
  controllers: [ImagenAdminController],
  providers: [ImagenAdminService],
})
export class ImagenAdminModule {}
