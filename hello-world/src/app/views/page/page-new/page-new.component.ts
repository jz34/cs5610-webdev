import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;
  pages = [];
  page: Page;
  uid: String;
  name: String;
  title: String;
  websiteId: String;

  constructor(private router: Router,
              private pageService: PageService,
              private route: ActivatedRoute) {
  }

  createPage() {
    this.page.name = this.pageForm.value.name;
    this.page.title = this.pageForm.value.title;
    this.page.websiteId = this.websiteId;
    this.pageService.createPage(this.websiteId, this.page);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pages = this.pageService.findPageByWebsiteId(params['wid']);
      this.websiteId = params['wid'];
    });
    this.page = new Page('', '', '', '');
  }

}
