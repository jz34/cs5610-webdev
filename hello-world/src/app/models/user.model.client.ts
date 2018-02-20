export class User {
  uid: String;
  username: String;
  password: String;

  firstName: String;
  lastName: String;
  email: String;

  constructor(uid, username, password, firstName = '', lastName = '', email = '') {
    this.uid = uid;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
