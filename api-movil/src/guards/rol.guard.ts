
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolDecorator } from '../decorators/rol.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }


    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
     const hasrol = () => user.roles.some((rol:string )=>roles.includes(rol));
     return user && hasrol();
  }
}
