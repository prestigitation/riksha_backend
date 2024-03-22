import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { dbdatasource } from './product/data.source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot(dbdatasource), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
