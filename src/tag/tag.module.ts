import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagService],
})
export class TagModule {}
