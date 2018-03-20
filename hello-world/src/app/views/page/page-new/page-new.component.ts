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
  pid: String;
  name: String;
  title: String;
  wid: String;

  constructor(private router: Router,
              private pageService: PageService,
              private route: ActivatedRoute) {
  }

  createPage() {
    this.pageService.createPage(this.wid, this.page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['../'], {relativeTo: this.route});
      });
    // this.page.name = this.pageForm.value.name;
    // this.page.title = this.pageForm.value.title;
    // this.page.websiteId = this.websiteId;
    // this.pageService.createPage(this.websiteId, this.page);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.wid = params['wid'];
        this.page = new Page('', '', this.wid, '');
      }
    );
  }

}
