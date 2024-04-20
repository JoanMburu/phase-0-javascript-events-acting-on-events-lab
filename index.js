// Your code here
const dodger = document.getElementById ('dodger');

// Moving dodger to the left
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers,10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

// Adding an event listener 
document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

// Moving dodger to the right
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace ('px', '');
    const left = parseInt (leftNumbers,10);

    const rightEdge = window.innerWidth - dodger.offsetWidth;
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}
// Adding an event listener
document.addEventListener ('keydown', function (e){
    if (e.key === 'ArrowRight'){
    moveDodgerRight();
}
});
