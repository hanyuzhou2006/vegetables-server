import { Field, InputType, Int } from "@nestjs/graphql";
@InputType()
export class VegetableInput {

  @Field()
  name: string;

  @Field(()=>Int)
  userId: number;
}