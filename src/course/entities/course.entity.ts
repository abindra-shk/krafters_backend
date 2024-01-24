import { Entity, PrimaryGeneratedColumn , Column} from "typeorm";
@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    readonly id: string;
    
    @Column()
    courseName: string;


}
