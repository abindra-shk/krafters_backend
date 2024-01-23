// src/course/dto/create-course.dto.ts

import { IsNotEmpty, IsString, IsDecimal, IsEnum, IsArray } from 'class-validator';
import { StatusEnum } from '../../common/enums/status.enum';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  category: string; // Assuming you send the category id as a string

  @IsNotEmpty()
  teacher: string; // Assuming you send the teacher id as a string

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  whatWillStudentLearn: string[];

  @IsNotEmpty()
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @IsNotEmpty()
  @IsDecimal()
  price: number;
}
