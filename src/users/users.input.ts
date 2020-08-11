import { Field,  InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {

  @Field({nullable:true})
  firstName?: string;

  
  @Field()
  lastName?: string;

  @Field()
  isActive: boolean;

}