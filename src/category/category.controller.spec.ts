import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seedSourceData } from '../database/seed.source';
import { Category } from './category.entity';

describe('CategoryController', () => {
  let controller: CategoryController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService],
      imports: [
        TypeOrmModule.forRoot(seedSourceData),
        TypeOrmModule.forFeature([Category]),
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  afterEach(() => {
    module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have required data filled', async () => {
    expect(
      (await controller.get()).every((category) => category.title),
    ).toBeTruthy();
    expect(
      (await controller.get()).every((category) => category.image),
    ).toBeTruthy();
    expect(
      (await controller.get()).every((category) => category.slug),
    ).toBeTruthy();
  });
});
