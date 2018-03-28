export class Website {
  _id: String;
  name: String;
  developId: String;
  description: String;

  constructor(wid: String, name: String, developerId: String, description: String) {
    this._id = wid;
    this.name = name;
    this.developId = developerId;
    this.description = description;

  }

}
