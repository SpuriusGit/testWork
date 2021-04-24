const circle = document.querySelectorAll('circle');

for(let element of circle){
    let radius = element.r.baseVal.value;
    let circumference = 2 * Math.PI * radius;
    element.style.strokeDasharray = `${circumference} ${circumference}`;
    element.style.strokeDashoffset = circumference;

    function setProgress(el,percent){
        let offset = circumference - percent / 100 * circumference;
        el.style.strokeDashoffset = offset;
    }
}

setProgress(circle[0],100);
setProgress(circle[1],20);
setProgress(circle[2],100);
setProgress(circle[3],40);
setProgress(circle[4],100);
setProgress(circle[5],50);
setProgress(circle[6],100);
setProgress(circle[7],65);
setProgress(circle[8],100);
setProgress(circle[9],85);
setProgress(circle[10],100);
setProgress(circle[11],100);

// burger menu

const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger_list');

let check = false;
burgerMenu.addEventListener('click',(event)=>{
    if(event.target != event){
        burgerMenu.style.display = 'none'
    }
})
burgerButton.addEventListener('click',()=>{
    if(check == false){
        burgerMenu.style.display = 'flex';
        check = true;
    } else{
        burgerMenu.style.display = 'none';
        check = false;
    }
});

// scrolls

let about_us = document.querySelector('.about_us');
let reviews = document.querySelector('.reviews');
let portfolio = document.querySelector('.portfolio');
let footer = document.querySelector('.footer');
let logos = document.querySelectorAll('.logo');

let scroll1 = document.querySelector('.scroll1');
let scroll2 = document.querySelector('.scroll2');
let scroll3 = document.querySelector('.scroll3');
let scroll4 = document.querySelector('.scroll4');

for(let logo of logos){
    logo.addEventListener('click',function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
scroll1.addEventListener('click',function(){
    about_us.scrollIntoView({behavior: "smooth"});
});
scroll2.addEventListener('click',function(){
    reviews.scrollIntoView({behavior: "smooth"});
});
scroll3.addEventListener('click',function(){
    portfolio.scrollIntoView({behavior: "smooth"});
});
scroll4.addEventListener('click',function(){
    footer.scrollIntoView({behavior: "smooth"});
});

// portfolio slider

let portfolioIcon = document.querySelectorAll('.portfolio_slider__icons li img');
let portfolioSlide = document.querySelector('.portfolio_slider__slide');
let portfolioRadioButton = document.querySelectorAll('.portfolio_slider__radio input');
let portfolioArrow = document.querySelectorAll('.portfolio_slider__arrows span');

for (let icon of portfolioIcon){
    icon.addEventListener('click',()=>{
        portfolioSlide.style.backgroundImage = `url(${icon.src})`;
    });
}
for(let radio of portfolioRadioButton){
    radio.addEventListener('change',()=>{
        portfolioSlide.style.backgroundImage = `url(${radio.value})`;
    });
}
for(let arrow of portfolioArrow){
    arrow.addEventListener('click',(event)=>{
        if(event.target.classList.contains('arrow_left')){
        }
    });
}

// reviews slider

let reviewRow = document.querySelector('.reviews_slider__row');
let reviewArrows = document.querySelectorAll('.review_slider__buttons span');
let reviewSliderItem = document.querySelector('.reviews_slider__item');
let reviewRadios = document.querySelectorAll('.review_slider__radio');
let width = 100;
for(let arrow of reviewArrows){
    reviewRow.style.left = 0 + '%';
    arrow.addEventListener('click',(event)=>{
        if(event.target.classList.contains('review_slider_arrow_left')){
            if(reviewRow.style.left === `0%`){width = -400;reviewRadios[3].checked = true}
                width+=100;
                reviewRow.style.left = width +'%';
        }else{
            if(reviewRow.style.left == `-300%`){width = 100;}
            width-=100;
            reviewRow.style.left = width +'%';
        }
        if(reviewRow.style.left == '0%'){reviewRadios[0].checked = true}
        if(reviewRow.style.left == '-100%'){reviewRadios[1].checked = true}
        if(reviewRow.style.left == '-200%'){reviewRadios[2].checked = true}
        if(reviewRow.style.left == '-300%'){reviewRadios[3].checked = true}
    })
}

for(let reviewRadio of reviewRadios){
    reviewRadio.addEventListener('change',(event)=>{
        reviewRow.style.left = event.target.value;
    })
}