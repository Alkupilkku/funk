const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")

let interval;
let timeLeft = 1500;

function timer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} `;
  timerEl.innerHTML = formattedTime;
}

function start() {
if(interval){
  return
}

  interval = setInterval(() => {
    timeLeft--
    timer();
    if (timeLeft === 0) {
      alert("Time's up!");
      clearInterval(interval);
      timeLeft = 1500;
      timer();
    }
  }, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
  clearInterval(interval);
    interval = null;
  timeLeft = 1500;
  timer();
}
