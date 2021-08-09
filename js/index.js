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
//main2 prdbox 전체 스크롤 시 나타나고 없어짐
const elPrdBox = document.querySelector('.prd_box'),
      elPrdPopup = document.querySelector('.prd_popup')
window.addEventListener('scroll',function(){
    if(window.innerHeight<=window.scrollY + 500){
        elPrdBox.classList.add('move');
        setTimeout(function(){
            elPrdPopup.classList.add('move');
        },500);
    }else{
        elPrdBox.classList.remove('move');
        setTimeout(function(){
            elPrdPopup.classList.remove('move');
        },500);
    }
});

const elMain1Popup = document.querySelector('.main1_popup'),
      elMain1H2 = document.querySelector('.main1_text h2'),
      elMain1P = document.querySelector('.main1_text p');
setTimeout(function(){
    elMain1Popup.classList.add('show');
},1500);
setTimeout(function(){
    elMain1H2.classList.add('show');
    elMain1P.classList.add('show');
},1000);

