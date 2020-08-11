
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vegetable } from './vegetable.entity';
import { VegetablesService } from './vegetables.service';
import { VegetablesResolver } from './vegetables.resolver';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vegetable]),
    forwardRef(() => UsersModule)
 ],
  providers:[VegetablesService,VegetablesResolver,UsersService],
  exports: [TypeOrmModule]
})
export class VegetablesModule {}