let text = document.getElementById('text');
let bird1= document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn  = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');

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
let speed = 2; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed *5;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0,1);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
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







function jAlert(text, customokay){
	document.getElementById('msg-content').innerHTML = text;
    document.getElementById('press-ok').innerHTML = customokay;
    document.body.style.backgroundColor = "black";
    document.body.style.height= "20%";
    document.body.style.cursor="wait";
}

jAlert("Stop! hellooooooooo!", "<b>Okay!</b>");