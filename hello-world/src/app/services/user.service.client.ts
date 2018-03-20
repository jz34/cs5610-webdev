import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


// injecting Http service into UserService
@Injectable()
export class UserService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  createUser(user: User) {
    return this.http.post(this.baseUrl + '/api/user/', user).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  findUserByCredentials(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/api/user/' + user.uid, user ).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }
}

