import { Test, TestingModule } from '@nestjs/testing';
import { ImagenCategoriaService } from './imagen-categoria.service';

describe('ImagenCategoriaService', () => {
  let service: ImagenCategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenCategoriaService],
    }).compile();

    service = module.get<ImagenCategoriaService>(ImagenCategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
