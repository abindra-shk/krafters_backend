import { Module } from '@nestjs/common';
import { UserdetailsService } from './userdetails.service';
import { UserdetailsController } from './userdetails.controller';
import { UserDetails } from './entities/userdetail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetails])],
  controllers: [UserdetailsController],
  providers: [UserdetailsService],
})
export class UserdetailsModule {}
