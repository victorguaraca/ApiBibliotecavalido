import { Test, TestingModule } from '@nestjs/testing';
import { ImagenCategoriaController } from './imagen-categoria.controller';
import { ImagenCategoriaService } from './imagen-categoria.service';

describe('ImagenCategoriaController', () => {
  let controller: ImagenCategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenCategoriaController],
      providers: [ImagenCategoriaService],
    }).compile();

    controller = module.get<ImagenCategoriaController>(ImagenCategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
