let daysEl = document.getElementById("dias")
let hoursEl = document.getElementById("horas")
let minutesEl = document.getElementById("minutos")
let secondsEl = document.getElementById("segundos")



const newYears = "20 Dec 2024" 

function countdown(){

  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24 );
  const hours = Math.floor(totalSeconds / 3600 ) % 24;
  const mins = Math.floor(totalSeconds / 60 ) % 60 ;
  const seconds  = Math.floor(totalSeconds) % 60;

  daysEl.textContent = days
  hoursEl.textContent = formatTime(hours)
  minutesEl.textContent = formatTime(mins)
  secondsEl.textContent = formatTime(seconds)


}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000)
