import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDAO } from './create-user.dao';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  postPerson(@Body() createUserDao: CreateUserDAO): string {
    return this.appService.savePerson(createUserDao);
  }

  @Get(':userId')
  getPerson(@Param('userId') userId: string): string {
    return this.appService.getPerson(userId);
  }
}
