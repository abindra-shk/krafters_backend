import { IsString } from "class-validator";
import { isNull } from "util";

export class CreateCategoryDto {
    @IsString()
    categoryName: string;

    image: string;
}
