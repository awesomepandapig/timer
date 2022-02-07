var noSleep = new NoSleep();

var seconds = 0;
var minutes = 0;
var hours = 0;

function run() {
    document.body.style.cursor = "none";
    setInterval(function () {
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
    enableNoSleep();
    getTime = setInterval(function () {
        const d = new Date();
        seconds = 60 - d.getSeconds();
        minutes = 60 - d.getMinutes() - 1;
        if (seconds == 60) {
            seconds = 0;
        }
        if (minutes == 60) {
            minutes = 0;
        }
        run();
    }, 1);
};

function enableNoSleep() {
  noSleep.enable();
}