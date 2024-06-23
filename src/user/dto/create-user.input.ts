import { InputType, Int, Field } from '@nestjs/graphql';
@InputType('CreateUserInput')
export class CreateUserInput {
 @Field()
 email: string;
 @Field()
 password: string;

 @Field()
 username: string;
}
