const data = require('./data');

const firebaseApi = require('./firebaseApi');

const { setApiKey, } = data;

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
      firebaseApi.setConfig(results.firebase);
      console.log('firebase: ', firebase);
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
