import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
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

@Module({
  imports: [
    TypeOrmModule.forRoot(dbdatasource),
    ProductModule,
    IngredientModule,
    LabelModule,
    TagModule,
    CategoryModule,
    VariationModule,
    DiscountModule,
    ComboModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
