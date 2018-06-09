const dom = require('./dom');
const data = require('./data');
const firebaseApi = require('./firebaseApi');

const {
  setZipCodeValue,
  deleteZipCodeValue,
  fetchTodaysForecast,
  setTodaysForecast,
  setFiveDayForecast,
  fetch5DayForecast,
} = data;

const { updateTodaysWeatherInUi, updateFiveDayForecastInUi, } = dom;

const saveMyForecastEvent = () => {
  $('#saveMyForecastBtn').on('click', (e) => {
    const forecastToAddCard = $(e.target).closest('.singleWeatherBox');
    const forecastToAdd = {
      title: forecastToAddCard.find('.movie-title').text(),
      overview: forecastToAddCard.find('.movie-overview').text(),
      isAdded: false,
    };
    firebaseApi.saveMyForecast(forecastToAdd)
      .then(() => {
        forecastToAddCard.remove();
      })
      .catch((error) => {
        console.error('error in saving weather', error);
      });
  });
};

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
  saveMyForecastEvent();
};

module.exports = {
  eventInit,
};
