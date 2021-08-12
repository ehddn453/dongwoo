//header------------------------------------------------
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

//items---------------------------------------------------
function searchFun(){
    fetch('./js/json/items.json')
    .then(res => res.json())
    .then(data => callback(data));

    function callback(data){

        let photo1, name1, vol1, cap1, tagList1='', tagAll1='', 
            photo2, name2, vol2, cap2,  tagList2='', tagAll2='';
        const elItemsUl = document.querySelector('.items_list');
        //json 파일의 Power 호출해서 ul에 넣기
        for(let i=0; i<data.Power.length; i++){
            photo1 = data.Power[i].photo;
            name1 = data.Power[i].name;
            vol1 = data.Power[i].voltage;
            cap1 = data.Power[i].capcitance;

            tagList1 += `<li class="items_item">
                            <div class="imgBox">
                                <img src="${photo1}" alt="prd1">
                            </div>
                            <p>
                                <strong>${name1}</strong>
                            </p>
                            <ul class="prd_text">
                                <li>
                                    <strong>Rated Voltage(V)</strong>
                                    <p>${vol1}</p>
                                </li>
                                <li>
                                    <strong>Rated Capcitance(μF)</strong>
                                    <p>${cap1}</p>
                                </li>
                            </ul>
                        </li>`;
        };
        
        //json 파일의 EMI호출해서 ul에 넣기
        for(let i=0; i<data.EMI.length; i++){
            photo2 = data.EMI[i].photo;
            name2 = data.EMI[i].name;
            vol2 = data.EMI[i].voltage;
            cap2 = data.EMI[i].capcitance;

            tagList2 += `<li class="items_item">
                            <div class="imgBox">
                                <img src="${photo2}" alt="prd1">
                            </div>
                            <p>
                                <strong>${name2}</strong>
                            </p>
                            <ul class="prd_text">
                                <li>
                                    <strong>Rated Voltage(V)</strong>
                                    <p>${vol2}</p>
                                </li>
                                <li>
                                    <strong>Rated Capcitance(μF)</strong>
                                    <p>${cap2}</p>
                                </li>
                            </ul>
                        </li>`
        };
        elItemsUl.innerHTML = tagList1 + tagList2;

        //왼쪽 메뉴 클릭 시 상품 나타남
        const elFilmBtn = document.querySelector('.items_menu li:nth-of-type(1)'),
            elPowerBtn = document.querySelector('.items_menu li:nth-of-type(2)'),
            elEmiBtn = document.querySelector('.items_menu li:nth-of-type(3)');

        elFilmBtn.addEventListener('click',function(){
            elItemsUl.innerHTML = tagList1 + tagList2;
        });
        elPowerBtn.addEventListener('click',function(){
            elItemsUl.innerHTML = tagList1;
        });
        elEmiBtn.addEventListener('click',function(){
            elItemsUl.innerHTML = tagList2;
        });

        const elItemsInput = document.querySelector('.search_text'),
            elItemsBtn = document.querySelector('.search_btn');

        //button 클릭 시 
        elItemsBtn.addEventListener('click',submit);
        elItemsInput.addEventListener('keydown', function(){ 
            if(event.keyCode == 13) submit();
        });

        // const elBtn = document.querySelector('.search_btn')
        function submit(){
                console.log('성공');
                const itemValue = elItemsInput.value;
                localStorage.setItem('itemName',itemValue);
                
                let tag = [], tag2=[];
                let elTag1 = '',elTag2='';
                //----------Power---------------------------------
                for(let i=0; i<data.Power.length; i++){
                    photo1 = data.Power[i].photo;
                    name1 = data.Power[i].name;
                    vol1 = data.Power[i].voltage;
                    cap1 = data.Power[i].capcitance;
        
                    tagAll1 = `<li class="items_item">
                                    <div class="imgBox">
                                        <img src="${photo1}" alt="prd1">
                                    </div>
                                    <p>
                                        <strong>${name1}</strong>
                                    </p>
                                    <ul class="prd_text">
                                        <li>
                                            <strong>Rated Voltage(V)</strong>
                                            <p>${vol1}</p>
                                        </li>
                                        <li>
                                            <strong>Rated Capcitance(μF)</strong>
                                            <p>${cap1}</p>
                                        </li>
                                    </ul>
                                </li>`;
                
                    let localValue = localStorage.getItem('itemName');
                    // console.log(tagAll1.match(localValue))
                    let searchLocal = tagAll1.match(localValue);
                    // console.log(localValue == searchLocal)
                    if(searchLocal){
                        // console.log(tagAll1)
                        tag.push(tagAll1)
                    }
                            
                };
                for(let a=0; a<tag.length; a++){                   
                    elTag1 += tag[a]
                }
                
                
                //------------EMI----------------------------------
                for(let i=0; i<data.EMI.length; i++){
                    photo2 = data.EMI[i].photo;
                    name2 = data.EMI[i].name;
                    vol2 = data.EMI[i].voltage;
                    cap2 = data.EMI[i].capcitance;
        
                    tagAll2 = `<li class="items_item">
                                    <div class="imgBox">
                                        <img src="${photo2}" alt="prd1">
                                    </div>
                                    <p>
                                        <strong>${name2}</strong>
                                    </p>
                                    <ul class="prd_text">
                                        <li>
                                            <strong>Rated Voltage(V)</strong>
                                            <p>${vol2}</p>
                                        </li>
                                        <li>
                                            <strong>Rated Capcitance(μF)</strong>
                                            <p>${cap2}</p>
                                        </li>
                                    </ul>
                                </li>`;
                
                    let localValue = localStorage.getItem('itemName');
                    // console.log(tagAll1.match(localValue))
                    let searchLocal = tagAll2.match(localValue);
                    // console.log(localValue == searchLocal)
                    if(searchLocal){
                        // console.log(tagAll1)
                        tag2.push(tagAll2)
                    }
                                
                };
                for(let a=0; a<tag2.length; a++){                   
                    elTag2 += tag2[a]
                }
                elItemsUl.innerHTML = elTag1 + elTag2
                
                if(elTag1 == '' && elTag2 == ''){
                    elItemsUl.innerHTML = `<p>
                                            등록된 제품이 없습니다.
                                            </p>`
                }
        }
    }
}
searchFun()
//----------------enter----------------

/* window.addEventListener('load',function(e){
    e.preventDefault();
}); */

