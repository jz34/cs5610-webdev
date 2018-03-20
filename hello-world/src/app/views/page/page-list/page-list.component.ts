import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PageListComponent implements OnInit {
  wid: String;
  pages = [];
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wid = params['wid'];
      return this.pageService.findPageByWebsiteId(this.wid).subscribe(
        (pages: Page[]) => {
          this.pages = pages;
        }
      );
    });
  }
}
