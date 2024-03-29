import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seedSourceData } from '../database/seed.source';

describe('ProductController', () => {
  let controller: ProductController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
      imports: [
        TypeOrmModule.forRoot(seedSourceData),
        TypeOrmModule.forFeature([Product]),
      ],
    }).compile();
    controller = module.get<ProductController>(ProductController);
  });

  afterEach(() => {
    module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have image in each given product', async () => {
    const response = await controller.get();
    expect(response.every((product: Product) => product.image)).toBeTruthy();
  });

  it('should have category filled in each given product', () => {
    expect(true).toBeFalsy();
  });
});
