function changeState() {
    if (document.getElementById('toggle') === true) {
        document.getElementById("fulltoggle").style.opacity = 1;
    } else {
        document.getElementById("fulltoggle").style.opacity = .6;
    }
}