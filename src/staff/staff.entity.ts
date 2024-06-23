// src/staff/staff.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StaffEvent } from '../staff-event/staff-event.entity';
import { Message } from '../message/message.entity';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @OneToMany(() => StaffEvent, staffEvent => staffEvent.staff)
  staffEvents: StaffEvent[];

  @OneToMany(() => Message, message => message.staff)
  messages: Message[];
}
