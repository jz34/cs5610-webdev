import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  widget: Widget;
  wgId: String;
  pageId: String;
  text: String;
  url: String;
  width: String;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) { }

  update() {
    this.widget.text = this.widgetForm.value.text;
    this.widget.url = this.widgetForm.value.url;
    this.widget.width = this.widgetForm.value.width;
    this.widget.widgetType = 'YOUTUBE';
    if (this.wgId !== undefined) { // check it's update or add new
      this.widgetService.updateWidget(this.wgId, this.widget);
    } else {
      this.widget = this.widgetService.createWidget(this.pageId, this.widget);
    }
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  delete() {
    if (this.wgId !== undefined) {
      this.widgetService.deleteWidget(this.wgId);
    } else {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wgId = params['wgid'];
      this.pageId = params['pid'];
    });

    if (this.wgId !== undefined) {
      this.widget = this.widgetService.findWidgetById(this.wgId);
    } else {
      this.widget = new Widget('', '', '', '', '', '', '');
    }
    this.text = this.widget.text;
    this.url = this.widget.url;
    this.width = this.widget.width;
  }

}
