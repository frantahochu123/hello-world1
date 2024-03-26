let startTime;
let running = false;
let interval;
 
function startStop() {
  if (running) {
    clearInterval(interval);
    document.getElementById('start-stop').textContent = 'Start';
  } else {
    startTime = Date.now() - (parseInt(document.getElementById('display').textContent.replace(/:/g, '')) * 10);
    interval = setInterval(updateDisplay, 10);
    document.getElementById('start-stop').textContent = 'Stop';
  }
  running = !running;
}
 
function reset() {
  clearInterval(interval);
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('start-stop').textContent = 'Start';
  running = false;
}
 
function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const milliseconds = elapsedTime % 1000;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
 
  document.getElementById('display').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
 
  const targetHours = parseInt(document.getElementById('hours').value);
  const targetMinutes = parseInt(document.getElementById('minutes').value);
  const targetSeconds = parseInt(document.getElementById('seconds').value);
 
  if (hours >= targetHours && minutes >= targetMinutes && seconds >= targetSeconds) {
    clearInterval(interval);
    document.getElementById('start-stop').textContent = 'Čas vypršel';
    running = false;
    alert("čas vypršel")
  }
}
 
document.getElementById('start-stop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);