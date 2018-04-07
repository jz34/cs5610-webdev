import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  uid: String;
  websites = [];
  website: Website;
  wid: String;
  name: String;
  description: String;

  noName = false;
  noNameMsg = 'Website name is required!';


  constructor(private router: Router,
              private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
  }


  createWebsite() {
    this.name = this.websiteForm.value.name;

    if (this.name === '') {
      this.noName = true;
      return;
    } else {
      this.noName = false;
    }

    this.websiteService.createWebsite(this.uid, this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['/user', 'website'], {relativeTo: this.route});
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const user = this.sharedService.user;
      this.uid = user['_id'];
      this.website = new Website('', '', this.uid, '');
      return this.websiteService.findWebsitesByUser(this.uid).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    });
  }

}
