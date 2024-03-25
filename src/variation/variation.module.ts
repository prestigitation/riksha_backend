import { Module } from '@nestjs/common';
import { VariationService } from './variation.service';
import { Variation } from './variation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Variation])],
  providers: [VariationService],
})
export class VariationModule {}
