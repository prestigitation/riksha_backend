import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import seedDataSource from '../database/seed.source';
import { checkParams } from '../utils/main.utils';
import dataSource from '../database/data.source';
export interface IProductParams {
  labels?: string;
  tags?: string;
  category?: number;
}

@Injectable()
export class ProductService {
  private productRepository: Repository<Product>;
  async get(params: IProductParams): Promise<Product[]> {
    if (!dataSource.isInitialized) await dataSource.initialize();
    this.productRepository = await dataSource.getRepository(Product);
    const data = await this.productRepository.find({
      relations: ['labels', 'tags', 'category', 'ingredients'],
      where: {
        category: params?.category
          ? {
              id: params?.category ?? 0,
            }
          : null,
        labels: checkParams(params?.labels ?? '', 'title'),
        tags: checkParams(params?.tags ?? '', 'title'),
      },
    });
    await dataSource.destroy();
    return data;
  }
}
