const SELECTOR_FULLSCREEN = '.PlayerView .fullscreenButton';
const SELECTOR_VOLUME = '.PlayerView .VolumeSlider button';
const SELECTOR_LIVE = '.PlayerView .liveIndicator';
const SELECTOR_VIDEO = '.PlayerView video';

function click(selector) {
    const elem = document.querySelector(selector)
    if (elem) {
        elem.click();
    }
}

function pauseVideo() {
    const elem = document.querySelector(SELECTOR_VIDEO)

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
