import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import seedSource from '../database/seed.source';
import dataSource from '../database/data.source';

@Injectable()
export class ProductService {
  private productRepository: Repository<Product>;
  async get(): Promise<Product[]> {
    await dataSource.initialize();
    this.productRepository = await dataSource.getRepository(Product);
    const data = await this.productRepository.find();
    await dataSource.destroy();
    return data;
  }
}
