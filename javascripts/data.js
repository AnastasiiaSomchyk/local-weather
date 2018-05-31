
// A simple state managment object.
const applicationState = {
  apiKey: '',
  zipCodeValue: '',
  todaysForecast: {},
  fiveDayForecast: [],
  selectedDegree: 'F',
  isFetchingData: false,
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

module.exports = {
  setApiKey,
  getApiKey,
  getZipCodeValue,
  setZipCodeValue,
  deleteZipCodeValue,
  setTodaysForecast,
  getTodaysForecast,
  fetchTodaysForecast,
};
