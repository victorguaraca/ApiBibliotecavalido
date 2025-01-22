import { Module } from '@nestjs/common';
import { ImagenAdminService } from './imagen-admin.service';
import { ImagenAdminController } from './imagen-admin.controller';

@Module({
  controllers: [ImagenAdminController],
  providers: [ImagenAdminService],
})
export class ImagenAdminModule {}
