const data = require('./data');

const { setApiKey, } = data;

// const lwdb = require('./lwdb');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./../db/apiKeys.json')
      .done((data) => {
        // console.log('data: ', data);
        resolve(data.apiKeys);
      })
      .fail((err) => {
        // console.log('the error: ', err);
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      setApiKey(results.lwdb.apiKey);
      // lwdb.setKey(results.lwdb.apiKey);
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
