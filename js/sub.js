window.addEventListener('scroll',function(){
    elHeader.classList.remove('scroll')
});

const elBurger = document.querySelector('.right_menu .burger'),
      elHeader = document.querySelector('header'),
      elBurgerMenu = document.querySelector('.burger_menu');

elBurger.addEventListener('click',function(){
    elBurger.classList.toggle('active');
    elHeader.classList.toggle('active');
    elBurgerMenu.classList.toggle('active');
});

const elHead = document.querySelector('.head');
setTimeout(function(){
    elHead.classList.add('show');
},300);

//------------------------------------------------------------------------------
const elSubTitle = document.querySelector('.sub_title'),
      elSubMain = document.querySelector('.sub_main');
//subpage 접속 시 처음 화면 나타나기
window.onload = function(){
    setTimeout(function(){
        elSubTitle.classList.add('active');
        elSubMain.classList.add('active');
    },500)
}

//scroll 시 나타나기
const elSubMain2 = document.querySelector('.sub_main2'),
      elSubMain2Left = document.querySelector('.main2Left');
window.addEventListener('scroll',function(){
    let subMain2Height = (elSubMain2.offsetTop-window.innerHeight)<=this.scrollY-500
    if(subMain2Height){
        elSubMain2.classList.add('active');
        setTimeout(function(){
            elSubMain2Left.classList.add('active');
        },1000)
    }else{
        elSubMain2.classList.remove('active');
        elSubMain2Left.classList.remove('active');
    }
});