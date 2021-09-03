// Your code goes here
const nav = document.querySelector('nav');
const destinationTitle = document.querySelector('.content-destination h2');
const lowerContent = document.querySelector('.content-destination');


const carImg = document.querySelector('.intro img');
const allImg = document.querySelectorAll('img');
const subheadings = document.querySelectorAll('h2');


function background(event){
    event.target.style.backgroundColor = 'red';
    console.log(event);
    event.stopPropagation();
} 
function backgroundTwo(){
    lowerContent.style.backgroundColor = 'red';
}
function escapeKey (event){
    if(event.key==='Escape'){
    carImg.style.visibility = 'hidden';
    }
}
function kayKey (event){
    if(event.key==='k'){
        carImg.style.visibility = 'visible';
    }
}
function disappear (event){
    if(event.key==='t'){
       for(let i = 0;i<allImg.length;i++){
           allImg[i].style.visibility = 'hidden';
       }
    }
}
function scrolling (){
    for(let i = 0;i<subheadings.length;i++){
    subheadings[i].style.color = 'green';
    }
}
function resetBackground(event){
    event.target.style.backgroundColor = 'white'
    console.log(event);
}

nav.addEventListener('mouseover', background);
destinationTitle.addEventListener('click', background);
lowerContent.addEventListener('click', backgroundTwo);
document.addEventListener('keydown', escapeKey);
document.addEventListener('keydown', kayKey);
document.addEventListener('keydown', disappear);
document.addEventListener('scroll', scrolling);
document.addEventListener('dblclick', resetBackground);

//readme says stop navigation items from resetting page but my nav items do not reset page when clicked