import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import * as fs from 'fs';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private readonly courseRepository: Repository<Courses>,
  ) {}

  async create(createCourseDto: any) {
    const courses= this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(courses);
  }

  async findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: string) {
    const courses= await this.courseRepository.findOne({where:{id: id}});
    if (!courses) {
      throw new NotFoundException(`Courses with ID ${id} not found`);
    }
    return courses;
  }

  async update(id: string, updateCourseDto: any) {
    await this.findOne(id); // Check if coursesexists
    await this.courseRepository.update(id, updateCourseDto);
    return this.courseRepository.findOne({where:{id: id}});
  }

  async remove(id: string) {
    const courses= await this.findOne(id); // Check if coursesexists
    const imagePath = './upload/images/course' + courses.image;

    if (fs.existsSync(imagePath)) {
      await fs.promises.unlink(imagePath);
    }

    return this.courseRepository.delete(id);
  }
}
