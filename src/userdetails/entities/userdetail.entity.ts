// user-details.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { GenderEnum } from 'src/utils/enums/gender.enum';
import { Exclude } from 'class-transformer';
import { StatusEnum } from 'src/common/enums/status.enum';

@Entity()
export class UserDetails {
  @PrimaryGeneratedColumn()
  id: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Column({
    nullable: false,
  })
  firstName: string;

  @Column({
    nullable: false,
  })
  lastName: string;

  @Column()
  dob: Date;

  @Column({
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.MALE,
  })
  gender: GenderEnum;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.PENDING,
  })
  status: StatusEnum;

  @Column()
  joiningDate: Date;

  @Exclude()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  readonly updatedAt: Date;
}
