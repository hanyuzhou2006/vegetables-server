import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Vegetable } from 'src/vegetables/vegetable.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field({nullable:true})
  firstName?: string;

  @Column()
  @Field()
  lastName?: string;

  @Column({ default: true })
  @Field()
  isActive: boolean;

  @OneToMany(type => Vegetable, vegetable => vegetable.user)
  @Field(()=>[Vegetable],{nullable:'items'})
  vegetables: Vegetable[];
}