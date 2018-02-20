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
  websites = [];
  website: Website;
  uid: String;
  name: String;
  description: String;
  userId: String;

  constructor(private router: Router,
              private websiteService: WebsiteService,
              private route: ActivatedRoute) {
  }


  createWebsite() {
    this.website.name = this.websiteForm.value.name;
    this.website.description = this.websiteForm.value.description;
    this.website.developId = this.userId;
    this.websiteService.createWebsite(this.userId, this.website);
    // this.name = this.website.name;
    // this.description = this.website.description;
    // this.website.name = this.websiteForm.value.name;
    // this.website.description = this.websiteForm.value.description;
    // this.website = this.websiteService.updateWebsite(this.website.wgId, this.website);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.website = this.websiteService.findWebsitesById(params['wid']);
      this.websites = this.websiteService.findWebsitesByUser(params['uid']);
      this.userId = params['uid'];
    });
    this.website = new Website('', '', '', '');
  }

}
