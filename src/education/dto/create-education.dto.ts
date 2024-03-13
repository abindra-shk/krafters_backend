import { IsString } from "class-validator";

export class CreateEducationDto {
  @IsString()
  education: string;

  @IsString()
  school: string;

  @IsString()
  city: string;

  @IsString()
  startDate: string;

  @IsString() 
  endDate: string;

}
