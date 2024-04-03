import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import dataSource from '../database/data.source';

@Injectable()
export class CategoryService {
  private categoryRepository: Repository<Category>;
  async get(): Promise<Category[]> {
    if (!dataSource.isInitialized) await dataSource.initialize();
    this.categoryRepository = await dataSource.getRepository(Category);
    const data = await this.categoryRepository.find();
    await dataSource.destroy();
    return data;
  }
}
