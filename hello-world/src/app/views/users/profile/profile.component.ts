import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../../app.component.css']
})

export class ProfileComponent implements OnInit {
  @ViewChild('f') LoginForm: NgForm;
  user: any;
  uid: String;

  username: String;
  email: String;
  firstName: String;
  lastName: String;


  constructor(private router: Router,
              private userService: UserService,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
    // this.user = new User('', '', '', '', '', '');
  }


  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }


  deleteUser() {
    this.route.params.subscribe(params => {
      return this.userService.deleteUser(this.uid).subscribe(
        (data: any) => {
          this.router.navigate(['/login']);
        }
      );
    });
  }

  logout() {
    // this.router.navigate(['/login']);
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.uid = this.user['_id'];
    // this.route.params.subscribe(params => {
    //   this.uid = params['uid'];
    //   return this.userService.findUserById(this.uid).subscribe(
    //     (user: User) => {
    //       this.user = user;
    //     }
    //   );
    // });
  }
}
