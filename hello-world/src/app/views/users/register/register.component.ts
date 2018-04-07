import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  // user: User; // new field
  username: String;
  password: String;
  verifypw: String;
  pwNotMatch = false;
  errorMsg = 'Passwords don\'t match!';
  error: String;

  noUsernameError = false;
  noPasswordError = false;
  noVerifyPasswordError = false;
  noUsername = 'Username is required!';
  noPassword = 'Password is required!';
  noVerifyPassword = 'Verify Password is required!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifypw = this.registerForm.value.verifypw;

    if (this.username === '') {
      this.noUsernameError = true;
      return;
    } else {
      this.noUsernameError = false;
    }

    if (this.password === '') {
      this.noPasswordError = true;
      return;
    } else {
      this.noPasswordError = false;
    }

    if (this.verifypw === '') {
      this.noVerifyPasswordError = true;
      return;
    } else {
      this.noVerifyPasswordError = false;
    }

    if (this.password !== this.verifypw) {
      this.pwNotMatch = true;
      return;
    }

    const newUser: User = new User('', this.username, this.password, '', '', '');

    this.userService.register(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          console.log(error);
          this.error = error._body;
        }
      );

    // this.userService.createUser(newUser).subscribe(
    //   (user: User) => {
    //     this.router.navigate(['/user', user._id]);
    //   }
    // );
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
