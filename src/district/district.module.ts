// src/district/district.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([District])],
})
export class DistrictModule {}
