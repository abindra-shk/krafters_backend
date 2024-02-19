import { Category } from "src/category/entities/category.entity";
import { StatusEnum } from "src/utils/enums/status.enum";
import { Entity, PrimaryGeneratedColumn , Column, ManyToOne, JoinColumn} from "typeorm";
@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    readonly id: string;
    
    @Column()
    courseName: string;

    @ManyToOne(()=>Category,{eager:true})
    @JoinColumn({name: 'categoryId'})
    category: Category;

    @Column(
       {type:"enum",
       enum: StatusEnum,
       default: StatusEnum.INACTIVE} 
    )
    status:StatusEnum;
}
