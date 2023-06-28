import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonDb } from './person.db';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PersonDb],
})
export class AppModule { }
