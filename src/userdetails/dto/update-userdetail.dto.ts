import { PartialType } from '@nestjs/swagger';
import { CreateUserdetailDto } from './create-userdetail.dto';

export class UpdateUserdetailDto extends PartialType(CreateUserdetailDto) {}
