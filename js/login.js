const elLoginBtn = document.querySelector('button'),
      elLoginId = document.querySelector('#id'),
      elLoginPw = document.querySelector('#pw');

elLoginBtn.addEventListener('click',function(){
    if(elLoginId.value == ''){
        alert('아이디를 입력해주세요.')
    }else if(elLoginPw.value == ''){
        alert('비밀번호를 입력해주세요.')
    }else{
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
    }
});