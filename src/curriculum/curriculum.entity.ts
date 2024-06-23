// src/curriculum/curriculum.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DistrictCurriculum } from '../district-curriculum/district-curriculum.entity';

@Entity()
export class Curriculum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(() => DistrictCurriculum, districtCurriculum => districtCurriculum.curriculum)
  districtCurriculums: DistrictCurriculum[];
}
