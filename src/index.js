import {style} from "./scss/main.scss";
import {onMouseDown, onMouseMove, onMouseUp, createBall} from "./modules/dnd.js";
import {animate} from "./modules/animation.js";

document.addEventListener('DOMContentLoaded', function () {
    createBall();
    
    document.onmousedown = onMouseDown;
    document.onmousemove = onMouseMove;
    document.onmouseup   = onMouseUp;
    
    animate();
});