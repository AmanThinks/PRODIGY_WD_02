let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
  display.textContent =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}:` +
    `${String(milliseconds).padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = seconds = milliseconds = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function addLap() {
  if (isRunning) {
    const lapItem = document.createElement("li");
    lapItem.textContent = display.textContent;
    laps.appendChild(lapItem);
  }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", addLap);
