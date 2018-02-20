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
  uid: String;
  name: String;
  description: String;

  constructor(private router: Router,
              private websiteService: WebsiteService,
              private route: ActivatedRoute) {
  }

  updateWebsite() {
    this.website.name = this.websiteForm.value.name;
    this.website.description = this.websiteForm.value.description;
    this.website = this.websiteService.updateWebsite(this.website.uid, this.website);
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.website.uid);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.website = this.websiteService.findWebsitesById(params['wid']);
      this.websites = this.websiteService.findWebsitesByUser(params['uid']);

    });
  }

}
