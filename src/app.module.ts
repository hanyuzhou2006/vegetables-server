import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Vegetable } from './vegetables/vegetable.entity';
import { VegetablesModule } from './vegetables/vegetables.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'seek',
      host: 'localhost',
      database: 'vegetables',
      synchronize: true,
      entities:[User,Vegetable]
    }),
    GraphQLModule.forRoot(
      {
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
      }
    ),
    UsersModule,
    VegetablesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  constructor(private connection: Connection) {}
}
