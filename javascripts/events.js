// const lwdb = require('./lwdb');

const dom = require('./dom');
const data = require('./data');
const {
  setZipCodeValue,
  deleteZipCodeValue,
  fetchTodaysForecast,
  setTodaysForecast,
} = data;

const { updateTodaysWeatherInUi, } = dom;

const searchClickEvent = () => {
  $(document).on('keypress click', (e) => {
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
            deleteZipCodeValue();
            updateTodaysWeatherInUi();
          });

      }
    }
  });
};

module.exports = searchClickEvent;
