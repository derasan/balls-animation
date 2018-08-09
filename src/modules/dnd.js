import {Ball} from "./ball.js";
import {radius} from "./constants";

let array = [];
let dragObject = {};

let createBall = () => {
    let header = document.getElementById('header');
    let ball = document.createElement('div');
    ball.id = 'ball';
    header.appendChild(ball);

    setBallStyle(ball, header);
};

let setBallStyle = (ball,header) =>{
    header.style.height = radius + 'px';
    ball.style.width = radius + 'px';
    ball.style.height = radius + 'px';
};

let onMouseDown = (e) => {
    if (e.which != 1) return;

    let element = e.target.closest('#ball');
    if (!element) return;

    dragObject.element = element;
    dragObject.element.style.position = 'absolute';
    dragObject.element.style.cursor = "pointer";

    return false;
};

let onMouseMove = (e) => {
    if (!dragObject.element) return;

    dragObject.avatar = createAvatar(e);
    if (!dragObject.avatar) {
        dragObject = {};
        return;
    }

    dragObject.element.style.left = e.pageX - dragObject.element.offsetWidth / 2 + 'px';
    dragObject.element.style.top = e.pageY - dragObject.element.offsetHeight / 2 + 'px';

    return false;
};

let onMouseUp = (e) => {
    let dropElem = findDragContainer(e);

    if (!dropElem) {
        dragObject.avatar.rollback();
    }else {
        dragObject.element.CoordX = e.pageX;
        dragObject.element.CoordY = e.pageY;

        let ball = new Ball(dragObject.element, dragObject.element.CoordX, dragObject.element.CoordY, 5, 5);
        array.push(ball);

        createBall();
    }

    dragObject = {};
};

let findDragContainer = (event) => {
    if (!dragObject.element) return;

    dragObject.element.hidden = true;
    let elem = document.elementFromPoint(event.clientX, event.clientY);
    dragObject.element.hidden = false;

    if (elem == null) {
        return null;
    }

    return elem.closest('#mainContainer');
};

let createAvatar = () => {
    let avatar = dragObject.element;
    let old = {
        parent: avatar.parentNode,
        nextSibling: avatar.nextSibling,
        position: avatar.position || '',
        left: avatar.left || '',
        top: avatar.top || '',
        zIndex: avatar.zIndex || ''
    };

    avatar.rollback = () => {
        old.parent.insertBefore(avatar, old.nextSibling);
        avatar.style.position = old.position;
        avatar.style.left = old.left;
        avatar.style.top = old.top;
        avatar.style.zIndex = old.zIndex
    };

    return avatar;
};



export {array, onMouseDown, onMouseMove, onMouseUp, createBall};