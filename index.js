var seconds = 0;
var minutes = 0;
var hours = 0;

function run() {
    async function getScreenLock() {
        if(isScreenLockSupported()){
          let screenLock;
          try {
             screenLock = await navigator.wakeLock.request('screen');
          } catch(err) {
             console.log(err.name, err.message);
          }
          return screenLock;
        }
    }
    document.body.style.cursor = "none";
    setInterval(function () {
        if (seconds == 0) {
            seconds = 59;
            if (minutes > 0) {minutes--};
        }
        if (minutes == 0) {
            minutes = 59;
            if (hours > 0) {hours--};
        }
        let tempSeconds = seconds;
        let tempMinutes = minutes;
        let tempHours = hours;
        if (seconds < 10) {tempSeconds = "0"+seconds;}
        if (minutes < 10) {tempMinutes = "0"+minutes;}
        if (hours   < 10) {tempHours   = "0"+hours;}
        document.getElementById('output').innerHTML = tempHours+':'+tempMinutes+':'+tempSeconds;
    }, 1000);
}

window.onload = function() {
    setInterval(function () {
        const d = new Date();
        seconds = 60 - d.getSeconds();
        minutes = 60 - d.getMinutes() - 1;
        run();
    }, 1);
};