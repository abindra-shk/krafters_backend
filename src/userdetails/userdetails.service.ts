import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDetails } from './entities/userdetail.entity';
import { CreateUserdetailsDto } from './dto/create-userdetail.dto';


@Injectable()
export class UserdetailsService {
  constructor(
    @InjectRepository(UserDetails)
    private userDetailsRepository: Repository<UserDetails>,
  ) {}

  async create(createUserDetailsDto: any) {
    const userDetails = this.userDetailsRepository.create(createUserDetailsDto);
    console.log('here')
    return this.userDetailsRepository.save(userDetails);
  }

  async findAll() {
    return this.userDetailsRepository.find();
  }

  async findOne(id: string) {
    return this.userDetailsRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateUserDetailsDto: CreateUserdetailsDto) {
    await this.findOne(id); // Check if user details exist
    return this.userDetailsRepository.update(id, updateUserDetailsDto);
  }

  async remove(id: string) {
    const userDetails = await this.findOne(id); // Check if user details exist
    return this.userDetailsRepository.remove(userDetails);
  }
}
