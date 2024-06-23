import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType('User')
export class User {
 @Field((type)=> String, {nullable: true})
 email: string;
 @Field()
 password: string;
}