import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User('456', 'bob', 'bob', 'Bob', 'Marley'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
    new User('234', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];

  createUser(user: User) {
    this.users.push(new User(user.uid, user.username, user.password));
  }

  findUserByCredential(username: String, password: String) {
    return this.users.find( function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserById(userId: String) {
    return this.users.find(function(user) {
      return user.uid === userId;
    });
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].uid === user.uid) {
        this.users[i].username = user.username;
        this.users[i].email = user.email;
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  deleteUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].uid === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}
