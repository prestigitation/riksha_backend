import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Label } from './label.entity';
import seedDataSource from '../database/seed.source';

@Injectable()
export class LabelService {
  private labelRepository: Repository<Label>;
  async get(): Promise<Label[]> {
    await seedDataSource.initialize();
    this.labelRepository = await seedDataSource.getRepository(Label);
    const data = await this.labelRepository.find();
    await seedDataSource.destroy();
    return data;
  }
}
