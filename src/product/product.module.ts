import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { commands } from '../database/seed.command';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ...commands],
  exports: [...commands],
  controllers: [ProductController],
})
export class ProductModule {}
