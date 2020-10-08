const fetch = require('node-fetch');
class Request {
  async sendRequest(url, options) {
    try {
      let synupResponse = await fetch(url, options);
      let synupLocations = await synupResponse.json();
      return synupLocations;
    } catch (err) {
      throw new Error('Error while fetching locations.');
    }
  }
}
module.exports = Request;
