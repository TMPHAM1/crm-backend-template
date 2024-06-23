// src/staff/staff.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
})
export class StaffModule {}
