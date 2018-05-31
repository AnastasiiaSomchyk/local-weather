const apiKeys = require('./apiKeys');
const events = require('./events');

apiKeys.retrieveKeys();
events();
$('#searchInput').submit((e) => {
  // console.log('submitted');
  e.preventDefault();
  return false;
});
