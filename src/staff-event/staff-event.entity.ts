// src/staff-event/staff-event.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Staff } from '../staff/staff.entity';
import { Event } from '../event/event.entity';

@Entity()
export class StaffEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Staff, staff => staff.staffEvents)
  staff: Staff;

  @ManyToOne(() => Event, event => event.staffEvents)
  event: Event;
}
