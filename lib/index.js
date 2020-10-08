/**
 * baseUrl https://api.synup.com/api/v4
 */
const Request = require('./request');

class SynupAPI {
  constructor(apiKey, baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: `API ${apiKey}`,
    };
    this.req = new Request(apiKey, baseUrl);
  }
  async getSubCategories() {
    let url = `${this.baseUrl}/sub-categories`;
    let options = {
      method: 'GET',
      headers: this.headers,
    };
    // read sub-categories from synup
    return this.req.sendRequest(url, options);
  }

  async getLocationList(fetchLocations = 10, fetchAfter = '') {
    let url = `${this.baseUrl}/locations?first=${fetchLocations}&after=${fetchAfter}`;
    let options = {
      method: 'GET',
      headers: this.headers,
    };
    // read locations from synup
    return this.req.sendRequest(url, options);
  }

  async getLocationByIds(locations = []) {
    if (locations.length == 0) throw new Error('Error required array of location id.');
    let url = `${this.baseUrl}/locations-by-ids?ids=${locations}`;
    let options = {
      method: 'GET',
      headers: this.headers,
    };
    // read locations from synup
    return this.req.sendRequest(url, options);
  }

  async searchLocations(query = '') {
    if (query == '') throw new Error('Error required query string.');
    let url = `${this.baseUrl}/locations/search?query="${query}"`;
    console.log('url', url);
    let options = {
      method: 'GET',
      headers: this.headers,
    };
    // read locations from synup
    return this.req.sendRequest(url, options);
  }
}
function create(apiKey, baseUrl) {
  if (!apiKey || !baseUrl) {
    throw new Error('No API key or baseUrl found');
  }
  return new SynupAPI(apiKey, baseUrl);
}
module.exports = create;
