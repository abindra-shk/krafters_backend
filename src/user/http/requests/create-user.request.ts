import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from 'src/utils/enums/role.enum';
import { UserTypeEnum } from 'src/common/enums/user-type.enum';
import { StatusEnum } from 'src/common/enums/status.enum';

export class  CreateUserRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({ enum: RoleEnum })
  @IsEnum(RoleEnum, {
    message: 'Invalid role supplied',
  })
  readonly role: RoleEnum;

  @IsNotEmpty()
  @ApiProperty({ enum: UserTypeEnum })
  @IsEnum(UserTypeEnum, {
    message: 'Invalid usertype supplied',
  })
  readonly userType: UserTypeEnum;

  @IsNotEmpty()
  @ApiProperty({ enum: StatusEnum })
  @IsEnum(StatusEnum, {
    message: 'Invalid status supplied',
  })
  readonly status: StatusEnum;

}
