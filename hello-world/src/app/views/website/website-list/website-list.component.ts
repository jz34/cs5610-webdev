import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteListComponent implements OnInit {
  uid: String;
  websites = [];

  constructor(private domSanitizer: DomSanitizer, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      return this.websiteService.findWebsitesByUser(this.uid).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
      }
      );
    });
  }

}
