// src/access-token/access-token.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessToken } from './access-token.entity';

@Injectable()
export class AccessTokenService {
  constructor(
    @InjectRepository(AccessToken)
    private accessTokenRepository: Repository<AccessToken>,
  ) {}

  findAll(): Promise<AccessToken[]> {
    return this.accessTokenRepository.find();
  }

  create(value: string): Promise<AccessToken> {
    const accessToken = this.accessTokenRepository.create({ value });
    return this.accessTokenRepository.save(accessToken);
  }
}
