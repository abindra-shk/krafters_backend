import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { StatusEnum } from "src/common/enums/status.enum";
import { UserTypeEnum } from "src/common/enums/user-type.enum";
import { RoleEnum } from "src/utils/enums/role.enum";
import { UserDetails } from "src/userdetails/entities/userdetail.entity";

@Entity()
export class User {
  constructor(props?: Partial<User>) {
    if (props) {
      Object.assign(this, props);
    }
  }

  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    unique: true,
    nullable: true,
  })
  phone: string;

  @Exclude()
  @Column({
    nullable: true,
    select: false,
  })
  readonly password: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.STAFF_ADMIN,
  })
  role: RoleEnum;
  
  @Column({
    type: 'enum',
    enum: UserTypeEnum,
    default: UserTypeEnum.ADMIN,
  })
  userType: UserTypeEnum;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.INACTIVE,
  })
  status: StatusEnum;

  @OneToOne(() => UserDetails)
  @JoinColumn()
  userDetails: UserDetails;

  @Exclude()
  @CreateDateColumn()
  readonly createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  readonly updatedAt: Date;
}
