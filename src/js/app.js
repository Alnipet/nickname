export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    return / . /.exec(this.username) !== null;
  }
}
