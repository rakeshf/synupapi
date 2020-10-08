# Synup API library

npm install synupapi --save

```javascript
const synupapi = require('synupapi')('apikey', 'https://api.synup.com/api/v4');
const locations = await synupapi.getLocationList();
console.log('locations', locations);
```
