
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { VegetablesModule } from 'src/vegetables/vegetables.module';
import { VegetablesService } from 'src/vegetables/vegetables.service';


@Module({
  imports: [
  TypeOrmModule.forFeature([User]),
  forwardRef(() => VegetablesModule)
],
  providers:[UsersService,UsersResolver,VegetablesService],
  exports: [TypeOrmModule]
})
export class UsersModule {}