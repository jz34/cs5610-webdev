export class Widget {
  wgId: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  formatted: boolean;

  // constructor(wgId, widgetType, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
  constructor(wgId, widgetType, pageId, size= '1', text = 'text', width = '100%', url = 'url', formatted = false) {
    this.wgId = wgId;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.formatted = formatted;
  }
}
