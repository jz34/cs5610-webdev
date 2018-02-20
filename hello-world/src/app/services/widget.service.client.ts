import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  widgets: Widget[] = [
    new Widget('123', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('234', 'HEADER', '321', '4', 'Lorem ipsum' ),
    new Widget('345', 'IMAGE', '321', '2', 'text777', '100%', 'https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F19eb57c6a70d5d354b68c5cb1431aeed%2F205858361%2Fbd-spotmini.jpg&client=cbc79c14efcebee57402&signature=1e160c7bcf4c0c526c4dbed864ce5db9ceb7fad6'),
    new Widget('456', 'HTML', '321', '2', '<p>Lorem ipsum</p>' ),
    new Widget('567', 'HEADER', '321', '4', 'Lorem ipsum' ),
    new Widget('678', 'YOUTUBE', '321', '2', 'text888', '100%', 'https://www.youtube.com/embed/YBpdL9hSac4'),
    new Widget('789', 'HTML', '321', '2', '<p>Lorem ipsum</p>' )
  ];

  createWidget(pageId: String, widget: Widget) {
    const new_widget = {
      wgId: (new Date()).getTime() + '',
      widgetType: widget.widgetType,
      pageId: pageId,
      size: widget.size,
      text: widget.text,
      url: widget.url,
      width: widget.width
    };

    this.widgets.push(new_widget);
    return new_widget;
  }

  findWidgetByPage(pageId: String) {
    const resultSet = [];
    for ( const i in this.widgets) {
      if (this.widgets[i].pageId === pageId) {
        resultSet.push(this.widgets[i]);
      }
    }
    return resultSet;
  }

  findWidgetById(widgetId: String) {
    for ( const i in this.widgets) {
      if (this.widgets[i].wgId === widgetId) {
        return this.widgets[i];
      }
    }
  }

  updateWidget(widgetId, widget) {
    for ( const i in this.widgets ) {
      if ( this.widgets[i].wgId === widgetId ) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }
      }
    }
    return false;
  }

  deleteWidget(widgetId) {
    for (const i in this.widgets) {
      if (this.widgets[i].wgId === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
