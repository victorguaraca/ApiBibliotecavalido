import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
@Controller('roles')
export class RolesController {
  constructor(private readonly rolService: RolesService) { }

  @Get()
  getAll() {
    return this.rolService.getAll();
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolService.create(dto);
  }
}
