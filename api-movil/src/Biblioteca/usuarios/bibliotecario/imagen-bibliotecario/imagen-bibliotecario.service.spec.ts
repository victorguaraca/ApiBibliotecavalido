import { Test, TestingModule } from '@nestjs/testing';
import { ImagenBibliotecarioService } from './imagen-bibliotecario.service';

describe('ImagenBibliotecarioService', () => {
  let service: ImagenBibliotecarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenBibliotecarioService],
    }).compile();

    service = module.get<ImagenBibliotecarioService>(ImagenBibliotecarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
