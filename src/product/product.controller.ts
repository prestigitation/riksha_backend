import { Controller, Get, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}
  @Get()
  async get(): Promise<Product[]> {
    return await this.productService.get();
  }
}
