import {array} from "./dnd.js";
import {radius} from "./constants.js";
import {Ball} from "./ball.js";

if (!window.requestAnimationFrame) {
    
    window.requestAnimationFrame = (function() {
        
        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
                
            function(callback, element ) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}

let animate = () => {
    requestAnimationFrame(animate);
    startAnimation();
};

let startAnimation = () => {
    let count = array.length;

    if (!count) return;

    for (let i = 0; i <= count - 1; i++){
        array[i].bounceOnBorder();
        array[i].step();

        for (let j = i+1; j <= count - 1; j++) {
            if (ballsContact(calculateDistance(array[i], array[j]))) {
                array[i].bounceOnBall(array[j]);
                array[i].changeColor(array[j]);
            }
        }
    }
};

let ballsContact = (distance) => distance <= radius;

let calculateDistance = (a, b) => Math.sqrt(Math.pow((a.x - b.x),2) + Math.pow((a.y - b.y),2));

export {animate};