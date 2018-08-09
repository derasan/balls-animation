import {windowSize} from "./constants.js";

class Ball {
    constructor (element, x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.element = element;
    }

    step() {
        this.x += this.dx;
        this.y += this.dy;
        this.element.style.left = this.x + 'px';
        this.element.style.top  = this.y + 'px';
    }

    bounceOnBorder() {
        if ((this.x >= windowSize.rightBorder) || (this.x <= windowSize.leftBorder)) {
            this.dx = -this.dx;
        }
        if ((this.y >= windowSize.bottomBorder) || (this.y <= windowSize.topBorder)) {
            this.dy = -this.dy;
        }
    }
    
    bounceOnBall(nextBall) {
        var a = this.dx;
        this.dx = nextBall.dx;
        nextBall.dx = a;
        var b = this.dy;
        this.dy = nextBall.dy;
        nextBall.dy = b;
    }
    
    changeColor(nextBall) {
        this.element.style.backgroundColor = 'yellow';
        nextBall.element.style.backgroundColor = 'red';
    }
}

export {Ball};