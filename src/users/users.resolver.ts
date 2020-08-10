import { Resolver, Query, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { VegetablesService } from "src/vegetables/vegetables.service";

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private vegetablesService: VegetablesService,
  ){}
  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
  @Query(returns => [User])
  async users(){
    return this.usersService.findAll();
  }

  @ResolveField()
  async vegetables(@Parent() user: User){
    return this.vegetablesService.findByUser(user);
  }
}