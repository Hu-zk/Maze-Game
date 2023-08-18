let text = document.getElementById('text');
let bird1= document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn  = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let footer = document.getElementById('footer');
let sec = document.getElementById('sec');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.top = 50 + value *-0.1 + '%'; 
    bird1.style.top = value * -1 + 'px'; 
    bird1.style.left = value * 1 + 'px';
    bird2.style.top = value *-1 + 'px'; 
    bird2.style.left = value* -1 + 'px'; 
    btn.style.marginTop = value + 'px'; 
    rocks.style.top = value * -0.12 + 'px'; 
    forest.style.top = value * 0.25 + 'px'; 
});

let scrollerID;
let paused = true;
let speed = 2; 
let interval = speed *5;

function scrollToCanvas() {
    sec.scrollIntoView({ behavior: 'smooth' });
    
}

function toggleScroll() {
    if (paused) {
        scrollerID = requestAnimationFrame(scrollDown);
        paused = false;
    } else {
        stopScroll();
        paused = true;
    }
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCanvas(); 
    toggleScroll(); 
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        scrollToCanvas();
        toggleScroll(); 
    }
});
