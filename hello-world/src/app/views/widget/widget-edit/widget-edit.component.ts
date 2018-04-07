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

  wgId: String;
  widget: Widget;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) {
    this.widget = new Widget('', '', '', '', '', '', '', '', false);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.wgId = params['wgId'];
      return this.widgetService.findWidgetById(this.wgId).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        });
    });
  }

}
