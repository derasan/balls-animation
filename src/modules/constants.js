const container = document.getElementById('mainContainer');
const radius = 50;
const windowSize = {
    'rightBorder'  : container.clientWidth - radius,
    'bottomBorder' : container.clientHeight,
    'leftBorder'   : 0,
    'topBorder'    : radius
};
export {radius, windowSize};