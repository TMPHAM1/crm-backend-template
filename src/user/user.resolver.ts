import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { Request } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './response/user.response';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/decorators/currentUser.decorator';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

 
  @Query(() => [User])
  async users(): Promise<User[]> {;
    return this.userService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query (()=> User)
  async me(@CurrentUser() user): Promise<User[]> {
        return user
  }
}