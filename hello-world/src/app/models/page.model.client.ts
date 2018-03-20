export class Page {
  pid: String;
  name: String;
  websiteId: String;
  title: String;

  constructor(pid: String, name: String, websiteId: String, title: String) {
    this.pid = pid;
    this.name = name;
    this.websiteId = websiteId;
    this.title = title;
  }
}
