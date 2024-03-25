import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Label } from './label.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Label])],
  providers: [LabelService],
})
export class LabelModule {}
