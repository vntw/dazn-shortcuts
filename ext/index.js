const SELECTOR_FULLSCREEN = 'button[class^="fullscreen___fullscreen___"]';
const SELECTOR_VOLUME = 'button[class^="volumeControl___"]';
const SELECTOR_LIVE = 'button[class^="liveIndicator___"]';
const SELECTOR_VIDEO = '[class^="player___player___"] video';

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
    }
};
