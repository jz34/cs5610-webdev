import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WidgetChooserComponent implements OnInit {
  widgets = [];
  pageId = '222';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {}

  // create(widgetType: String) {
  //   this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pageId, 'widget', 'new', widgetType ]);
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageId = params['pid'];
    });
    this.widgets = this.widgetService.findWidgetByPage(this.pageId);
  }

}
