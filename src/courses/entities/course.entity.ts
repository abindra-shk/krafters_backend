import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User as Teacher} from 'src/user/entities/user.entity';
import { User as Student } from 'src/user/entities/user.entity';
@Entity()
export class Course{
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  batchName: string;

  @ManyToOne(() => Teacher, { eager: true }) // Use eager loading if you want to load the related teacher along with the batch
  @JoinColumn({ name: 'teacherId' }) // Specify the foreign key column name
  teacher: Teacher;

@ManyToOne(()=> Course, {eager:true})
@JoinColumn({name:"courseId"})
course: Course;

@Column()
startingTime: string;

@Column()
endingTime:string;

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

