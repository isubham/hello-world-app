import { CreateUserDAO } from './create-user.dao';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

const persons: any = {};

@Injectable()
export class PersonDb {
  savePerson(createUserDAO: CreateUserDAO) {
    const uniquePersonId = v4();
    persons[uniquePersonId] = createUserDAO;
    return uniquePersonId;
  }

  getPerson(uniquePersonId) {
    if (persons[uniquePersonId]) {
      return persons[uniquePersonId];
    } else {
      throw new Error('User not found');
    }
  }
}

