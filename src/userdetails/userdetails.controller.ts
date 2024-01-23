import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ResponseMessage } from 'src/core/decorators/response.decorator';
import { CreateUserdetailsDto } from './dto/create-userdetail.dto';
import { UserdetailsService } from './userdetails.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-details')
@ApiTags('User')
export class UserdetailsController {
  constructor(private readonly userDetailsService: UserdetailsService) {}

  @Post()
  @ResponseMessage('UserDetails created successfully')
  async createUserDetails(@Body() body: any) {
    console.log('here')
    return this.userDetailsService.create(body);
  }

  @Get()
  findAll() {
    return this.userDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDetailsDto: CreateUserdetailsDto) {
    return this.userDetailsService.update(id, updateUserDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDetailsService.remove(id);
  }
}
