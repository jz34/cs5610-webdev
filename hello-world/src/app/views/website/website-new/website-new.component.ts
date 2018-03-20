import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

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


  constructor(private router: Router,
              private websiteService: WebsiteService,
              private route: ActivatedRoute) {
  }


  createWebsite() {
    this.websiteService.createWebsite(this.uid, this.website).subscribe(
      (website: Website) => {
        this.website = website;
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
      this.website = new Website('', '', this.uid, '');
      return this.websiteService.findWebsitesByUser(this.uid).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    });
  }

}
