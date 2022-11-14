console.log("Hello findEmail!");
const form = document.getElementById("findEmailForm");

form.addEventListener("submit", e => {
    const memberName = document.getElementById("memberName");
    
    if(memberName.value.trim().length == 0) {           // 아이디 입력하지 않았을 때
        e.preventDefault();
        memberName.focus();
        alert("이름을 입력해주세요.");
        return;
    }

    const memberRRN1 = document.getElementById("memberRRN1");
    const memberRRN2 = document.getElementById("memberRRN2");

    if(memberRRN1.value.trim().length == 0 || memberRRN2.value.trim().length == 0) {            // 주민등록번호를 입력하지 않았을 때
        e.preventDefault();
        memberRRN1.focus();
        alert("주민등록번호를 입력해주세요.");
        return;
    }
});