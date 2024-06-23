// src/district/district.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DistrictCurriculum } from '../district-curriculum/district-curriculum.entity';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => DistrictCurriculum, districtCurriculum => districtCurriculum.district)
  districtCurriculums: DistrictCurriculum[];
}
