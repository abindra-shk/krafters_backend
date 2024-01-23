import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { Batch } from './entities/batch.entity';

@Injectable()
export class BatchService {
  constructor(
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
  ) {}

  async create(createBatchDto: CreateBatchDto): Promise<Batch> {
    const batch = this.batchRepository.create(createBatchDto);
    return await this.batchRepository.save(batch);
  }

  async findAll(): Promise<Batch[]> {
    return await this.batchRepository.find();
  }

  async findOne(id: string): Promise<Batch | undefined> {
    return await this.batchRepository.findOne({where:{id: id}});
  }
  async update(id: string, updateBatchDto: UpdateBatchDto): Promise<Batch> {
    const batch = await this.batchRepository.preload({
      id: id,
      ...updateBatchDto,
    });
    if (!batch) {
      throw new NotFoundException(`Batch with ID ${id} not found`);
    }
    return await this.batchRepository.save(batch);
  }

  async remove(id: string): Promise<void> {
    const batch = await this.batchRepository.findOne({where:{id: id}});
    if (!batch) {
      throw new NotFoundException(`Batch with ID ${id} not found`);
    }
    await this.batchRepository.remove(batch);
  }
}