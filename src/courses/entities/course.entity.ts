import { Category } from 'src/category/entities/category.entity';
import { StatusEnum } from 'src/common/enums/status.enum';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity()
export class Courses {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  image: string; // Store the path or URL of the image

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => User)
  @JoinColumn()
  teacher: User;

  @Column()
  description: string;

  @Column('simple-array')
  whatWillStudentLearn: string[];

  @Column({ type: 'enum', enum: StatusEnum })
  status: StatusEnum;
 
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
