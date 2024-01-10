import { StatusEnum } from "src/common/enums/status.enum";
import { UserTypeEnum } from "src/common/enums/user-type.enum";
import { RoleEnum } from "src/utils/enums/role.enum";


export class CreateUserCommand {
  constructor(
    readonly data: {
      readonly username: string;
      readonly email: string;
      readonly phone: string;
      readonly password: string;
      readonly role: RoleEnum;
      readonly userType: UserTypeEnum;
      readonly status: StatusEnum;

    },
  ) {}
}
