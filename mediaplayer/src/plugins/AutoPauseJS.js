// class AutoPause {
//   constructor() {
//     this.threshold = 0.25;
//     this.handleIntersection = this.handleIntersection.bind(this);
//     this.pausedByScroll = false;
//     this.pausedByVisibility = false;
//     this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
//   }

//   run(player) {
//     this.player = player;

//     const observer = new IntersectionObserver(this.handleIntersection, {
//       threshold: this.threshold
//     });

//     observer.observe(this.player.media);
//     document.addEventListener('visibilitychange', this.handleVisibilityChange);
//   }

//   handleIntersection(entries) {
//     const entry = entries[0];

//     const isVisible = entry.intersectionRatio >= this.threshold;

//     if (isVisible) {
//       if (this.pausedByScroll) {
//         this.pausedByScroll = false;
//         this.player.play();
//       }
//     } else {
//       if (!this.player.media.paused) {
//         this.pausedByScroll = true;
//         this.player.pause();
//       }
//     }
//   }

//   handleVisibilityChange() {
//     const isVisible = document.visibilityState === 'visible';
//     if (isVisible) {
//       if (this.pausedByVisibility) {
//         this.pausedByVisibility = false;
//         this.player.play();
//       }
//     } else {
//       if (!this.player.media.paused) {
//         this.pausedByVisibility = true;
//         this.player.pause();
//       }
//     }
//   }
// }

// export default AutoPause;
