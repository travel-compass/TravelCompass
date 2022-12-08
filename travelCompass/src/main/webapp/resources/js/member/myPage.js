
let writable = false;
document.getElementById(lastPathName).classList.add("current-menu");
if(lastPathName == "info") {
    let messageList = document.querySelectorAll(".input-row > span");
    console.log(messageList);
    // window
    // 페이지 로드 시
    // 유효성 검사 true 초기화
    for(let key in validate) {
        validate[key] = true;
    }
    
    // 편집버튼
    const modifyBtn = document.getElementById("modifyBtn");
    const addressSearch = document.getElementById("addressSearch");
    const inputList = document.getElementsByClassName("writable");
    
    
    modifyBtn.addEventListener("click", ()=>{
        writable = !writable;
        if(writable) {
            modifyBtn.innerText = "취소";
            
            for(let input of inputList) {
                input.readOnly = false;
                input.classList.toggle("input-read-only");
            }
            addressSearch.classList.add("block");
            addressSearch.classList.remove("hide");
            for(let message of messageList) {
                message.style.visibility = "visible";
            }
        } else {
            modifyBtn.innerText = "편집모드";
    
            for(let input of inputList) {
                input.readOnly = true;
                input.classList.toggle("input-read-only");
            }
            addressSearch.classList.add("hide");
            addressSearch.classList.remove("block");
            for(let message of messageList) {
                message.style.visibility = "hidden";
            }
        }
    });
}
