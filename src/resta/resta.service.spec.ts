import { Test, TestingModule } from '@nestjs/testing';
import { RestaService } from './resta.service';

describe('RestaService', () => {
  let service: RestaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaService],
    }).compile();

    service = module.get<RestaService>(RestaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
