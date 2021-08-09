//burger 메뉴 클릭
const elBurger = document.querySelector('.right_menu .burger'),
      elHeader = document.querySelector('header'),
      elBurgerMenu = document.querySelector('.burger_menu');

elBurger.addEventListener('click',function(){
    elHeader.classList.remove('scroll')
    elBurger.classList.toggle('active');
    elHeader.classList.toggle('active');
    elBurgerMenu.classList.toggle('active');
});

//스크롤 내릴 시 메뉴 배경 변경(header에 class show추가)
window.addEventListener('scroll',function(){
    console.log(
        this.innerHeight<=window.scrollY
        )
    if(this.innerHeight<=window.scrollY){
        elHeader.classList.add('scroll')
    }else{
        elHeader.classList.remove('scroll')
    }
});

const elHead = document.querySelector('.head');
setTimeout(function(){
    elHead.classList.add('show');
},500);
