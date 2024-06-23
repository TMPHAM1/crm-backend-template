// src/curriculum/curriculum.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curriculum } from './curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curriculum])],
})
export class CurriculumModule {}
