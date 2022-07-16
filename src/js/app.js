export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const result = /^[A-Za-z]{1}([A-Za-z\-_]*(?<!\d)\d{0,3}[A-Za-z\-_]*)*[A-Za-z]{1}$|^[A-Za-z]$/g.test(this.username);

    if (!result) {
      // eslint-disable-next-line no-throw-literal
      throw new Error('No valide Username');
    }

    return result;
  }
}
