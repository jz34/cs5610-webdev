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
  username: String;
  password: String;
  verifypw: String;
  pwNotMatch = false;
  errorMsg = 'Passwords don\'t match!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifypw = this.registerForm.value.verifypw;
    if (this.password !== this.verifypw) {
      this.pwNotMatch = true;
      return;
    }

    const user: User = new User('' + this.userService.users.length, this.username, this.password);
    this.userService.createUser(user);
    this.router.navigate(['/user', user.uid]);
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
