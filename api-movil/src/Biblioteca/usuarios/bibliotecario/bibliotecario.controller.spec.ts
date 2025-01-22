import { Test, TestingModule } from '@nestjs/testing';
import { BibliotecarioController } from './bibliotecario.controller';
import { BibliotecarioService } from './bibliotecario.service';

describe('BibliotecarioController', () => {
  let controller: BibliotecarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BibliotecarioController],
      providers: [BibliotecarioService],
    }).compile();

    controller = module.get<BibliotecarioController>(BibliotecarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
