export class Page {
  uid: String;
  name: String;
  websiteId: String;
  title: String;

  constructor(uid, name, websiteId, description) {
    this.uid = uid;
    this.name = name;
    this.websiteId = websiteId;
    this.title = description;
  }
}
