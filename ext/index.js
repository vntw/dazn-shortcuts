const SELECTOR_FULLSCREEN = 'button[class^="fullscreen___fullscreen___"]';
const SELECTOR_VOLUME = 'button[class^="volumeControl___volume-mute-unmute___"]';
const SELECTOR_LIVE = '[class^="liveIndicator___live-indicator___"], [class^="liveIndicator___return-to-live___"]';
const SELECTOR_VIDEO = '[data-test-id="PLAYER_CONTAINER"] video';
const SELECTOR_SKIP_FORWARD = '[data-test-id="PLAYER_BUTTON_FAST_FORWARD"], [data-test-id="PLAYER_BUTTON_FAST_FORWARD PLAYER_BUTTON_FAST_FORWARD_VISIBLE"]';
const SELECTOR_SKIP_BACKWARD = '[data-test-id="PLAYER_BUTTON_REWIND"], [data-test-id="PLAYER_BUTTON_REWIND PLAYER_BUTTON_REWIND_VISIBLE"]';

function click(selector) {
    const elem = document.querySelector(selector);

    if (elem) {
        elem.click();
    }
}

function pauseVideo() {
    const elem = document.querySelector(SELECTOR_VIDEO);

    if (!elem) {
        return;
    }

    if (elem.paused) {
        elem.play();
    } else {
        elem.pause();
    }
}

function skip(direction) {
    const elem = document.querySelector(
        direction === -1 ? SELECTOR_SKIP_BACKWARD : SELECTOR_SKIP_FORWARD
    );

    if (elem) {
        elem.click();
    }
}

window.onkeyup = function (e) {
    const key = e.which || e.keyCode;

    switch (key) {
        // m
        case 77:
            click(SELECTOR_VOLUME);
            break;

        // f
        case 70:
            click(SELECTOR_FULLSCREEN);
            break;

        // l
        case 76:
            click(SELECTOR_LIVE);
            break;

        // k
        case 75:
            pauseVideo();
            break;

        // arrow left
        case 37:
            skip(-1);
            break;

        // arrow right
        case 39:
            skip(1);
            break;
    }
};
