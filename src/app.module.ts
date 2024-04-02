import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { dbdatasource } from './database/data.source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientModule } from './ingredient/ingredient.module';
import { LabelModule } from './label/label.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import { VariationModule } from './variation/variation.module';
import { DiscountModule } from './discount/discount.module';
import { ComboModule } from './combo/combo.module';
import { Category } from './category/category.entity';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { LabelService } from './label/label.service';
import { Label } from './label/label.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbdatasource),
    TypeOrmModule.forFeature([Category, Product, Label]),
    ProductModule,
    IngredientModule,
    LabelModule,
    TagModule,
    CategoryModule,
    VariationModule,
    DiscountModule,
    ComboModule,
  ],
  controllers: [ProductController],
  providers: [AppService, ProductService, LabelService],
})
export class AppModule {}
