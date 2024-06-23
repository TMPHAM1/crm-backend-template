// src/event/event.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StaffEvent } from '../staff-event/staff-event.entity';
import { Message } from '../message/message.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean' })
  isScheduled: boolean;

  @Column()
  requester: string;

  @Column()
  requesterPosition: string;

  @Column()
  district: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ type: 'timestamp' })
  start: Date;

  @Column({ type: 'timestamp' })
  end: Date;

  @Column({ type: 'boolean' })
  isVirtual: boolean;

  @Column()
  location: string;

  @Column({ type: 'text' })
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(3)' })
  createdAt: Date;

  @Column({ type: 'boolean' })
  isArchived: boolean;

  @Column()
  attendees: number;

  @OneToMany(() => StaffEvent, staffEvent => staffEvent.event)
  staffEvents: StaffEvent[];

  @OneToMany(() => Message, message => message.event)
  messages: Message[];
}
