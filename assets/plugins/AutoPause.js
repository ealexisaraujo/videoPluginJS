class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.pausedByScroll = false;
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });

    observer.observe(this.player.media);
  }

  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      if (this.pausedByScroll) {
        this.pausedByScroll = false;
        this.player.pause();
      }
    } else {
      if (!this.player.media.paused) {
        this.pausedByScroll = true;
        this.player.play();
      }
    }
    console.log(entry);
  }
}

export default AutoPause;
