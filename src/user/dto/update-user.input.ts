import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  email: string;
}