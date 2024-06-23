// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ObjectType, Field, ID} from '@nestjs/graphql'

@ObjectType()
@Entity()
export class User {
  @Field(()=> ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({nullable: true})
  username: string;

  @Field({nullable: true})
  @Column({nullable: true})
  email: string;

  @Column()
  password: string;

}
