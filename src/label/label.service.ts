import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Label } from './label.entity';
import dataSource from 'src/database/data.source';

@Injectable()
export class LabelService {
  private labelRepository: Repository<Label>;
  async get(): Promise<Label[]> {
    await dataSource.initialize();
    this.labelRepository = await dataSource.getRepository(Label);
    const data = await this.labelRepository.find();
    await dataSource.destroy();
    return data;
  }
}
