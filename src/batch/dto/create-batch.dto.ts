import { IsString, IsNotEmpty, IsEnum, IsArray, IsDateString, IsObject } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { StatusEnum } from 'src/utils/enums/status.enum';
import { DeepPartial } from 'typeorm';

export class CreateBatchDto {
  @IsNotEmpty()
  @IsString()
  batchName: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsObject()
  teacher: DeepPartial<User>;

  @IsNotEmpty()
  @IsDateString()
  startingDate: string;

  @IsNotEmpty()
  @IsString()
  startingTime: string;

  @IsNotEmpty()
  @IsString()
  endingTime: string;

  @IsNotEmpty()
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @IsObject({ each: true })
  students: DeepPartial<User>[];

}
