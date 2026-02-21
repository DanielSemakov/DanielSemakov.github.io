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

function generateEvents() {

    let nextTuesday = getNextWeeklyOccurrence(2, 19, 0);
    let nextThursday = getNextWeeklyOccurrence(4, 19, 0);

    return [
        { name: "Tuesday Competitive", date: nextTuesday },
        { name: "Tuesday Competitive", date: subtractDays(nextTuesday, 7) },
        { name: "Tuesday Competitive", date: subtractDays(nextTuesday, 14) },

        { name: "Thursday Casual", date: nextThursday },
        { name: "Thursday Casual", date: subtractDays(nextThursday, 7) },
        { name: "Thursday Casual", date: subtractDays(nextThursday, 14) }
    ];
}

let events;

function renderEvents() {

    events = generateEvents();

    // Sort from farthest in the future to farthest in the past
    events.sort((a, b) => b.date - a.date);

    for (let i = 0; i < events.length; i++) {
        document.getElementById(`event-name-${i + 1}`)
            .innerText = events[i].name;
        document.getElementById(`event-date-${i + 1}`)
            .innerText = formatEventDate(events[i].date) + " - 9PM";
    }
}

renderEvents();


//Calls countdown function every second (1000 ms)
setInterval(() => {
    updateCountdown(
        document.getElementById("countdown1"),
        events[0].date
    );

    updateCountdown(
        document.getElementById("countdown2"),
        events[1].date
    );

    if (Date.now() >= events[1].date.getTime()) {
        location.reload();
    }

}, 1000);