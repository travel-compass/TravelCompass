const validate = {
    "memberEmail" : false,
    "emailDupCheck" : false,        // 이메일 중복검사 (ajax)
    // "emailCheck" : false,        // 이메일 인증 구현 필요
    "memberPw" : false,
    "memberPwConfirm" : false,
    "memberRRN" : false,
    "memberName" : false,
    "memberNickname" : false,
    "memberTel" : false,
    "detailAddress" : false
}

const form = document.getElementById("signUp-frm");
form.addEventListener("submit", e => {             // form이 제출 되었을 때

    let message = "";        
    for(let key in validate) {      // 유효성 객체 돌면서
        if(!validate[key]) {        // 한개라도 false면


            switch(key) {   
            case "memberEmail": message = "이메일 형식이 유효하지 않습니다."; break;
            case "emailDupCheck": message = "중복된 이메일 입니다."; break;
            case "memberPw": message = "비밀번호 형식이 휴효하지 않습니다."; break;
            case "memberPwConfirm": message = "비밀번호가 일치하지 않습니다."; break;
            case "memberRRN": message = "주민등록번호 형식이 유효하지 않습니다."; break;
            case "memberNickname": message = "닉네임 형식이 유효하지 않습니다."; break;
            case "memberTel": message = "전화번호 형식이 유효하지 않습니다."; break;
            case "detailAddress": message = "주소를 입력해주세요"; break;
            }
            alert(message);
            e.preventDefault();     // form 제출 막기
            if(key == "emailDupCheck") {
                document.getElementById("memberEmail").focus();
            } else {
                document.getElementById(key).focus();
            }
            return;
        }   
    }

    if(form.querySelectorAll("input[type='checkbox']:checked").length != 2) {   // 약관 2개가 모두 체크 되어있지 않으면
        alert("약관에 동의해주세요");
        e.preventDefault();
        return;
    }
});



// 이메일 유효성 검사
const memberEmail = document.getElementById("memberEmail");
const memberEmailMessage = document.getElementById("memberEmailMessage");

memberEmail.addEventListener("input", () => {
    if(memberEmail.value.trim().length == 0) {      // 아무것도 적히지 않았을 때
        memberEmail.value = "";
        memberEmailMessage.classList.remove("error", "confirm");
        memberEmailMessage.innerText = "메일을 받을 수 있는 이메일을 입력해주세요.";
        validate.memberEmail = false;
        return;
    }

    const regEx = /^[A-Za-z\d\-\_]{4,}@[가-힣\w\-\_]+(\.\w+){1,3}$/;

    if(regEx.test(memberEmail.value.trim())){           // 이메일 형식이 유효할때
        validate.memberEmail = true;
        // memberEmailMessage.innerText = "유효한 형식의 이메일입니다.";
        // memberEmailMessage.classList.add("confirm");
        // memberEmailMessage.classList.remove("error");

        $.ajax({
            url: "/member/emailDupCheck",
            data: {"memberEmail" : memberEmail.value},
            type: "GET",
            success: (result) => {
                if(result > 0) {    // 중복 O
                    memberEmailMessage.innerText = "중복된 이메일입니다.";
                    memberEmailMessage.classList.add("error");
                    memberEmailMessage.classList.remove("confirm");
                    validate.emailDupCheck = false;
                } else {            // 중복 X    
                    memberEmailMessage.innerText = "사용가능한 이메일입니다.";
                    memberEmailMessage.classList.add("confirm");
                    memberEmailMessage.classList.remove("error");
                    validate.emailDupCheck = true;
                }
            }
        });
        
        
    } else {                                            // 이메일 형식이 유효하지 않을 때
        memberEmailMessage.innerText = "유효하지 않은 형식의 이메일입니다.";
        memberEmailMessage.classList.remove("confirm");
        memberEmailMessage.classList.add("error");
        validate.memberEmail = false;
    }
});


// 비밀번호 유효성 검사
const memberPw = document.getElementById("memberPw");
const memberPwMessage = document.getElementById("memberPwMessage");
const memberPwConfirm = document.getElementById("memberPwConfirm");
const memberPwConfirmMessag = document.getElementById("memberPwConfirmMessage");

memberPw.addEventListener("input", () => {
    if(memberPw.value.trim().length == 0) {             // 비밀번호가 입력되지 않았다면
        memberPw.value = "";
        memberPwMessage.classList.remove("error", "confirm");
        memberPwMessage.innerText = "영어, 숫자, 특수문자(!,@,#,-,_) 6 ~ 20 글자 사이로 입력해주세요.";
        validate.memberPw = false;
        return;
    }

    // 비밀번호 형식 확인
    const regEx = /^[a-zA-z0-9!@#-_]{6,20}$/;
    if(regEx.test(memberPw.value)){              // 비밀번호 형식이 유효할 때
        memberPwMessage.innerText = "유효한 형식의 비밀번호입니다.";
        memberPwMessage.classList.add("confirm");
        memberPwMessage.classList.remove("error");
        validate.memberPw = true;
    } else {
        memberPwMessage.innerText = "영어, 숫자, 특수문자(!,@,#,-,_) 6 ~ 20 글자 사이로 입력해주세요."
        memberPwMessage.classList.add("error");
        memberPwMessage.classList.remove("confirm");
        validate.memberPw = false;
    }

    if(memberPw.value == memberPwConfirm.value) {       // 비밀번호 == 비밀번호 확인
        memberPwConfirmMessag.innerText = "비밀번호가 일치합니다."
        memberPwConfirmMessag.classList.add("confirm");
        memberPwConfirmMessag.classList.remove("error");
        validate.memberPwConfirm = true;
    } else {                                            // 비밀번호 != 비밀번호 확인
        memberPwConfirmMessag.innerText = "비밀번호가 일치하지 않습니다.."
        memberPwConfirmMessag.classList.add("error");
        memberPwConfirmMessag.classList.remove("confirm");
        validate.memberPwConfirm = false;
    }
});

// 비밀번호 확인
memberPwConfirm.addEventListener("input", () => {
    if(memberPwConfirm.value.trim().length == 0) {             // 비밀번호가 입력되지 않았다면
        memberPwConfirm.value = "";
        memberPwConfirmMessag.classList.remove("error", "confirm");
        memberPwConfirmMessag.innerText = "";
        validate.memberPw = false;
        return;
    }

    // 비밀번호 확인과 일치 확인
    if(memberPw.value == memberPwConfirm.value) {       // 비밀번호 == 비밀번호 확인
        memberPwConfirmMessag.innerText = "비밀번호가 일치합니다."
        memberPwConfirmMessag.classList.add("confirm");
        memberPwConfirmMessag.classList.remove("error");
        validate.memberPwConfirm = true;
    } else {                                            // 비밀번호 != 비밀번호 확인
        memberPwConfirmMessag.innerText = "비밀번호가 일치하지 않습니다.."
        memberPwConfirmMessag.classList.add("error");
        memberPwConfirmMessag.classList.remove("confirm");
        validate.memberPwConfirm = false;
    }
});

// 주민등록번호 유효성 검사
const memberRRN = document.getElementById("memberRRN");
const memberRRN2 = document.getElementById("memberRRN2");

const memberRRNMessage = document.getElementById("memberRRNMessage");

memberRRN.addEventListener("input", e => {
    memberRRNValidate(e.target);
});
memberRRN2.addEventListener("input", e => {
    memberRRNValidate(e.target);
});

function memberRRNValidate(memberRRNInput) {
    if(memberRRNInput.value.trim().length == 0) {             // 주민등록번호가 입력되지 않았다면
        memberRRNInput.value = "";
        memberRRNMessage.classList.remove("error", "confirm");
        memberRRNMessage.innerText = "13자리 숫자, 뒷자리 첫번째 수는 1 ~ 4";
        validate.memberRRN = false;
        return;
    }

    // 입력된 두개의 값을 -를 추가해 합침
    const totMemberRRN = memberRRN.value + "-" + memberRRN2.value;
    const regEx = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
    if(regEx.test(totMemberRRN)){                    // 형식이 유효할 때
        memberRRNMessage.innerText = "유효한 형식의 주민등록번호입니다.";
        memberRRNMessage.classList.remove("error");
        memberRRNMessage.classList.add("confirm");
        validate.memberRRN = true;
    } else {                                            // 형식이 유효하지 않습니다.
        memberRRNMessage.innerText = "13자리 숫자, 뒷자리 첫번째 수는 1 ~ 4 혹은 생년월일을 정확히 입력해주세요";
        memberRRNMessage.classList.add("error");
        memberRRNMessage.classList.remove("confirm");
        validate.memberRRN = false;
    }
}


// 이름 유효성 검사
const memberName = document.getElementById("memberName");
const memberNameMessage = document.getElementById("memberNameMessage");
memberName.addEventListener("input", function(){
    if(memberName.value.trim().length == 0) {       // 이름이 입력되지 않았다면
        memberName.value = "";
        memberNameMessage.classList.remove("error", "confirm");
        memberNameMessage.innerText = "한글 2 ~ 5글자";
        validate.memberName = false;
        return;
    }

    const regEx = /^[가-힣]{2,5}$/;
    if(regEx.test(memberName.value)) {          // 이름이 유효한 형식이면
        memberNameMessage.innerText = "유효한 형식의 이름입니다.";
        memberNameMessage.classList.add("confirm");
        memberNameMessage.classList.remove("error");
        validate.memberName = true;
    } else {
        memberNameMessage.innerText = "유효하지 않은 형식의 이름입니다.";
        memberNameMessage.classList.add("error");
        memberNameMessage.classList.remove("confirm");
        validate.memberName = false;
    }
});



// 닉네임 유효성 검사
const memberNickname = document.getElementById("memberNickname");
const memberNicknameMessage = document.getElementById("memberNicknameMessage");

memberNickname.addEventListener("input", () => {
    if(memberNickname.value.trim().length == 0) {           // 아무것도 입력되지 않았을 때
        memberNickname.value = "";
        memberNicknameMessage.innerText = "특수문자를 제외한 2 ~ 6글자";
        memberNicknameMessage.classList.remove("confirm", "error");
        validate.memberNickname = false;
        return;
    }

    const regEx = /^[a-zA-Z가-힣0-9]{2,6}$/;

    if(regEx.test(memberNickname.value)) {                  // 유효한 형식일 때
        memberNicknameMessage.innerText = "유효한 형식의 닉네임입니다.";
        memberNicknameMessage.classList.add("confirm");
        memberNicknameMessage.classList.remove("error");
        validate.memberNickname = true;
    } else {                                                 // 유효한 형식이 아닐 때 
        memberNicknameMessage.innerText = "특수문자를 제외한 2 ~ 6글자";
        memberNicknameMessage.classList.add("error");
        memberNicknameMessage.classList.remove("confirm");
        validate.memberNickname = false;
    }
});


// 전화번호 유효성 검사
const memberTel = document.getElementById("memberTel");
const memberTelMessage = document.getElementById("memberTelMessage");

memberTel.addEventListener("input", () => {
    if(memberTel.value.trim().length == 0) {
        memberTel.value = "";
        memberTelMessage.innerText = "휴대전화 번호 입력";
        memberTelMessage.classList.remove("confirm", "error");
        validate.memberTel = false;
        return;
    }
    

    const regEx = /^010[0-9]{8}$/;
    if(regEx.test(memberTel.value)) {       // 유효한 형식일 때
        memberTelMessage.innerText = "유효한 형식의 전화번호입니다.";
        memberTelMessage.classList.add("confirm");
        memberTelMessage.classList.remove("error");
        validate.memberTel = true;
    } else {                                // 유효하지 않은 형식일 때
        memberTelMessage.innerText = "휴대전화 번호를 입력해주세요. 010~";
        memberTelMessage.classList.add("error");
        memberTelMessage.classList.remove("confirm");
        validate.memberTel = false;
    }
});


// 주소 Daum API
document.getElementById("addressSearch").addEventListener("click", execDaumPostcode);

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: data => {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postCode').value = data.zonecode;
            document.getElementById("address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("detailAddress").focus();

            validate.detailAddress = true;
        }
    }).open();
}
