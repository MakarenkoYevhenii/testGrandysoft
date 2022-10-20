import { Component } from "react";

class CanvasComponent extends Component {
  painting = true;
  stroke = false;
  figures = [];
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    this.ctx = this.refs.canvas.getContext("2d");
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(501, 0);
    this.ctx.lineTo(501, 501);
    this.ctx.lineTo(0, 501);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  update(el) {
    console.log(this)
    this.ctx.beginPath();
    this.ctx.moveTo(el.dotX, el.dotY);
    this.ctx.lineTo(el.secondDotX, el.secondDotY);
    this.ctx.closePath();
    this.ctx.stroke();
  };
  renderSaveLines() {
    this.figures.map((el) => this.update(el));
  }
  paintLine(e) {
    if (this.painting) {
      return;
    }
    this.secondDotX = e.pageX - 510;
    this.secondDotY = e.pageY;
    this.ctx.clearRect(1, 1, 499, 499);
    this.renderSaveLines();
    // this.update()
    if (!this.painting) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.dotX, this.dotY);
      this.ctx.lineTo(this.secondDotX, this.secondDotY);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }

  onClick(e) {
    if (this.painting) {
      this.dotX = e.pageX - 510;
      this.dotY = e.pageY;
    }
    this.stroke = !this.stroke;
    this.painting = !this.painting;
    if (!this.stroke) {
      this.figures.push({
        dotX: this.dotX,
        dotY: this.dotY,
        secondDotY: this.secondDotY,
        secondDotX: this.secondDotX,
      });
    }
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={501}
        height={501}
        onClick={(e) => this.onClick(e)}
        onMouseMove={(e) => this.paintLine(e)}
      />
    );
  }
}

export default CanvasComponent;
