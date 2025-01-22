import { Test, TestingModule } from '@nestjs/testing';
import { ImagenLibroController } from './imagen-libro.controller';
import { ImagenLibroService } from './imagen-libro.service';

describe('ImagenLibroController', () => {
  let controller: ImagenLibroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenLibroController],
      providers: [ImagenLibroService],
    }).compile();

    controller = module.get<ImagenLibroController>(ImagenLibroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
