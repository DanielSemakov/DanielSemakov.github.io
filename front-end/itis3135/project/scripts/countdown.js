function formatEventDate(date) {
    return date.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}



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


function subtractDays(date, days) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
}


function formatEventDate(date) {
    return date.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}

function generateEvents() {

    let nextTuesday = getNextWeeklyOccurrence(2, 19, 0);
    let nextThursday = getNextWeeklyOccurrence(4, 19, 0);

    let events = [
        { name: "Tuesday Competitive", date: nextTuesday },
        { name: "Tuesday Competitive", date: subtractDays(nextTuesday, 7) },
        { name: "Tuesday Competitive", date: subtractDays(nextTuesday, 14) },

        { name: "Thursday Casual", date: nextThursday },
        { name: "Thursday Casual", date: subtractDays(nextThursday, 7) },
        { name: "Thursday Casual", date: subtractDays(nextThursday, 14) }
    ];

    return events;
}


function renderEvents() {

    let events = generateEvents();

    // Sort newest to oldest
    events.sort((a, b) => b.date - a.date);

    let now = new Date();

    let upcoming = events.filter(e => e.date > now);
    let past = events.filter(e => e.date <= now);

    let upcomingContainer = document.getElementById("upcoming-events");
    let pastContainer = document.getElementById("past-events");

    // upcomingContainer.innerHTML = "";
    // pastContainer.innerHTML = "";

    // upcoming.forEach(event => {
    //     upcomingContainer.innerHTML += `
    //         <div class="rectangle">
    //             <h4>${event.name}</h4>
    //             <span>${formatEventDate(event.date)}</span>
    //         </div>
    //     `;
    // });

    // past.forEach(event => {
    //     pastContainer.innerHTML += `
    //         <div class="rectangle">
    //             <h4>${event.name}</h4>
    //             <span>${formatEventDate(event.date)}</span>
    //         </div>
    //     `;
    // });
}


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