
// A simple state managment object.
const applicationState = {
  apiKey: '',
  zipCodeValue: '',
  todaysForecast: {},
  fiveDayForecast: {},
  selectedDegree: 'F',
  error: '',
};

const setApiKey = (key) => {
  applicationState.apiKey = key;
  console.log('FUNCTION: setApiKey\n\nThis is my application state after setting the API key: ', applicationState);
};

const getApiKey = () => {
  return applicationState.apiKey;
};

const getZipCodeValue = () => {
  return applicationState.zipCodeValue;
};

const setZipCodeValue = (value) => {
  applicationState.zipCodeValue = value;
  console.log('\n\nFUNCTION: setZipCodeValue\n\nThis is my application state after setting the zip code value: ', applicationState);
};

const deleteZipCodeValue = () => {
  const inputContainer = document.getElementById('searchInput');
  inputContainer.value = '';
  applicationState.zipCodeValue = '';
  console.log('\n\nFUNCTION: deleteZipCodeValue\n\n\nthis is my application state after deleting zip code value', applicationState, '\n\n\n');
};

const setTodaysForecast = (newTodaysForecast) => {
  applicationState.todaysForecast = newTodaysForecast;
  console.log('\n\nFUNCTION: setTodaysForecast\n\nthis is my state after settings todays forecast, ', applicationState);
};

const getTodaysForecast = () => {
  return applicationState.todaysForecast;
};

const fetchTodaysForecast = () => {
  return new Promise((resolve, reject) => {

    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${getZipCodeValue()},us&appid=${getApiKey()}&units=imperial`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {

        reject(err);
      });
  });
};

/* ------------- five day forcast ------------- */

const getFiveDayForecast = () => {
  return applicationState.fiveDayForecast;
};

const setFiveDayForecast = (new5dayForecast) => {
  applicationState.fiveDayForecast = new5dayForecast;
  console.log('\n\nFUNCTION: setFiveDayForecast\n\nthis is my state after setting the 5 day forecast, ', applicationState);
};

const fetch5DayForecast = () => {
  // Our network request in a promise
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${getZipCodeValue()},us&appid=${getApiKey()}&units=imperial`)
      .done((result) => {
        resolve(result);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setApiKey,
  getApiKey,
  getZipCodeValue,
  setZipCodeValue,
  deleteZipCodeValue,
  setTodaysForecast,
  getTodaysForecast,
  fetchTodaysForecast,
  setFiveDayForecast,
  getFiveDayForecast,
  fetch5DayForecast,
};
