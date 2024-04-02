import { Test, TestingModule } from '@nestjs/testing';
import { LabelController } from './label.controller';
import { LabelService } from './label.service';
import { Label } from './label.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seedSourceData } from '../database/seed.source';

describe('LabelController', () => {
  let controller: LabelController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [LabelController],
      providers: [LabelService],
      imports: [
        TypeOrmModule.forRoot(seedSourceData),
        TypeOrmModule.forFeature([Label]),
      ],
    }).compile();

    controller = module.get<LabelController>(LabelController);
  });

  afterEach(() => {
    module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have name in each instance', async () => {
    expect((await controller.get()).every((label) => label.name)).toBeTruthy();
  });
});
