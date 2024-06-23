// src/district-curriculum/district-curriculum.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictCurriculum } from './district-curriculum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistrictCurriculum])],
})
export class DistrictCurriculumModule {}
