import { Test, TestingModule } from '@nestjs/testing';
import { BibliotecarioService } from './bibliotecario.service';

describe('BibliotecarioService', () => {
  let service: BibliotecarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BibliotecarioService],
    }).compile();

    service = module.get<BibliotecarioService>(BibliotecarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
