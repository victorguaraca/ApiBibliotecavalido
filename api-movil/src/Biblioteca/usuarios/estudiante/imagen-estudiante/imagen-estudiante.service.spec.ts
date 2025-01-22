import { Test, TestingModule } from '@nestjs/testing';
import { ImagenEstudianteService } from './imagen-estudiante.service';

describe('ImagenEstudianteService', () => {
  let service: ImagenEstudianteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenEstudianteService],
    }).compile();

    service = module.get<ImagenEstudianteService>(ImagenEstudianteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
