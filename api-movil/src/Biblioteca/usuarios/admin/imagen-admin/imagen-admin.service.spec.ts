import { Test, TestingModule } from '@nestjs/testing';
import { ImagenAdminService } from './imagen-admin.service';

describe('ImagenAdminService', () => {
  let service: ImagenAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenAdminService],
    }).compile();

    service = module.get<ImagenAdminService>(ImagenAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
