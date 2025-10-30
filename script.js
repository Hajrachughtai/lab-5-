const video = document.getElementById("myVideo");

// Play / Pause toggle 
function toggle() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


//fast forward 5 seconds
function fastForward() {
    video.currentTime += 1;
}

// Rewind 5 seconds
function rewind() {
    video.currentTime -= 1;
}

//slow motion (half speed)
function slowMotion() {
    video.playbackRate = 0.5;
}

//Normal speed 
function normalSpeed() {
    video.playbackRate = 1;
}

//Example of using "timeupdate" event
video.addEventListener("timeupdate", () => {
    console.log("current time:", video.currentTime);
});