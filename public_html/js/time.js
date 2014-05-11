var timeC = 0;

function timeSet() {
    switch (timeC) {
        case 40:
            timeC = 0;
            $('#content').append(' ' + timeC);
            break;
        default:
            timeC++;
            $('#content').append(' ' + timeC);
            break;
    }
}

function timeRun() {
    setInterval(timeSet, 10);
}