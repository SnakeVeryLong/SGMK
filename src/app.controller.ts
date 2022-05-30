import { Controller, Get, Post, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { User } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  async create(@Body() users: User) {
    this.appService.create(users);
  }

  @Get()
  findAll() {
      return 'Get report for SGMK';
  }

  @Get(':id')
  findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id}`

  
  }
}
