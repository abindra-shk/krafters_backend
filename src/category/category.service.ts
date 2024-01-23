 import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import * as fs from 'fs';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // async create(createCategoryDto: any) {
  //   return this.categoryRepository.save(createCategoryDto);
  // }

  async create(createCategoryDto: any) {
    const category = this.categoryRepository.create(createCategoryDto)
     return this.categoryRepository.save(category);
  }


  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOne({where:{id: id}});
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id); // Check if category exists
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    const category = await this.findOne(id); // Check if category exists
    const imagePath = './upload/images/category' + category.image;

    if (fs.existsSync(imagePath)) {
      await fs.promises.unlink(imagePath);
    }

    return this.categoryRepository.delete(id);
  }
}
