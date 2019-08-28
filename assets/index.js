import MediaPlayer from './MediaPlayer.js';

import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playbutton = document.querySelector('#playButton')
playButton.onclick = () => player.play()

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => player.mute()
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