// src/staff-event/staff-event.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEvent } from './staff-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffEvent])],
})
export class StaffEventModule {}
