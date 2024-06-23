// src/message/message.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Staff } from '../staff/staff.entity';
import { Event } from '../event/event.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Staff, staff => staff.messages)
  staff: Staff;

  @ManyToOne(() => Event, event => event.messages)
  event: Event;

  @Column()
  note: string;

  @Column({ type: 'timestamp' })
  date: Date;
}
