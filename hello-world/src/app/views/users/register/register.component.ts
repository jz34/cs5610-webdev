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

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifypw = this.registerForm.value.verifypw;
    if (this.password !== this.verifypw) {
      this.pwNotMatch = true;
      return;
    }

    const newUser: User = new User('', this.username, this.password, '', '', '');
    this.userService.createUser(newUser).subscribe(
      (user: User) => {
        this.router.navigate(['/user', user.uid]);
      }
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
