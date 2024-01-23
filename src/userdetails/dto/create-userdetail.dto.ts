import { StatusEnum } from "src/common/enums/status.enum";
import { GenderEnum } from "src/utils/enums/gender.enum";

export class CreateUserdetailsDto {
    firstName: string;
    lastName: string;
    dob: Date;
    gender: GenderEnum;
    status: StatusEnum;
    joiningDate: Date;
}
