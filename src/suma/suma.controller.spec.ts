import { Test, TestingModule } from '@nestjs/testing';
import { SumaController } from './suma.controller';
import { SumaService } from './suma.service';


describe('SumaController', () => {
  let controller: SumaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SumaController],
    }).compile();

    controller = module.get<SumaController>(SumaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});.3
