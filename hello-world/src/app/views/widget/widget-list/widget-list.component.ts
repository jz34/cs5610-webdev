import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets = [];
  pid: String;

  constructor(private domSanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  getURL(url: String) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pid = params['pid'];
      return this.widgetService.findWidgetByPage(this.pid).subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
        }
      );
    });
  }

  reorderWidgets(indexes) {
    this.widgetService.reorderWidget(this.pid, indexes.startIndex, indexes.endIndex)
      .subscribe(
        (data) => console.log(data)
      );
  }

}
