function updateCountdown(countdownElement, eventTime) {
    var currentTime = new Date().getTime();
    var timeLeft = eventTime - currentTime;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "Event Started!";
    } else {
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
}

function startCountdown(eventDate, countdownElementId) {
    var countdownElement = document.getElementById(countdownElementId);
    var eventTime = new Date(eventDate).getTime();

    setInterval(function() {
        updateCountdown(countdownElement, eventTime);
    }, 1000);
}

window.onload = function() {
    startCountdown('December 19, 2024 19:00:00', 'countdown1');
    startCountdown('December 17, 2024 19:00:00', 'countdown2');
};


