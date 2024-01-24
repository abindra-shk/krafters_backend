import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User as Teacher} from 'src/user/entities/user.entity';
import { Course } from 'src/course/entities/course.entity';
import { User as Student } from 'src/user/entities/user.entity';
import { StatusEnum } from 'src/utils/enums/status.enum';
@Entity()
export class Batch{
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  batchName: string;

  @Column()
  price:string;

  @ManyToOne(() => Teacher, { eager: true }) // Use eager loading if you want to load the related teacher along with the batch
  @JoinColumn({ name: 'teacherId' }) // Specify the foreign key column name
  teacher: Teacher;

// @ManyToOne(()=> Course, {eager:true})
// @JoinColumn({name:"courseId"})
// course: Course;
@Column()
startingDate:string;

@Column()
startingTime: string;

@Column()
endingTime:string;

@Column({
  type: 'enum',
  enum: StatusEnum,
  default: StatusEnum.INACTIVE,
})
status: StatusEnum;

@ManyToMany(() => Student, { eager: true })
@JoinTable({
  name: 'batch_students', // This table will store the many-to-many relationship
  joinColumn: { name: 'batchId', referencedColumnName: 'id' },
  inverseJoinColumn: { name: 'studentId', referencedColumnName: 'id' },
})
students: Student[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

