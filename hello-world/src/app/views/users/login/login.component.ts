import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import 'rxjs/Rx';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../app.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String; // see usage as two-way data binding
  password: String; // see usage as two-way data binding
  errorFlag = false;
  errorMsg = 'Invalid username or password!';

  noUsername = false;
  noPassword = false;
  noUsernameMsg = 'Username is required!';
  noPasswordMsg = 'Password is required!';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    if (this.username === '') {
      this.noUsername = true;
      return;
    } else {
      this.noUsername = false;
    }

    if (this.password === '') {
      this.noPassword = true;
      return;
    } else {
      this.noPassword = false;
    }
    // console.log('login username:    ', this.username);

    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.errorFlag = false;
          this.router.navigate(['/profile']);
          },
        (error: any) => {
          console.log(this.errorMsg);
          this.errorFlag = true;
        }
      );

    // this.userService.findUserByCredentials(this.username, this.password).subscribe(
    //   (user: User) => {
    //     if (user) {
    //       this.router.navigate(['/user', user._id ]);
    //     } else {
    //       this.errorFlag = true;
    //     }
    //   });
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

}
