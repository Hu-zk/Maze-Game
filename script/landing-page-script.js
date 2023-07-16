let text = document.getElementById('text');
let bird1= document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn  = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let footer = document.getElementById('footer');


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

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0,1);
        if ((window.innerHeight + (window.scrollY + footer.offsetHeight)   >= document.body.offsetHeight)) {
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event)
{

    if (event.which == 13 || event.keyCode == 13) {
        // It's the 'Enter' key
        if(paused == true) {
            scrollerID = startScroll();
            paused = false;
            
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);

function scrollWindow()
{
window.scrollTo(0,0);
}

document.onscrollend = event => {}




