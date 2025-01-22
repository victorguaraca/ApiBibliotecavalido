import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginUsuarioDto } from './dto/login.usuario.dto';
import { loginAdmin } from './dto/login.admin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('login')

    Post(@Body() dto: loginUsuarioDto) {
      //return this.authService.login(dto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('admin')
    create(@Body() dto: loginAdmin) {
      return this.authService.loginadmin(dto);
    }
    
}
