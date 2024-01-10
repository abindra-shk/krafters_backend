import { UserTypeEnum } from "src/common/enums/user-type.enum";
import { StatusEnum } from "src/common/enums/status.enum";
import { RoleEnum } from "src/utils/enums/role.enum";

export class CreateUserDto {
    username: string;
    email: string;
    phone: string;
    password: string;
    role: RoleEnum;
    userType: UserTypeEnum;
    status: StatusEnum
}
