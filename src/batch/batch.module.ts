import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from './entities/batch.entity';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Batch])], 
  controllers: [BatchController],
  providers: [BatchService],
})
export class BatchModule {}
