window.addEventListener('DOMContentLoaded', () => {

  const deadline = '2021-01-21';

  function getDate(enddate) {
    const t = Date.parse(enddate) - Date.parse(new Date),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor( (t / (1000 * 60 * 60))  % 24),
          minutes = Math.floor( (t / (1000 * 60)) % 60),
          seconds = Math.floor( (t / 1000) % 60 );

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function checkNum(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function giveTimer(element, enddate) {
    const timer = document.querySelector(element),
          days = timer.querySelector('.days'),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'),
          interval = setInterval(updateClock, 1000);

    updateClock();

      function updateClock() {
        const t = getDate(enddate);

        days.innerHTML = checkNum(t.days);
        hours.innerHTML = checkNum(t.hours);
        minutes.innerHTML = checkNum(t.minutes);
        seconds.innerHTML = checkNum(t.seconds);
        
        if(t.total <= 0) {
          clearInterval(interval);
        }
      }    
  }

  giveTimer('.countdown', deadline);

});