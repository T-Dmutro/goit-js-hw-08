import Player from '@vimeo/player';
import  throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);




const LOCALPLAYER_KEY = 'videoplayer-current-time';



function onPlay(data) {
    const timePlayer = data.seconds;
    localStorage.setItem(LOCALPLAYER_KEY, timePlayer);
}

player.on('timeupdate', throttle(onPlay, 1000));
console.log(onPlay);

const saveTime = localStorage.getItem(LOCALPLAYER_KEY);
  if(saveTime){
    player.setCurrentTime(saveTime);
  }

// player.on('play', throttle(saveTime, 1000));