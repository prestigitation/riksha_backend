import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import seedDataSource from '../database/seed.source';
import { checkParams } from '../utils/main.utils';
import dataSource from '../database/data.source';
import { paginate, PaginateQuery } from 'nestjs-paginate';
export interface IProductParams {
  label?: string;
  tags?: string;
  category?: number;
}

@Injectable()
export class ProductService {
  private productRepository: Repository<Product>;
  async get(params: IProductParams, paginateQuery: PaginateQuery) {
    if (!dataSource.isInitialized) await dataSource.initialize();
    this.productRepository = await dataSource.getRepository(Product);
    const whereOptions = [
      ...checkParams(params?.label ?? '', 'labels', 'title'),
      ...checkParams(params?.tags ?? '', 'tags', 'title'),
    ];

    if (params.category) {
      whereOptions.push({
        category: {
          id: params.category,
        },
      });
    }
    const data = await paginate(paginateQuery, this.productRepository, {
      sortableColumns: ['id', 'tags.id', 'ingredients.id'],
      relations: ['labels', 'tags', 'category', 'ingredients', 'discount'],
      where: whereOptions,
    });
    await dataSource.destroy();
    return data;
  }
}
