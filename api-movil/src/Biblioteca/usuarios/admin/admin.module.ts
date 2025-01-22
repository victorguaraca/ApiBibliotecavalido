import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { ImagenAdminModule } from './imagen-admin/imagen-admin.module';

@Module({

  imports:[TypeOrmModule.forFeature([Admin,Rol]), ImagenAdminModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
