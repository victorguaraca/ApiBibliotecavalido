import { Test, TestingModule } from '@nestjs/testing';
import { ImagenEstudianteController } from './imagen-estudiante.controller';
import { ImagenEstudianteService } from './imagen-estudiante.service';

describe('ImagenEstudianteController', () => {
  let controller: ImagenEstudianteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenEstudianteController],
      providers: [ImagenEstudianteService],
    }).compile();

    controller = module.get<ImagenEstudianteController>(ImagenEstudianteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
