// src/district-curriculum/district-curriculum.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Curriculum } from '../curriculum/curriculum.entity';
import { District } from '../district/district.entity';

@Entity()
export class DistrictCurriculum {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Curriculum, curriculum => curriculum.districtCurriculums)
  curriculum: Curriculum;

  @ManyToOne(() => District, district => district.districtCurriculums)
  district: District;
}
