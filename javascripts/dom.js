/* eslint camelcase: 0*/
const data = require('./data');
const dateFns = require('date-fns');
const { format, eachDay, addDays, } = dateFns;

const { getTodaysForecast, getFiveDayForecast, } = data;

const updateTodaysWeatherInUi = () => {
  const todaysForecast = getTodaysForecast();
  const { name, main, weather, wind, } = todaysForecast;
  const $container = $('#weather');
  const currentTime = Date.now();
  const tomorrow = addDays(currentTime, 1);
  const fiveDays = eachDay(tomorrow, addDays(tomorrow, 5));
  console.log('5 days: ', fiveDays);
  $container.html(`
  <div class="col-lg-6">
  <div class="thumbnail">
  <div class="caption">
      <h1>${name}<img src="https://openweathermap.org/img/w/${weather[0].icon}.png"></h1>
      <span>${format(currentTime, 'MMMM Do, YYYY')}</span>
      <span>${format(currentTime, 'h:m a')}</span>
      <h5>Temperature: ${main.temp}</h5>
      <h5>Description: ${weather[0].description}</h5>
      <h5><strong>Air Pressure: </strong>${main.pressure}</h5>
      <h5><strong>Wind Speed: </strong>${wind.speed}</h5>
    </div>
    </div>
    </div>
  `);
};

const updateFiveDayForecastInUi = () => {
  const fiveDayForecast = getFiveDayForecast();
  const { list, city, } = fiveDayForecast;
  const fiveDaysReduced = list.reduce((updatedDays, day, index) => {
    console.log('day: ', day, ' updatedDays: ', updatedDays);
    if (index <= 4) {
      updatedDays.push(day);
      return updatedDays;
    }
    return updatedDays;
  }, []);
  console.log('5 days reduced: ', fiveDaysReduced);

  const section = $('#five-day-forecast-container');

  fiveDaysReduced.forEach((day) => {
    section.append(`
    <div class="col-lg-6">
    <div class="thumbnail">
    <div class="caption">
        <h1>${city.name}<img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png"></h1>
        <h5>Temperature: ${day.main.temp}</h5>
        <h5>Description: ${day.weather[0].description}</h5>
        <h5><strong>Air Pressure: </strong>${day.main.pressure}</h5>
        <h5><strong>Wind Speed: </strong>${day.wind.speed}</h5>
      </div>
      </div>
      </div>
    `);
  });

};

module.exports = {
  updateTodaysWeatherInUi,
  updateFiveDayForecastInUi,
};
