import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from 'src/Biblioteca/roles/entities/role.entity';
import { Rolrepository } from 'src/Biblioteca/roles/roles.repository';
import { Admin } from './entities/admin.entity';
import { MessageDto } from 'src/common/message.dto';
import { Adminpository } from './admin.repository';
import { NombreRol } from 'src/Biblioteca/roles/nombreRol';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Rolrepository,
    @InjectRepository(Admin)
    private readonly adminRepository: Adminpository
  ) {}

  // Obtener todos los admins
  async getAll(): Promise<Admin[]> {
    const admins = await this.adminRepository.find();
    if (!admins.length) throw new NotFoundException(new MessageDto('No hay administradores en la lista'));
    return admins;
  }

  // Crear un nuevo Admin
  async create(dto: CreateAdminDto): Promise<any> {
    const { nombreAdmin, email } = dto;

    // Verificar si ya existe un admin con el mismo nombre o email
    const exists = await this.adminRepository.findOne({
      where: [{ nombreAdmin: nombreAdmin }, { email: email }],
    });

    if (exists) {
      throw new BadRequestException(new MessageDto('El Admin ya existe'));
    }

    // Buscar los roles necesarios (solo un ADMIN para el nuevo admin, si es necesario asignar más roles lo puedes hacer de forma condicional)
    const rolAdmin = await this.rolRepository.findOne({ where: { rolNombre: NombreRol.ADMIN } });
    const rolBibliotecario = await this.rolRepository.findOne({ where: { rolNombre: NombreRol.BIBLIOTECARIO } });
    const rolEstudiante = await this.rolRepository.findOne({ where: { rolNombre: NombreRol.ESTUDIANTE } });
    const rolDocente = await this.rolRepository.findOne({ where: { rolNombre: NombreRol.DOCENTE } });

    // Verificar que los roles existan
    if (!rolAdmin || !rolBibliotecario || !rolEstudiante || !rolDocente) {
      throw new InternalServerErrorException(new MessageDto('Los roles aún no han sido creados'));
    }

    // Crear el admin y asignar los roles
    const admin = this.adminRepository.create(dto);
    admin.roles = [rolAdmin, rolBibliotecario, rolEstudiante, rolDocente]; // Asignar todos los roles o solo uno dependiendo de la lógica de tu aplicación

    await this.adminRepository.save(admin);

    return new MessageDto('Administrador creado');
  }
}
