var button = document.getElementById('speaker2');
var video = document.getElementById('video-background')
    button.onclick = function (){

    if (video.muted === false) {
           video.muted = true;
           button.className = "speaker mute"

    }

    else {
        video.muted = false;
        button.className = "speaker"
    }

    };
