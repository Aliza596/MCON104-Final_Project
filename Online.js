
var curDay;
var timeSec
var Move

function seconds() {
    var newDate = new Date();
    var day=6;
    var counterTime = new
        Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 9,0,0);
    var currentTime = newDate.getTime();
    var atime = counterTime.getTime();
    var diff = parseInt((atime-currentTime)/1000);
    if(diff>0) {curDay = day - newDate.getDay() }
    else {curDay = day - newDate.getDay()-1}
    if (curDay < 0) {curDay+=7;}
    if (diff<=0) {diff+=(86400*7)}
    startTimer (diff)
}

function startTimer(secs) {
    timeSec = parseInt(secs);
    tick();
}

function tick() {
    var secs = timeSec;
    if (secs>0) {
        timeSec--;
    }
    else {
        clearInterval(move);
        getSecons();
    }
    var days = Math.floor(secs/86400);
    secs %=86400;
    var hours = Math.floor(secs/3600);
    secs %=3600;
    var mins = Math.floor(secs/60);
    secs %=60;

    document.getElementById("days").innerHTML = curDay;
    document.getElementById("hours").innerHTML = ((hours < 10) ? "0" : "") + hours;
    document.getElementById("minutes").innerHTML = ((mins < 10>) ? "0" : "") + mins;
    document.getElementById("seconds").innerHTML = ((secs < 10) ? "0" : "") + secs;
}