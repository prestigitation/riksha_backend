import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { Request } from 'express';
import { Paginate, PaginateQuery } from 'nestjs-paginate';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}
  @Get()
  async get(@Req() request: Request, @Paginate() paginateQuery: PaginateQuery) {
    return await this.productService.get(request.query, paginateQuery);
  }
}
