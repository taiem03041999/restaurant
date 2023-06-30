function getTimeRemaining(endTime) {
  //  Date.parse(endTime)
  var t = endTime - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(classCover, endTime) {
  var clock = classCover;
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endTime);
    daysSpan.innerHTML = ("0" + t.days).slice(-2);
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  updateClock();
  var timeInterval = setInterval(updateClock, 1000);
}

(() => {
  const listCover = document.querySelectorAll(".time-cover");
  if (listCover && listCover.length > 0) {
    listCover.forEach((itemCover) => {
      const timeItem = parseInt(itemCover.dataset.id);
      initializeClock(itemCover, timeItem);
    });
  }
})();

// var deadline = new Date(Date.parse(new Date()) + 60 * 60 * 1000);
// var deadline = "07 01 2023 22:00:35";
// // console.log(deadline);
// // one hours: 1 + 60 * 60 * 1000
// initializeClock(".time-cover", new Date(deadline).getTime());
// initializeClock(".time-cover", deadline);
