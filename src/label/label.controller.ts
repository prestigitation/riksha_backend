import { Controller, Get, Inject } from '@nestjs/common';
import { LabelService } from './label.service';
import { Label } from './label.entity';

@Controller('label')
export class LabelController {
  constructor(
    @Inject(LabelService) private readonly labelService: LabelService,
  ) {}
  @Get()
  async get(): Promise<Label[]> {
    return await this.labelService.get();
  }
}
