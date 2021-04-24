// куча переменных
let burger = document.querySelector('.burger'),
    header = document.querySelector('.header'),
    list = document.querySelector('.burger_list'),
    logo = document.querySelector('.logo'),
    about_us = document.querySelector('.about_us'),
    wtfDoing = document.querySelector('.wtf_doing'),
    our_team = document.querySelector('.our_team'),
    footer = document.querySelector('.footer'),
    scroll1 = document.querySelector('.scroll1'),
    scroll2 = document.querySelector('.scroll2'),
    scroll3 = document.querySelector('.scroll3'),
    scroll4 = document.querySelector('.scroll4'),
    check = false;
// Чтобы выпадал бургер-лист
burger.addEventListener('click',()=>{
    if(check == false){
        list.style.display = 'block';
        check = true;
    } else{
        list.style.display = 'none';
        check = false;
    }
});
// Все события с скроллами
logo.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
scroll1.addEventListener('click',function(){
    about_us.scrollIntoView({behavior: "smooth"});
});
scroll2.addEventListener('click',function(){
    wtfDoing.scrollIntoView({behavior: "smooth"});
});
scroll3.addEventListener('click',function(){
    our_team.scrollIntoView({behavior: "smooth"});
});
scroll4.addEventListener('click',function(){
    footer.scrollIntoView({behavior: "smooth"});
});



