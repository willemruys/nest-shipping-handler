import { Test, TestingModule } from '@nestjs/testing';
import { PostnlService } from './postnl.service';

describe('PostnlService', () => {
  let service: PostnlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostnlService],
    }).compile();

    service = module.get<PostnlService>(PostnlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
