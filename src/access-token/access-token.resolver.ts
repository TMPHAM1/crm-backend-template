// src/access-token/access-token.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccessTokenService } from './access-token.service';
import { AccessToken } from './access-token.entity';

@Resolver(() => AccessToken)
export class AccessTokenResolver {
  constructor(private accessTokenService: AccessTokenService) {}

  @Query(() => [AccessToken])
  accessTokens() {
    return this.accessTokenService.findAll();
  }

  @Mutation(() => AccessToken)
  createAccessToken(@Args('value') value: string) {
    return this.accessTokenService.create(value);
  }
}
