// 여행 추가 버튼
const plusTravel = document.getElementById("plusTravel");
const travelModal = document.getElementById("travelModal");
// 여행추가버튼 클릭 시 모달 생성
plusTravel.addEventListener("click", ()=>{
    travelModal.classList.add("show");
});
travelModal.addEventListener("click", e=>{
    console.log(e.target);
    if(e.target.classList.contains("modal-container")) {
        travelModal.classList.remove("show");
    }
});