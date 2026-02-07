const updateCountdown = (countdownContainer, futureTime) => {
    futureTime = Date.parse(futureTime);

    const timeDiff = futureTime - Date.now();

    if (timeDiff < 0) {
        countdownContainer.innerHTML = "Event started!";
        return;
    }

    let numSeconds = Math.floor(timeDiff / 1000);

    let numMinutes = Math.floor(numSeconds / 60);
    numSeconds -= numMinutes * 60;

    let numHours = Math.floor(numMinutes / 60);
    numMinutes -= numHours * 60;

    let numDays = Math.floor(numHours / 24);
    numHours -= numDays * 24;

    countdownContainer.innerHTML = `${numDays} Days, ${numHours} Hrs, ${numMinutes} Mins, ${numSeconds} Secs`;
};

function getNextWeeklyOccurrence(weekday, hour, minute) {
    const now = new Date();
    const next = new Date(now);

    next.setHours(hour, minute, 0, 0);

    const dayDiff =
        (weekday - now.getDay() + 7) % 7 ||
        (now > next ? 7 : 0);

    next.setDate(now.getDate() + dayDiff);

    return next;
}

//Date object for next instance of Thursday 7 PM
let meeting1Time = getNextWeeklyOccurrence(4, 19, 0); 
//Date object for next instance of Tuesday 7PM
let meeting2Time = getNextWeeklyOccurrence(2, 19, 0); // Tuesday 7:00 PM


//Calls countdown function every second (1000 ms)
setInterval(() => {
    updateCountdown(
        document.getElementById("countdown1"),
        meeting1Time
    );

    updateCountdown(
        document.getElementById("countdown2"),
        meeting2Time
    );
}, 1000);