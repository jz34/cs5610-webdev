import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {Page} from '../../../../models/page.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  widget: Widget;
  wgId: String;
  pid: String;
  // uid: String;
  wid: String;

  name: String;
  noName = false;
  noNameMsg = 'Widget name is required!';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widget = new Widget('', '', 'YOUTUBE', this.pid, '', '', '', '', false);
  }

  update() {
    this.name = this.widgetForm.value.name;

    if (this.name === '') {
      this.noName = true;
      return;
    } else {
      this.noName = false;
    }

    if (this.wgId === undefined) {
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
          // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget).subscribe(
        () => {
          this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
          // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    }
  }

  delete() {
    this.widgetService.deleteWidget(this.wgId).subscribe(
      () => {
        this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wgId = params['wgId'];
      this.pid = params['pid'];
      // this.uid = params['uid'];
      this.wid = params['wid'];
      if (this.wgId !== undefined) {
        this.activatedRoute.params.subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
      }
    });
  }

}
