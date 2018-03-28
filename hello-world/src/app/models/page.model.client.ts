export class Page {
  _id: String;
  name: String;
  websiteId: String;
  title: String;

  constructor(pid: String, name: String, websiteId: String, title: String) {
    this._id = pid;
    this.name = name;
    this.websiteId = websiteId;
    this.title = title;
  }
}
