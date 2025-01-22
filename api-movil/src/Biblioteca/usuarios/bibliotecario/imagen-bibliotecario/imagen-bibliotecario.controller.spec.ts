import { Test, TestingModule } from '@nestjs/testing';
import { ImagenBibliotecarioController } from './imagen-bibliotecario.controller';
import { ImagenBibliotecarioService } from './imagen-bibliotecario.service';

describe('ImagenBibliotecarioController', () => {
  let controller: ImagenBibliotecarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenBibliotecarioController],
      providers: [ImagenBibliotecarioService],
    }).compile();

    controller = module.get<ImagenBibliotecarioController>(ImagenBibliotecarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
