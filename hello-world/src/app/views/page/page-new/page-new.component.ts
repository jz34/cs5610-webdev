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

  noName = false;
  noNameMsg = 'Page name is required!';

  constructor(private router: Router,
              private pageService: PageService,
              private route: ActivatedRoute) {
  }

  createPage() {
    this.name = this.pageForm.value.name;

    if (this.name === '') {
      this.noName = true;
      return;
    } else {
      this.noName = false;
    }

    this.pageService.createPage(this.wid, this.page).subscribe(
      (page: Page) => {
        this.page = page;
        this.router.navigate(['/user', 'website', this.wid, 'page'], {relativeTo: this.route});
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.wid = params['wid'];
        this.page = new Page('', '', this.wid, '');
      }
    );
  }

}
