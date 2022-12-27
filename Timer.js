    /*
    var currentDay;
    var secondTimer;
    var ticker;

    startTimer();
    setInterval(starTimer, 1000);

    function getSeconds() {
        var currentDate = new Date();
        var dateStr = currentDate.toLocaleDateString();
        var timeStr = currentDate.toLocaleTimeString()

        //Number of days in a week
        var day = 6;

        //Date that we are counting from
        var timer = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),16,0,0);

        //current time
        var currentTime = currentDate.getTime();

        //time counting down to
        var newTime = timer.getTime();

        //get the difference
        var diffBetTwo = parseInt((newTime - currentTime)/1000);
        if (diffBetTwo > 0) {currentDay = day - currentDate.getDay()}
        else {currentDay = day - currentDate.getDay() -1}

        //Switch the countdown to start from next week
        if (currentDay < 0) {currentDay +=7; }
        if (diffBetTwo <= 0) {diffBetTwo += (86400 * 7) }
        startTimer(diffBetTwo);
    }

    // function for time

    function starTimer(secs) {
        amtSecs = parseInt(secs);
        timer = setInterval("tick()",1000);
        tick();
    }

    function tick() {
        var secs = amtSecs;
        if (secs > 0) {amtSecs --;}
        else {
            clearInterval(timer);
            getSeconds()
        }

        var days = Math.floor(secs/86400);
        secs %=86400

        var hours = Math.floor(secs/3600);
        secs %=3600;

        var mins = Math.floor(secs/60);
        secs %= 60;

        //update the timer
        document.getElementById("days").innerHTML = currentDay;
        document.getElementById("hours").innerHTML = (( hours < 10) ? "0" : " ") + hours;
        document.getElementById("minutes").innerHTML = ((mins < 10) ? "0" : " ") + mins;
        document.getElementById("seconds").innerHTML = ((secs < 10) ? "0" : " ") + secs;
    }
*/


// New option

runclock();
setInterval("runClock()", 1000);

function runClock() {

    //get the current day and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString()
    var timeStr = currentDay.toLocaleTimeString()

    //set the day and time
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr

    // Set the countdown day
    var endFriday = new Date(2022, 12, 30, 16,0,0);
    var day = 6;
    var newTime = timer.getTime();
    var diffBetDays = endFriday - currentDay

    //calculate hours
    var hrsLeft = (diffBetDays - Math.floor(diffBetDays)) * 24;
    //Calculate minutes
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    //Calculate seconds left
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60

    //if statement    if (currentDay < 0) {currentDay += 7}
    if (diffBetDays < 0) {diffBetDays += (86400 * 7) }

    // Display the hrs, mins, secs
    document.getElementById("days").textContent = Math.floor(diffBetDays);
    document.getElementById("hours").textContent = Math.floor(diffBetDays);
    document.getElementById("minutes").textContent = Math.floor(diffBetDays);
    document.getElementById("seconds").textContent = Math.floor(diffBetDays);




}


