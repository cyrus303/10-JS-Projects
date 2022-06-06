const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 January 2023';

function countdown() {
  const newYearDate = new Date(newYears);

  const currentDate = new Date();

  var totalSeconds = Math.floor((newYearDate - currentDate) / 1000);
  var days = Math.floor(totalSeconds / (3600 * 24));
  var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var seconds = Math.floor(totalSeconds % 60);

  console.log(
    `days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial call
countdown();

setInterval(countdown, 1000);
