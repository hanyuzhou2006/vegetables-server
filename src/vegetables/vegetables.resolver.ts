import { Resolver, Mutation, Args, ResolveField, Parent, Query } from "@nestjs/graphql";
import { Vegetable } from "./vegetable.entity";
import { VegetablesService } from "./vegetables.service";
import { VegetableInput } from "./vegetables.input";
import { User } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";


@Resolver(of => Vegetable)
export class VegetablesResolver {

  constructor(
    private vegetablesService: VegetablesService,
    private usersService: UsersService
  ){}

  @Query(returns => [Vegetable])
  async vegetables(){
    return this.vegetablesService.findAll();
  }

  @ResolveField()
  async user(@Parent() vegetable: Vegetable){
    return this.usersService.findOne(vegetable.userId);
  }
  @Mutation(returns => Vegetable)
  async createVegetable(@Args('vegetable') vegetableInput:VegetableInput){
    const vegetable = new Vegetable();
    vegetable.name = vegetableInput.name;
    vegetable.user = new User();
    vegetable.user.id = vegetableInput.userId;

    return this.vegetablesService.create(vegetable);
  }

 
}