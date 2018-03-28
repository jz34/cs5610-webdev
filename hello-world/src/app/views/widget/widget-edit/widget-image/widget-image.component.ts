import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  widget: Widget;
  uid: String;
  wid: String;
  pid: String;
  wgId: String;
  baseUrl: String;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widget = new Widget('',  'IMAGE', this.pid, '', '', '', '', false);
  }

  update() {
    if (this.wgId === undefined) {
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          // this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
          this.router.navigate(['https://web-app-maker-angular-4.herokuapp.com/user/', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget).subscribe(
        () => {
          // this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
          this.router.navigate(['https://web-app-maker-angular-4.herokuapp.com/user/', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
    }
  }

  delete() {
    this.widgetService.deleteWidget(this.wgId).subscribe(
      () => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      }
    );
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.pid = params['pid'];
      this.wid = params['wid'];
      this.wgId = params['wgId'];
      if (this.wgId !== undefined) {
        return this.widgetService.findWidgetById(this.wgId).subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
      }
    });
  }

  // 多余？
  upload() {
    this.widgetService.createWidget(this.pid, this.widget).subscribe(
      (widget: Widget) => {
        this.widget = widget;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        console.log(this.widget);
      }
    );
  }
}
