// src/access-token/access-token.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessToken } from './access-token.entity';
import { AccessTokenService } from './access-token.service';
import { AccessTokenResolver } from './access-token.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([AccessToken])],
  providers: [AccessTokenService, AccessTokenResolver],
})
export class AccessTokenModule {}
