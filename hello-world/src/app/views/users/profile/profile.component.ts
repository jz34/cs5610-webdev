import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../app.component.css']
})

export class ProfileComponent implements OnInit {
  @ViewChild('f') LoginForm: NgForm;
  user: User;
  uid: String;
  username: String;
  email: String;
  firstName: String;
  lastName: String;


  constructor(private router: Router,
              private userService: UserService,
              private route: ActivatedRoute) {
  }

  updateUser() {
    this.user.uid = this.uid;
    this.user.username = this.LoginForm.value.username;
    this.user.email = this.LoginForm.value.email;
    this.user.firstName = this.LoginForm.value.firstName;
    this.user.lastName = this.LoginForm.value.lastName;
    this.user = this.userService.updateUser(this.user);
    this.router.navigate(['/user', this.user.uid]);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService.findUserById(params['uid']);
    });
    this.username = this.user.username;
    this.email = this.user.email;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
  }


}
