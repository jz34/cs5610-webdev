import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service'; // 别忘了
import {Router} from '@angular/router';


// injecting Http service into UserService
@Injectable()
export class UserService {
  constructor(private http: Http, private router: Router, private sharedService: SharedService) {}

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

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
    return this.http.put(this.baseUrl + '/api/user/' + user._id, user ).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }

  login(username: String, password: String) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const  data = res;
        }
      );
  }


  register(username: String, password: String) {
    this.options.withCredentials = true;
    const user = {
      username: username,
      password: password
    };


    return this.http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }


  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== '0') {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }
}

