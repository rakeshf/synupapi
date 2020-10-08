/**
 * baseUrl https://api.synup.com/api/v4
 */
const fetch = require('node-fetch');
class SynupAPI {
  constructor(apiKey, baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: `API ${apiKey}`,
    };
  }
  async getSubCategories() {
    let url = `${this.baseUrl}/sub-categories`;
    let options = {
      method: 'GET',
      headers: this.headers,
    };
    // read sub-categories from synup
    let synupResponse = await fetch(url, options);
    let synupSubCategories = await synupResponse.json();
    return synupSubCategories;
  }

  async getLocationList(fetchLocations = 10, fetchAfter = '') {
    let url = `${this.baseUrl}/locations?first=${fetchLocations}&after=${fetchAfter}`;
    let options = {
      method: 'GET',
      headers: this.headers,
    };
    // read locations from synup
    let synupResponse = await fetch(url, options);
    let synupLocations = await synupResponse.json();
    return synupLocations;
  }
}
function create(apiKey, baseUrl) {
  if (!apiKey || !baseUrl) {
    throw new Error('No API key or baseUrl found');
  }
  return new SynupAPI(apiKey, baseUrl);
}
module.exports = create;
