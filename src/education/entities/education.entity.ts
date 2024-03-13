import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  education: string;

  @Column()
  school: string;

  @Column()
  city: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ default: false })
  present: Boolean;


}
