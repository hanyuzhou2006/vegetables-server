import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UsersService } from "./users.service";
import { VegetablesService } from "src/vegetables/vegetables.service";
import { UserInput } from "./users.input";

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

  @Mutation(returns => User)
  async createUser(@Args('user') userInput: UserInput){
    const user = new User();
    user.firstName = userInput.firstName;
    user.lastName = userInput.lastName;
    user.isActive = userInput.isActive;
    return this.usersService.create(user);
  }
}