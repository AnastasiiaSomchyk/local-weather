/* eslint camelcase: 0*/
const data = require('./data');
const { getTodaysForecast, } = data;

const updateTodaysWeatherInUi = () => {
  const todaysForecast = getTodaysForecast();
  const { name, main, weather, wind, } = todaysForecast;
  const container = document.getElementById('weather');

  container.innerHTML = `
  <div class="col-sm-6 col-md-4">
  <div class="thumbnail">
  <div class="caption">
      <h1>${name}</h1>
      <h5>Temperature: ${main.temp}</h5>
      <h5>Description: ${weather[0].description}</h5>
      <h5><strong>Air Pressure: </strong>${main.pressure}</h5>
      <h5><strong>Wind Speed: </strong>${wind.speed}</h5>
    </div>
    </div>
    </div>
  `;

};

module.exports = {
  updateTodaysWeatherInUi,
  // currentWeatherDom,
};
