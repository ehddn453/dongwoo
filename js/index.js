//main2 prd popup
const elMain2Span = document.querySelectorAll('.prd_box span'),
      elMain2Li = document.querySelectorAll('.prd_popup_all .prd_popup_info');
let w = 0;
for(let i=0; i<elMain2Li.length; i++){
    elMain2Li[i].addEventListener('click',function(){
        elMain2Li[w].classList.remove('active');
        elMain2Span[w].classList.remove('active');

        elMain2Li[i].classList.add('active');
        elMain2Span[i].classList.add('active');
        w = i;
    });
};

//burger 메뉴 클릭
const elBurger = document.querySelector('.right_menu .burger'),
      elHeader = document.querySelector('header'),
      elBurgerMenu = document.querySelector('.burger_menu');

elBurger.addEventListener('click',function(){
    elBurger.classList.toggle('active');
    elHeader.classList.toggle('active');
    elBurgerMenu.classList.toggle('active');
});