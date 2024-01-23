import { UserTypeEnum } from "src/common/enums/user-type.enum";
import { StatusEnum } from "src/common/enums/status.enum";
import { RoleEnum } from "src/utils/enums/role.enum";
import { UserDetails } from "src/userdetails/entities/userdetail.entity";
import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;
    
    @IsString()
    email: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    password: string;
    
    @IsString()
    role: RoleEnum;
    
    @IsString()
    userType: UserTypeEnum;
    
    @IsString()
    status: StatusEnum;
    
    @IsString()
    userDetails: UserDetails;
}
