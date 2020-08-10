import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from 'src/users/user.entity';

@ObjectType()
@Entity()
export class Vegetable {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  name?: string;

  @ManyToOne(type=>User,user=>user.vegetables)
  @Field(()=>User,{nullable:true})
  user: User;
}