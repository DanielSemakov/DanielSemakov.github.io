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

//Calls countdown function every second (1000 ms)
var intervalId = window.setInterval(function(){
    const countdown1 = document.getElementById("countdown1");
    const countdown2 = document.getElementById("countdown2");

    updateCountdown(countdown1, "09 Jan 2025 19:00:00 EST");
    updateCountdown(countdown2, "07 Jan 2025 19:00:00 EST");

  }, 1000);