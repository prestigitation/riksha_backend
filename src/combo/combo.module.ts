import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboController } from './combo.controller';
import { Combo } from './combo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Combo])],
  providers: [ComboService],
  controllers: [ComboController],
})
export class ComboModule {}
