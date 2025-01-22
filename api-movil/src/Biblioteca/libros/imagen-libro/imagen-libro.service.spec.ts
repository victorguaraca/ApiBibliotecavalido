import { Test, TestingModule } from '@nestjs/testing';
import { ImagenLibroService } from './imagen-libro.service';

describe('ImagenLibroService', () => {
  let service: ImagenLibroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenLibroService],
    }).compile();

    service = module.get<ImagenLibroService>(ImagenLibroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
