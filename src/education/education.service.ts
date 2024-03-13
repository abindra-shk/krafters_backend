// education.service.ts

import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    const { startDate, endDate } = createEducationDto;

    // Handle start date

    const startDateObj = new Date(startDate);
    // startDateObj.setFullYear(startDateObj.getFullYear(), 0, 1); // Set month and day to January 1st
    console.log('enddate',endDate)
    // Handle end date
    let endDateObj: Date | null = null;
    let present = false; // Initialize present flag to false
    if (!endDate) {
        // If endDate is falsy (null or undefined), set present flag to true
        present = true;
    } else if (endDate === 'present') {
        // If endDate is 'present', set present flag to true
        present = true;
    } else {
        // Handle the case when endDate is a valid year
        endDateObj = new Date(endDate);
        console.log('endDateObj',endDateObj)
      
    }

    console.log('present', endDateObj);
    const education = this.educationRepository.create({
        ...createEducationDto,
        startDate: startDateObj,
        endDate: endDateObj,
        present: present
    });

    return this.educationRepository.save(education);
  }

  async findAll(){
    return this.educationRepository.find();
  }

  async findOne(id: string){
    return this.educationRepository.findOne({where:{id:id}});
  }

  // async update(id: string, updateEducationDto: UpdateEducationDto){
  //   const education = await this.educationRepository.findOne({where:{id:id}});
  //   if (!education) {
  //     throw new BadRequestException('Education not found');
  //   }

  //   const { startDate, endDate } = updateEducationDto;

  //   // Handle start date
  //   if (startDate) {
  //     const startYear = parseInt(startDate, 10);
  //     education.startDate = new Date(startYear, 0, 1);
  //   }

  //   // Handle end date
  //   if (endDate) {
  //     if (endDate === 'present') {
  //       education.endDate = null;
  //     } else {
  //       const endYear = parseInt(endDate, 10);
  //       education.endDate = new Date(endYear, 0, 1);
  //     }
  //   }

  //   return this.educationRepository.save(education);
  // }
  async update(id: string, updateEducationDto: CreateEducationDto){
    const education = await this.educationRepository.findOne({where:{id:id}});
    if (!education) {
      throw new BadRequestException('Education not found');
    }

    const { startDate, endDate } = updateEducationDto;

    // Handle start date
    if (startDate) {
      const startDateObj = new Date(startDate);
      // startDateObj.setFullYear(startDateObj.getFullYear(), 0, 1); // Set month and day to January 1st
      education.startDate = startDateObj;
    }

    // Handle end date
    if (endDate) {
      if (endDate === 'present') {
        education.endDate = null;
      } else {
        const endDateObj = new Date(endDate);
        // endDateObj.setFullYear(endDateObj.getFullYear(), 0, 1); // Set month and day to January 1st
        education.endDate = endDateObj;
      }
    }

    return this.educationRepository.save(education);
}


  async remove(id: string){
    await this.educationRepository.delete(id);
  }
}
