import { Test, TestingModule } from '@nestjs/testing';
import { ImagenAdminController } from './imagen-admin.controller';
import { ImagenAdminService } from './imagen-admin.service';

describe('ImagenAdminController', () => {
  let controller: ImagenAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenAdminController],
      providers: [ImagenAdminService],
    }).compile();

    controller = module.get<ImagenAdminController>(ImagenAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
