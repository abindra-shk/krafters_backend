import { Module } from '@nestjs/common';
import { UserService } from './http/services/user.service';
import { UserController } from './http/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { BcryptService } from 'src/authentication/services/bcrypt.service';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { UserdetailsModule } from 'src/userdetails/userdetails.module';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User]),UserdetailsModule, AddressModule],
  controllers: [UserController],
  providers: [CreateUserHandler, BcryptService,UserService],
  exports: [UserService],
})
export class  UserModule {}
