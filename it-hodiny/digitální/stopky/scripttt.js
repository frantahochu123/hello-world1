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
  const centiseconds = Math.floor(elapsedTime / 10) % 100;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
 
  document.getElementById('display').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
 
document.getElementById('start-stop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
