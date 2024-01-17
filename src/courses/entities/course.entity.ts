import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  image: string; // Store the path or URL of the image

  @Column()
  description: string;

  @Column()
  

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
