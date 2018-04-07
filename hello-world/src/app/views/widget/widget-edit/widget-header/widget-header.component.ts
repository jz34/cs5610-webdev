import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  widget: Widget;
  wid: String;
  pid: String;
  wgId: String;

  name: String;
  noName = false;
  noNameMsg = 'Widget name is required!';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.widget = new Widget('', '', 'HEADER', this.pid, '', '', '', '', false);
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
      // this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
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
}
