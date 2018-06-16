import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Kanan', lastname:'patel', mobilenumber:1234567891,birthdate:'10/17/1995',city:'vapi',gender:'male',hobbies:'travelling'  },
  { id: 2, name: 'Mantra',lastname:'patel', mobilenumber:1234567891 ,birthdate:'10/17/1995',city:'vapi',gender:'male',hobbies:'travelling'  },
  { id: 3, name: 'Mihir',lastname:'patel', mobilenumber:1234567891,birthdate:'10/17/1995',city:'vapi',gender:'male',hobbies:'travelling'   }, 
  { id: 4, name: 'Shivai',lastname:'patel', mobilenumber:1234567891,birthdate:'10/17/1995',city:'vapi',gender:'male',hobbies:'travelling'  },
  { id: 5,name: 'Farhan' ,lastname:'patel', mobilenumber:1234567891,birthdate:'10/17/1995',city:'vapi',gender:'male',hobbies:'travelling'  },
     ];
    return {users};
  }
}


