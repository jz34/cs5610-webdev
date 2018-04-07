import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';
import {SharedService} from '../../../../services/shared.service';


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

  name: String;
  noName = false;
  noNameMsg = 'Widget name is required!';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService,
              private sharedService: SharedService) {
    this.widget = new Widget('', '',  'IMAGE', this.pid, '', '', '', '', false);
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
          // this.router.navigate(['https://web-app-maker-angular-4.herokuapp.com/user/', 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
    } else {
      this.widgetService.updateWidget(this.widget).subscribe(
        () => {
          this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
          // this.router.navigate(['https://web-app-maker-angular-4.herokuapp.com/user/', 'website', this.wid, 'page', this.pid, 'widget']);
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
    this.baseUrl = environment.baseUrl;
    this.activatedRoute.params.subscribe(params => {
      const user = this.sharedService.user;
      this.uid = user['_id'];
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
