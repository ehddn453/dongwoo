const elLoad = document.querySelector('#load'),
      elSection = document.querySelector('.indexAll');
setTimeout(function(){
        elLoad.classList.add('active');
        elSection.classList.add('active');
},2000);


localStorage.clear()

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

//main1 페이지 로드 시 나타나기
const elMain1Popup = document.querySelector('.main1_popup'),
      elMain1H2 = document.querySelectorAll('.main1_text .h2 h2'),
      elMain1P = document.querySelector('.main1_text p');
//오른쪽 위 빨간색 팝업창
setTimeout(function(){
    elMain1Popup.classList.add('show');
},3000);
//text
setTimeout(function(){
    for(let i=0; i<elMain1H2.length; i++){
        elMain1H2[i].classList.add('show');
    }
    elMain1P.classList.add('show');
},2400);

//main3
const elMain3 = document.querySelector('.main3'),
      elMain3Right = document.querySelector('.main3 .main3_right'),
      elMain3H2 = document.querySelector('.main3 h2');
window.addEventListener('scroll',function(){
    //main3 지도 나타나기
    let elMain3Height = elMain3.offsetTop - window.innerHeight;
    if( elMain3Height <= window.scrollY - 600){
        elMain3Right.classList.add('show')
    }else{
        elMain3Right.classList.remove('show')
    };
    //About us 스크롤에 따라 움직이기
    let aboutHeight = (elMain3H2.offsetTop - window.innerHeight) <= window.scrollY - 300
    let idx = elMain3H2.offsetTop - this.scrollY
    
    if(aboutHeight){
        elMain3H2.style.transform = `translate(${idx}px,45%)`
        if(idx<=0){
            elMain3H2.style.transform = `translate(0,45%)`
        };
    };

});
// idx = 오브젝트위치 - 스크롤값
       

//main4
const elMain4 = document.querySelector('.main4'),
      elMain4Ul = document.querySelector('.sup_flex');

window.addEventListener('scroll',function(){
    let elMain4Height = elMain4.offsetTop - window.innerHeight;
        if(elMain4Height <= window.scrollY - 500){
            elMain4Ul.classList.add('move');
        }else{
            elMain4Ul.classList.remove('move');
        }
});

//main1 background 변경
const elBg1 = document.querySelector('.background .bg1'),
      elBg2 = document.querySelector('.background .bg2'),
      elBtn1 = document.querySelector('.back_button .btn1'),
      elBtn2 = document.querySelector('.back_button .btn2');

    window.onload = function onload(){
        elBtn2.classList.remove('active');
        elBg2.classList.remove('active');
        elBtn1.classList.add('active');
        elBg1.classList.add('active');
        setTimeout(function(){
            elBtn1.classList.remove('active');
            elBg1.classList.remove('active');
            elBtn2.classList.add('active');
            elBg2.classList.add('active');
        },5500);
    };
setInterval(onload,11000);
//main2
const elPrdBtn = document.querySelectorAll('.prd_bottom');
for(let i=0; i<elPrdBtn.length; i++){
    elPrdBtn[i].addEventListener('click',function(){
        alert('The information does not exist.');
    });
};

//main3 동영상 재생
const elMain3Arr = document.querySelector('.main3_text a'),
      elMain3Vd1 = document.querySelector('.main3_video1'),
      elMain3Vd2 = document.querySelector('.main3_video2'),
      elMain3VdBg = document.querySelector('.main3_video_bg');

elMain3Arr.addEventListener('click',function(){
    elMain3VdBg.classList.add('active');
    setTimeout(function(){
        elMain3Vd1.classList.add('active');
        elMain3Vd2.classList.add('active');
    },200)
});
elMain3VdBg.addEventListener('click',function(){
    if(elMain3VdBg.classList.contains('active')){
        elMain3VdBg.classList.remove('active');
        elMain3Vd1.classList.remove('active');
        elMain3Vd2.classList.remove('active');
    };
});

//---------------main1 검색창에서 상품 페이지로 검색되기-------

const elIndexInput = document.querySelectorAll('.input_text'),
      elIndexSubmit = document.querySelectorAll('.input_submit');

    for(let i=0; i<elIndexSubmit.length; i++){
        elIndexSubmit[i].addEventListener('click',function(){
            console.log(elIndexInput[i].value)
            const elIndexInputValue = elIndexInput[i].value
            localStorage.setItem('itemName',elIndexInputValue);
        });
    };





