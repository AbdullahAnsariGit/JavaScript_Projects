const daysA = document.getElementById("days");
const hoursA = document.getElementById("hours");
const minsA = document.getElementById("mins");
const secondsA = document.getElementById("sec");

const newYears = "1 Jan 2021";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    daysA.innerHTML = days;
    hoursA.innerHTML = formatTime(hours);
    minsA.innerHTML = formatTime(mins);
    secondsA.innerHTML = formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);