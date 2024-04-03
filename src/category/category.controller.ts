import { Controller, Get, Inject } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(
    @Inject(CategoryService) private readonly categoryService: CategoryService,
  ) {}
  @Get()
  async get(): Promise<Category[]> {
    return await this.categoryService.get();
  }
}
