
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vegetable } from './vegetable.entity';
import { VegetablesService } from './vegetables.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vegetable])],
  providers:[VegetablesService],
  exports: [TypeOrmModule]
})
export class VegetablesModule {}