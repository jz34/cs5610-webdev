export class Widget {
  _id: String;
  name: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  formatted: boolean;

  // constructor(wgId, widgetType, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
  constructor(wgId, name, widgetType, pageId, size= '1', text = 'text', width = '100%', url = 'url', formatted = false) {
    this._id = wgId;
    this.name = name;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.formatted = formatted;
  }
}
