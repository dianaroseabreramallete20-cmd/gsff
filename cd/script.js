let totalSeconds = 0;
let timer = null;

function updateDisplay() {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    document.getElementById("display").innerHTML =
        String(mins).padStart(2, '0') + ":" + String(secs).padStart(2, '0');
}

function startTimer() {
    if (timer === null) {
        let mins = parseInt(document.getElementById("minutes").value) || 0;
        let secs = parseInt(document.getElementById("seconds").value) || 0;
        totalSeconds = mins * 60 + secs;
    }

    if (timer) return; // prevent double start

    timer = setInterval(function () {
        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(timer);
            timer = null;
            document.getElementById("display").innerHTML = "TIME'S UP!";
            return;
        }

        totalSeconds--;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    updateDisplay();
}

updateDisplay();

