window.addEventListener('slide-in-from-left', (event) => {
  abSlideInFromLeft(event.detail.canvas, event.detail.params);
  console.log('Animation started: slide-in-from-left');
});
console.log('Animation registered: slide-in-from-left');
export function abSlideInFromLeft(canvas, params) {
  const animator = new ABSlideInFromLeft(canvas, params);
  animator.animate();
}
class ABSlideInFromLeft {
  constructor(canvas, params) {
    this.textX = 0;
    this.textY = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.text = params.text;
    this.color = params.color;
    this.fontSize = params.fontSize;
    this.textX = -this.canvas.clientWidth;
    this.textY = (this.canvas.height + this.fontSize) / 2;
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
  }
  animate() {
    this.drawText();
    this.runAnimation();
  }
  drawText() {
    this.ctx.font = `${this.fontSize}px Arial`;
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text, this.textX, this.textY);
  }
  runAnimation() {
    if (this.textX < 10) {
      requestAnimationFrame(this.nextFrame.bind(this));
    }
  }
  nextFrame() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.textX += 2;
    this.drawText();
    this.runAnimation();
  }
}
