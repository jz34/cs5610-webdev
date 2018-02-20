import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;
  pages = [];
  page: Page;
  uid: String;
  name: String;
  title: String;

  constructor(private router: Router,
              private pageService: PageService,
              private route: ActivatedRoute) {
  }

  updatePage() {
    this.page.name = this.pageForm.value.name;
    this.page.title = this.pageForm.value.title;
    this.pageService.updatePage(this.page.uid, this.page);
  }

  deletePage() {
    this.pageService.deletePage(this.page.uid);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = this.pageService.findPageById(params['pid']);
      this.pages = this.pageService.findPageByWebsiteId(params['wid']);
    });
  }
}

