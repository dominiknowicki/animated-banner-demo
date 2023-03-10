window.addEventListener('slide-right', (event) => {
  abSlideRight(event.detail.canvas, event.detail.params);
  console.log('Animation started: slide-right');
});
console.log('Animation registered: slide-right');
export function abSlideRight(canvas, params) {
  const animator = new ABSlideRight(canvas, params);
  animator.animate();
}
class ABSlideRight {
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
    this.loop = params.loop;
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
    if (this.textX < this.canvasWidth) {
      requestAnimationFrame(this.nextFrame.bind(this));
    }
    else if (this.loop) {
      this.textX = 0;
      this.runAnimation();
    }
  }
  nextFrame() {
    this.ctx.clearRect(0, 0, this.canvasWidth + 10 , this.canvasHeight + 10);
    this.textX += 2;
    this.drawText();
    this.runAnimation();
  }
}
