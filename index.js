function updateClock(){
    const d = new Date();
    const h = String(d.getHours()).padStart(2,'0');
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const timeString = `${h}:${m}:${s}`;
    document.getElementById('time').textContent = timeString;
  }
  
  setInterval(updateClock,1000);
  updateClock();