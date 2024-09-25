let stars = document.getElementById(stars);
let meteorid = document.getElementById(meteorid);
let rocket = document.getElementById(rocket);
let text = document.getElementById(text);
let button = document.getElementById(button);

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left =  value * 0.15 + 'px';
    rocket.style.top =  value * 0.15 + 'px';
    text.style.marginBottom = value * 1 + 'px';
});
