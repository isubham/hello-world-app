import { CreateUserDAO } from './create-user.dao';
import { Injectable, Param, Query } from '@nestjs/common';
import { PersonDb } from './person.db';

@Injectable()
export class AppService {
  constructor(private readonly userDb: PersonDb) { }
  getPerson(userId: string): string {
    return this.userDb.getPerson(userId);
  }

  savePerson(createUserDAO: CreateUserDAO): string {
    return this.userDb.savePerson(createUserDAO);
  }
}
