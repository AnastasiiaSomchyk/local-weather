/* eslint camelcase: 0 */

let lwKey = '';

const setKey = (key) => {
  // console.log('key: ', key);
  lwKey = key;
};

const searchZipCode = (zip) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${lwKey}&units=imperial`)
      .done((result) => {
        console.log('the result of search zip code: ', result);
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showResults = (searchText) => {
  console.log('search text: ', searchText);
  searchZipCode(searchText)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error('search error', err);
    });
};

module.exports = {
  showResults,
  setKey,
};
