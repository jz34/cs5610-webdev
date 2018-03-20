import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['../../../../app.component.css']
})

export class WidgetHtmlComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  widget: Widget;
  uid: String;
  wid: String;
  pid: String;
  wgId: String;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widget = new Widget('',  'HTML', this.pid, '', '', '', '', false);
  }

  updateHtml() {
    if (this.wgId === undefined) {
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
          // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget).subscribe(
        () => {
          this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
          // this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
    }
  }

  deleteHtml() {
    this.widgetService.deleteWidget(this.wgId).subscribe(
      () => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgId = params['wgId'];
      if (this.wgId === undefined) {
        this.widget = new Widget('', 'HTML', this.pid, '', '', '', '', false);
      } else {
        return this.widgetService.findWidgetById(this.wgId).subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
      }
    });
  }
}
