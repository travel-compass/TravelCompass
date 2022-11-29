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


// travelTitle 글자수 표시
(()=>{
    const travelTitle = document.getElementById("travelTitle");
    travelTitle.addEventListener("input", ()=>{
        document.getElementById("maxLength").innerText = travelTitle.value.trim().length;
    }); 
})();


// createTravelForm 유효성 검사 및 ajax
(()=>{
    document.getElementById("createTravelForm").addEventListener("submit", e => {
        e.preventDefault();
        const travelTitle = document.getElementById("travelTitle");
        if(travelTitle.value.trim().length == 0) {      // 아무것도 적혀있지 않다면
            return;
        }

        $.ajax({
            url: "/travel/create",
            data: {
                "travelTitle": travelTitle.value.trim(),
                "privateFlag": document.querySelector("input[name='scope']:checked").value
            },
            success: result=> {
                if(result > 0) {        // 여행 생성에 성공했을 때
                    createTravelList(); // 여행목록 다시 불러오기
                } else {                // 실패했을 때
                    alert("여행 추가에 실패하였습니다.")
                }
            },
            error: () =>{
                console.log("여행 생성중 에러 발생");
            }
        });
    });  
})();

function createTravelList() {
    $.ajax({
        url: "/travel/select",
        data: {
            "memberNo": memberNo
        },
        success: result => {
            console.log(result);
            const travelList = document.getElementById("travel-list");
            travelList.innerHTML = "";
            // 여행추가 만들기
            // 내 여행 페이지면
            const plusTravel = document.createElement("li");
            plusTravel.setAttribute("id", "plusTravel");
            plusTravel.addEventListener("click", ()=>{
                travelModal.classList.add("show");
            });
        
            const div = document.createElement("div");
        
            const icon = document.createElement("i");
            icon.className = "fa-solid fa-circle-plus";
        
            const span = document.createElement("span");
            span.innerText = "여행 만들기";
            
            div.append(icon, span);
        
            plusTravel.append(div);
            travelList.append(plusTravel);
            
            for(let travel of result) {         // 여행리스트에서 여행을 하나씩 접근하여
        
                // 여행 리스트아이템 최상위 부모
                const travelItem = document.createElement("li");
                travelItem.className = "travel-item";
        
                // 감싸는 div
                const div = document.createElement("div");
        
                /* 여행 상세페이지 a태그 */
                const aDetail = document.createElement("a");
                /* 여행 상세페이지 가는 주소 */
                aDetail.href = "#";

                /* 여행 썸네일 이미지 영역 */
                const travelFirstImage = document.createElement("div");
                travelFirstImage.className = "travel-first-image";
        
                /* 여행 썸네일 이미지 */
                const firstImage = document.createElement("img");
                if(travel.travelFirstImage == null) {               // 여행 썸네일 이미지가 비어있으면
                    firstImage.src = "/resources/images/common/compass.png";
                } else {                                            // 여행 썸네일 이미지가 비어있지 않으면
                    firstImage.src = travel.travelFirstImage;
                }
        
                /* 여행 제목, 작성자 */
                const travelDescription = document.createElement("div");
                travelDescription.className = "travel-description";
        
                const travelTitleDiv = document.createElement("div");
                const travelTitle = document.createElement("span");
                travelTitle.className = "travel-title";
                travelTitle.innerText = travel.travelTitle;
        
                const travelWriterDiv = document.createElement("div");
                travelWriterDiv.innerText = "작성자: ";
                const aTravelWriter = document.createElement("a");
                aTravelWriter.href = "#";
                aTravelWriter.className = "travel-writer";
                aTravelWriter.innerText = travel.memberNickname;
                
                /* 여행의 장소 갯수 */
                const travelPlaceItem = document.createElement("div");
                travelPlaceItem.className = "travel-place-count";
                travelPlaceItem.innerText = "포함: ";
                const placeCount = document.createElement("span");
                placeCount.innerText = travel.travelPlaceCount+"개의 장소";
        
                /* 접근 범위 */
                const accessScopeArea = document.createElement("div");
                accessScopeArea.className = "access-scope-area";
                const accessProfileImage = document.createElement("div");
                accessProfileImage.className = "access-profile-image";
                const aProfile = document.createElement("a");
                aProfile.href = "#";
                const profileImage = document.createElement("img");
                profileImage.src = travel.profileImage;
        
                const scopeDiv = document.createElement("div");
                const scopeSpan = document.createElement("span");
                const scopeIcon = document.createElement("i");
        
                if(travel.privateFlag == 'N') {                 // 접근범위가 public 이면
                    scopeDiv.className = "access-scope-public";
                    scopeIcon.className = "fa-solid fa-lock-open";
                } else {
                    scopeDiv.className = "access-scope-private";
                    scopeIcon.className = "fa-solid fa-lock";
                }
        
        
                /* 접근범위 결합 */
                scopeSpan.append(scopeIcon);
                scopeDiv.append(scopeSpan);
        
                aProfile.append(profileImage);
                accessProfileImage.append(aProfile);
        
                accessScopeArea.append(accessProfileImage, scopeDiv);
        
        
                /* 여행의 장소 갯수 결합 */
                travelPlaceItem.append(placeCount);
        
                /* 여행 제목 작성자 결합 */
                travelTitleDiv.append(travelTitle);
                travelWriterDiv.append(aTravelWriter);
                travelDescription.append(travelTitleDiv, travelWriterDiv);
        
                /* 여행 썸네일 이미지 결합 */
                travelFirstImage.append(firstImage);
        
                div.append(aDetail, travelFirstImage, travelDescription, travelPlaceItem, accessScopeArea);
                travelItem.append(div);
                travelList.append(travelItem);
            }
        },
        error: () => {
            console.log("조회 실패");
        }
    })
}

