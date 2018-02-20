import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WidgetEditComponent implements OnInit {

  uid: String;  // widgetId
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['wgid'];
    });
    this.widget = this.widgetService.findWidgetById(this.uid);
  }

}
