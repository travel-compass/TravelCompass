const tempValue = {
    "travelTitle" : "",
    "travelContent" : ""
};
const updateContent = {
    "travelTitle" : value => {
        console.log("object");
    }
};

// 화면 초기화
(()=>{

    // textarea 자동조절 이벤트 추가
    const travelContent = document.getElementById("travelContent");
    travelContent.addEventListener("input", ()=> {
        travelContent.style.height = '1px';
        travelContent.style.height = (12 + travelContent.scrollHeight) + 'px';
    })
    
    // 수정 아이콘 클릭 시 인풋 사용 가능
    const updateBtnList = document.getElementsByClassName("update-btn");
    for(let btn of updateBtnList) {
        btn.addEventListener("click", e=>{
            const input = e.currentTarget.previousElementSibling;
            tempValue[input.getAttribute("id")] = input.value;
            prevValue = input.value;
            input.readOnly = false;
            input.focus();
            input.classList.toggle("read-only");
            e.currentTarget.style.display = "none";
            console.log(e.currentTarget.nextElementSibling);
            e.currentTarget.nextElementSibling.style.display = "block";
        });
    }

    // 취소 아이콘 클릭 시 인풋 사용 불가
    const cancelBtnList = document.getElementsByClassName("cancel-btn");
    for(let btn of cancelBtnList) {
        btn.addEventListener("click", e=>{
            const input = e.currentTarget.previousElementSibling.previousElementSibling;
            input.value = tempValue[input.getAttribute("id")];
            input.readOnly = true;
            input.classList.toggle("read-only");
            e.currentTarget.style.display = "none";
            e.currentTarget.previousElementSibling.style.display = "block";
        });
    }

    const dropDownList = document.getElementsByClassName("drop-down");
    for(let dropDown of dropDownList) {
        dropDown.addEventListener("click", ()=>{
            dropDown.firstElementChild.style.display = "block";
        });

        dropDown.addEventListener("blur", ()=>{
            setTimeout(()=>{
                dropDown.firstElementChild.style.display = "none";
            }, 0);
        });
    }
})();

// 여행 장소 목록 생성
const createTravelList = travelItemList => {
    const travelList = document.getElementById("travelList");

    if(travelItemList == null) {       // 아무것도 없을 때
        const emptyItem = document.createElement("li");
        emptyItem.classList.add("empty-item");

        const emptyImage = document.createElement("div");
        emptyImage.classList.add("empty-image");
        const img = document.createElement("img");
        img.src = "https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg";

        const h1 = document.createElement("h1");
        h1.innerText = "방금 여행을 만들었습니다!";

        const p = document.createElement("p");
        p.innerText = "원하는 장소를 저장한 다음 계획을 정리하고 지도에서 볼 수 있습니다.";

        emptyImage.append(img);
        emptyItem.append(emptyImage, h1, p);
        travelList.append(emptyItem);
    } else {
        for(let i = 0; i<2; i++) {
            const travelItem = document.createElement("li");
            travelItem.classList.add("travel-item");

            /* 장소 썸네일 이미지 */
            const travelFirstImage = document.createElement("a");
            // travelFirstImage.href=""
            travelFirstImage.classList.add("travel-first-image");
            const img = document.createElement("img");
            img.src = "https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium";

            /* 장소 정보 */
            const placeInfo = document.createElement("div");
            placeInfo.classList.add("place-info");

            const placeTitleArea = document.createElement("div");
            placeTitleArea.classList.add("place-title-area");
            const placeTitleA = document.createElement("a");
            // placeTitleA.href = ""
            placeTitleA.innerText = "장소 이름";
            const placeTitleIcon = document.createElement("button");
            placeTitleIcon.classList.add("fa-solid", "fa-ellipsis", "drop-down");
            const dropDownBox = document.createElement("ul");
            dropDownBox.classList.add("drop-down_box");
            const li1 = document.createElement("li");
            li1.innerText = "여행에서 제외";
            dropDownBox.append(li1);
            /* 드롭박스 이벤트 등록 */
            placeTitleIcon.append(dropDownBox);
            placeTitleIcon.addEventListener("click", () => {
                placeTitleIcon.firstElementChild.style.display = "block";
            });
            placeTitleIcon.addEventListener("blur", () => {
                setTimeout(()=>{
                    placeTitleIcon.firstElementChild.style.display = "none";
                }, 1);
                
            });

            const reviewArea = document.createElement("div");
            reviewArea.classList.add("review-area");
            const avgReview = document.createElement("span");
            avgReview.innerText = "평균 리뷰";
            const reviewCount = document.createElement("span");
            reviewCount.innerText = "모든 리뷰 수";

            const placeAddr = document.createElement("span");
            placeAddr.classList.add("place-addr");

            /* 조립 */
            reviewArea.append(avgReview, reviewCount);
            placeTitleArea.append(placeTitleA, placeTitleIcon);
            placeInfo.append(placeTitleArea, reviewArea);

            travelFirstImage.append(img);
            travelItem.append(travelFirstImage, placeInfo, placeAddr);

            travelList.append(travelItem);
        }
    }
}

const createScrapPlaceList = scrapPlacerResult =>{
    const scrapPlaceList = document.getElementById("scrapPlaceList");
    if(scrapPlacerResult == null) {
        const emptyScrap = document.createElement("div");
        emptyScrap.classList.add("empty-scrap");
        emptyScrap.innerText = "텅...";
        scrapPlaceList.append(emptyScrap);
    } else {
        for(let i=0; i<3; i++) {
            const scrapPlaceItem = document.createElement("li");
            scrapPlaceItem.classList.add("scrap-place-item");

            const placeFirstImage = document.createElement("a");
            placeFirstImage.classList.add("place-first-image");
            const img = document.createElement("img");
            img.src="https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium";

            const scrapPlaceInfo = document.createElement("div");
            scrapPlaceInfo.classList.add("scrap-place-info");
            const placeTitleArea = document.createElement("div");
            placeTitleArea.classList.add("place-title-area");
            const placeTitleAreaA = document.createElement("a");
            // placeTitleAreaA.href=""
            placeTitleAreaA.innerText = "스크렙 장소 이름";

            const dropDown = document.createElement("button");
            dropDown.classList.add("fa-solid", "fa-ellipsis", "drop-down");

            const dropDownBox = document.createElement("ul");
            dropDownBox.classList.add("drop-down_box");
            const addPlaceToTravel = document.createElement("li");
            addPlaceToTravel.innerText = "여행에 추가";
            addPlaceToTravel.setAttribute("onclick", `addToPlaceTravel(${i})`);
            const deleteScrap = document.createElement("li");
            deleteScrap.innerText = "스크랩 삭제";
            deleteScrap.setAttribute("onclick", `deleteScrap(${i})`);

            dropDownBox.append(addPlaceToTravel, deleteScrap);
            /* 드롭박스 이벤트 등록 */
            dropDown.append(dropDownBox);
            dropDown.addEventListener("click", () => {
                dropDown.firstElementChild.style.display = "block";
            });
            dropDown.addEventListener("blur", () => {
                setTimeout(()=>{
                    dropDown.firstElementChild.style.display = "none";
                }, 1);
            });

            const reviewArea = document.createElement("div");
            reviewArea.classList.add("review-area");
            /*********************************** 리뷰 추가 예정 ************************************/
            const span1 =document.createElement("span");
            span1.innerText = "평균 리뷰";
            const span2 =document.createElement("span");
            span2.innerText = "모든 리뷰 수";

            const placeAddr = document.createElement("span");
            placeAddr.classList.add("place-addr");
            placeAddr.innerText = "장소 주소";
            const scrapDate = document.createElement("span");
            scrapDate.classList.add("scrap-date");
            scrapDate.innerText = "스크랩 날짜";

            placeTitleArea.append(placeTitleAreaA, dropDown);

            reviewArea.append(span1, span2);

            scrapPlaceInfo.append(placeTitleArea, reviewArea, placeAddr, scrapDate);

            placeFirstImage.append(img);

            scrapPlaceItem.append(placeFirstImage, scrapPlaceInfo);
            scrapPlaceList.append(scrapPlaceItem);
        }
    }
}