import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Website} from '../../../models/website.model.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['../../../app.component.css']
})

export class WidgetChooserComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}



