// src/access-token/access-token.entity.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class AccessToken {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  value: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: Date;
}
