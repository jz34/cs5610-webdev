import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';

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

  constructor(private router: Router,
              private websiteService: WebsiteService,
              private route: ActivatedRoute) {
    this.website = new Website('', '', '', '');
  }

  updateWebsite() {
    this.websiteService.updateWebsite(this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website.wid).subscribe(
      (data: any) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wid = params['wid'];
      this.websiteService.findWebsitesById(this.wid).subscribe(
        (website: Website) => {
          this.website = website;
        }
      );

      this.uid = params['uid'];
      this.websiteService.findWebsitesByUser(params['uid']).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    });
  }

}
