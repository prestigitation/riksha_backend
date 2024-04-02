import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}
  @Get()
  async get(@Req() request: Request): Promise<Product[]> {
    return await this.productService.get(request.query);
  }
}
