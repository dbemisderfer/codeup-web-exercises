(function() {
    "use strict";

    var jackBox = {
        triggered: false,
        intervalId: null,
        play: play,
        windUp: windUp,
        lyrics: [
            "All a-...",
            "-round the ...",
            "mulberry...",
            "bush, The...",
            "monkey...",
            "chased the...",
            "wea-...",
            "-sel...",
            "The monkey...",
            "stopped to...",
            "pull up his...",
            "sock,...",
            "Pop!...",
            "goes the...",
            "wea-...",
            "-sel."
        ]
    };

    // ****************** PLAY BUTTON *****************
    var playButton = document.getElementById('play-btn');
    var playJackBox = function(event) {
        jackBox.play();
    }

    playButton.addEventListener('click', playJackBox, false);


    function play() {

        var count = 0;
        jackBox.intervalId = setInterval(function() {
            if (count >= jackBox.lyrics.length) {
                clearInterval(jackBox.intervalId);
                jackBox.triggered = true;
                alert('POP!');
            } else {
                console.log(jackBox.lyrics[count++]);
            }
        }, 1000);

    }
    // ****************** PLAY BUTTON *****************






    // ****************** WIND-UP BUTTON *****************
    var windUpButton = document.getElementById('wind-up-btn');
    var windUpJackBox = function(event) {
        jackBox.windUp();
    }

    windUpButton.addEventListener('click', windUpJackBox, false);

    function windUp() {
        clearInterval(jackBox.intervalId);
        jackBox.triggered = false;
    }

    jackBox.windUp()

    // ****************** WIND-UP BUTTON *****************



    // BONUS 1: Build a Jack-In-The-Box
    //
    // Define an object called jackBox.
    //
    //     Include properties for...
    // triggered - whether or not the box has been sprung (should be false by default)
    // intervalId - set to null
    // play() - once called, if triggered is false, console.log one new element in the lyrics array every second
    // after the lyrics, stop the interval, set the triggered property to true, and alert POP!
    //     windUp() - once called will stop the play() method and set triggered to false
    // lyrics - an array with the following elements:
    //
    //     "All a-...",
    //         "-round the ...",
    //         "mulberry...",
    //         "bush, The...",
    //         "monkey...",
    //         "chased the...",
    //         "wea-...",
    //         "-sel...",
    //         "The monkey...",
    //         "stopped to...",
    //         "pull up his...",
    //         "sock,...",
    //         "Pop!...",
    //         "goes the...",
    //         "wea-...",
    //         "-sel."
    //
    // Include methods for...



})();