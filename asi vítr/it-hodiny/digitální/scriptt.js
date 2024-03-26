function updateDigitalClock() {
    const digitalClock = document.getElementById('digital-clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
  }
   
  setInterval(updateDigitalClock, 1000);
