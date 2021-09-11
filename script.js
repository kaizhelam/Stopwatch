let seconds = 00;
let tens = 00;
let OutputSeconds = document.getElementById("second");
let OutputTens = document.getElementById("tens");
let buttonStart = document.getElementById("btn-start");
let buttonStop = document.getElementById("btn-stop");
let buttonReset = document.getElementById("btn-reset");
let Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});
buttonStop.addEventListener("click", () => clearInterval(Interval));
buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  seconds = tens = "00";
  OutputSeconds.innerHTML = seconds;
  OutputTens.innerHTML = tens;
});

function startTime() {
  tens++;
  if (tens <= 9) OutputTens.innerHTML = "0" + tens;
  else OutputTens.innerHTML = tens;

  if (tens > 99) {
    seconds++;
    if (seconds > 9) OutputSeconds.innerHTML = seconds;
    else OutputSeconds.innerHTML = "0" + seconds;
    tens = 0;
    OutputTens.innerHTML = "0" + tens;
  }
}
