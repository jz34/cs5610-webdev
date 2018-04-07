import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['../../../app.component.css']
})

export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  websites = [];
  website: Website;
  wid: String;
  uid: String;

  name: String;
  noName = false;
  noNameMsg = 'Website name is required!';

  constructor(private router: Router,
              private websiteService: WebsiteService,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
    this.website = new Website('', '', '', '');
  }

  updateWebsite() {
    this.name = this.websiteForm.value.name;

    if (this.name === '') {
      this.noName = true;
      return;
    } else {
      this.noName = false;
    }

    this.websiteService.updateWebsite(this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['/user', 'website'], {relativeTo: this.route});
      }
    );
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website._id).subscribe(
      (data: any) => {
      this.router.navigate(['/user', 'website'], {relativeTo: this.route});
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const user = this.sharedService.user;
      this.uid = user['_id'];
      this.websiteService.findWebsitesByUser(this.uid).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );

      this.wid = params['wid'];
      this.websiteService.findWebsitesById(this.wid).subscribe(
        (website: Website) => {
          this.website = website;
        }
      );
    });
  }

}
