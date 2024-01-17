import { PartialType } from '@nestjs/swagger';
import { CreateUserdetailsDto } from './create-userdetail.dto';

export class UpdateUserdetailDto extends PartialType(CreateUserdetailsDto) {}
