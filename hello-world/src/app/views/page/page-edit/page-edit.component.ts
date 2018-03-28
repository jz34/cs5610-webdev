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
  pid; String;
  // uid: String;
  // wid: String;
  page: Page;
  pages = [];
  name: String;
  title: String;

  constructor(private router: Router,
              private pageService: PageService,
              private route: ActivatedRoute) {
    this.page = new Page('', '', '', '');
  }

  updatePage() {
    this.pageService.updatePage(this.page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  deletePage() {
    this.pageService.deletePage(this.page._id).subscribe(
      (page: Page) => {
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pid = params['pid'];
      // this.uid = params['uid'];
      // this.wid = params['wid'];
      return this.pageService.findPageById(this.pid).subscribe(
        (page: Page) => {
          this.page = page;
        }
      );
    });
  }
}

