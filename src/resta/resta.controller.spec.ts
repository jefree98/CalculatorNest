import { Test, TestingModule } from '@nestjs/testing';
import { RestaController } from './resta.controller';

describe('RestaController', () => {
  let controller: RestaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaController],
    }).compile();

    controller = module.get<RestaController>(RestaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
