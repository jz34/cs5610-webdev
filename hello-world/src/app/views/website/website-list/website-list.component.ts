import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteListComponent implements OnInit {
  uid: String;
  websites = [];

  constructor(private domSanitizer: DomSanitizer,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    const user = this.sharedService.user;
    this.uid = user['_id'];
    return this.websiteService.findWebsitesByUser(this.uid).subscribe(
      (websites) => {
        this.websites = websites;
      }
    );
    // this.activatedRoute.params.subscribe(params => {
    //   this.uid = this.sharedService.user['_uid'];
    //   return this.websiteService.findWebsitesByUser(this.uid).subscribe(
    //     (websites: Website[]) => {
    //       this.websites = websites;
    //   }
    //   );
    // });
  }

}
