const dom = require('./dom');
const data = require('./data');
const {
  setZipCodeValue,
  deleteZipCodeValue,
  fetchTodaysForecast,
  setTodaysForecast,
  setFiveDayForecast,
  fetch5DayForecast,
} = data;

const { updateTodaysWeatherInUi, updateFiveDayForecastInUi, } = dom;

const clickFiveDayBtn = () => {
  $('#fiveDayBtn').click((e) => {
    return fetch5DayForecast()
      .then((response) => {
        $('#fiveDayBtn').addClass('hide');
        console.log('response: ', response);
        setFiveDayForecast(response);
        console.log(response);
        updateFiveDayForecastInUi();
        console.log(updateFiveDayForecastInUi);
      });
  });
};

const searchClickEvent = () => {
  $('#search-form').on('keypress click', (e) => {
    const zipCodeInput = $('#searchInput').val();
    setZipCodeValue(zipCodeInput);
    if (e.key === 'Enter' || e.target.id === 'submitBtn') {
      if (zipCodeInput.length !== 5) {
        alert(`Invalid zip code!`);
        deleteZipCodeValue();

      } else {

        fetchTodaysForecast()
          .then((response) => {
            setTodaysForecast(response);
            updateTodaysWeatherInUi();
            $('#fiveDayBtn').removeClass('hide');
          });
      }
    }
  });
};

const eventInit = () => {
  searchClickEvent();
  clickFiveDayBtn();
};

module.exports = {
  eventInit,
};
