import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';


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

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // alert(this.username);

    this.userService.findUserByCredentials(this.username, this.password).subscribe(
      (user: User) => {
        this.errorFlag = false;
        this.router.navigate(['/user', user.uid ]);
        },
      (error: any) => {
        this.errorFlag = true;
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  }

}
