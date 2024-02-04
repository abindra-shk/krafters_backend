import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { StatusEnum } from 'src/utils/enums/status.enum';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  courseName: string;

  @IsNotEmpty()
  @IsEnum(StatusEnum)
  status: StatusEnum;
  
  @IsNotEmpty()
  @IsString()
  categoryId: string;
}