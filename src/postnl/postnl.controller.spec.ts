import { Test, TestingModule } from '@nestjs/testing';
import { PostnlController } from './postnl.controller';

describe('PostnlController', () => {
  let controller: PostnlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostnlController],
    }).compile();

    controller = module.get<PostnlController>(PostnlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
