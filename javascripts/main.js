const apiKeys = require('./apiKeys');
const events = require('./events');

apiKeys.retrieveKeys();
events.eventInit();
$('#searchInput').submit((e) => {
  // console.log('submitted');
  e.preventDefault();
  return false;
});
