import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenAdminDto } from './create-imagen-admin.dto';

export class UpdateImagenAdminDto extends PartialType(CreateImagenAdminDto) {}
