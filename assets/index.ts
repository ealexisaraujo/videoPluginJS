import MediaPlayer from './MediaPlayer';

import AutoPlay from './plugins/Autoplay';

// import AutoPause from './plugins/AutoPause.js';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.toogleplay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
// const video = document.querySelector('video')
// const button = document.querySelector('button')

// function MediaPlayer(config) {
//   this.media = config.el;
// }

// MediaPlayer.prototype.togglePlay = function () {
//   this.media.paused ? this.media.play() : this.media.pause()
// }

// const player = new MediaPlayer({ el: video })
// button.onclick = () => player.togglePlay()

// function MediaPlayer(config) {
//   this.media = config.el;
// }
// MediaPlayer.prototype.play = function() {
//   this.media.play();
// };
// MediaPlayer.prototype.pause = function() {
//   this.media.pause();
// };
// MediaPlayer.prototype.togglePlay = function() {
//   if (this.media.paused) {
//     this.play();
//   } else {
//     this.pause();
//   }
// };
// const video = document.querySelector('video');
// const player = new MediaPlayer({ el: video });
// const button = document.querySelector('button');
// button.onclick = () => player.togglePlay();
