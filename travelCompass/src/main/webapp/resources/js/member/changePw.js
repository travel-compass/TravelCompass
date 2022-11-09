// 폼
console.log("Hello Script");
const changePwForm = document.getElementById("changePwForm");

changePwForm.addEventListener("mouseover", function(event){
    const btn = event.target;
    if(!btn.classList.contains("visiable-btn")) {
        return;
    }
    btn.previousElementSibling.setAttribute("type", "text")
});

changePwForm.addEventListener("mouseout", function(event){
    const btn = event.target;
    if(!btn.classList.contains("visiable-btn")) {
        return;
    }
    btn.previousElementSibling.setAttribute("type", "password")
});


// 비밀번호 유효성 검사

const memberPw = document.getElementById("memberPw");
const memberPwMessage = document.getElementById("memberPwMessage");

const memberPwConfirm = document.getElementById("memberPwConfirm");
const memberPwConfirmMessage = document.getElementById("memberPwConfirmMessage");
// 비밀번호 정규식
const regEx = /^[\w!@#_-]{6,20}$/;
memberPw.addEventListener("change", function(){             // 비밀번호 입력이 바뀔 때 마다

    if(memberPw.value.trim().length == 0) {        // 비밀번호가 입력되지 않았다면
        memberPw.value = "";
        memberPwMessage.innerText= "영어, 숫자, 특수문자(!,@,#,-,_) 6 ~ 20 글자 사이로 입력해주세요.";
        memberPwMessage.classList.remove("confirm", "error");
        return;
    }

    if(regEx.test(memberPw.value.trim())) {        // 비밀번호 형식이 유효하다면
        memberPwMessage.innerText = "유효한 형식의 비밀번호 입니다."
        memberPwMessage.classList.add("confirm");
        memberPwMessage.classList.remove("error");


    } else {                                       // 유효하지 않을 때
        memberPwMessage.innerText = "유효하지 않은 형식의 비밀번호 입니다."
        memberPwMessage.classList.add("error");
        memberPwMessage.classList.remove("confirm");
    }
});


memberPwConfirm.addEventListener("change", function(){

    if(memberPwConfirm.value.trim().length == 0) {        // 비밀번호가 입력되지 않았다면
        memberPwConfirm.value = "";
        memberPwConfirmMessage.innerText = "";
        memberPwConfirmMessage.classList.remove("confirm", "error");
        return;
    }

});