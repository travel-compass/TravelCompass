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

    // 페이지 로딩 시 drop-down 이벤트 달기
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

    // scrapList 초기화
    if(scrapList != '') {
        scrapList = JSON.parse(scrapList);
    }
    // travel 초기화
    if(travel != ''){
        travel = JSON.parse(travel);
    }


    // 검색 폼 이벤트 달기
    document.getElementById("scrapSearch").addEventListener("submit", e=>{
        e.preventDefault();
        const scrapSearchInput = document.getElementById("scrapSearchInput");
        if(scrapSearchInput.value.trim().length == 0) {
            scrapSearchInput.focus();
            return;
        }
        searchScrapPlaceList(scrapSearchInput.value.trim());
    });

    // 검색 정렬 이벤트 달기
    document.getElementById("sortBtn").addEventListener("click", e=>{
        // keyword 져오기
        const keyword = document.getElementById("scrapSearchInput").value.trim();
        // keyword랑 현재 sortBtn의 value로 $.ajax 요청
        console.log(e.currentTarget.value);
        searchScrapPlaceList(keyword, e.currentTarget.value);
        // value 바꾸기
        if(e.currentTarget.value % 2 == 0) {    // 짝수면
            e.currentTarget.value = Number(e.currentTarget.value) - 1;
        } else {                                // 홀수 
            e.currentTarget.value = Number(e.currentTarget.value) + 1;
        }
    });


    // 변경사항 저장 버튼 이벤트 달기
    document.getElementById("updateTravel").addEventListener("click", ()=>{updateTravel();});

    // 여행 제목 입력 이벤트 달기
    const travelInput = document.getElementsByClassName("travel-input");
    for(let tInput of travelInput) {
        tInput.addEventListener("keyup", e=>{
            if(tInput.getAttribute("id") == "travelContent" && e.shiftKey) {
                return;
            }

            if(e.key == "Enter") {
                // x버튼 안보이게 하기
                tInput.nextElementSibling.style.display = "block";
                // 작성 버튼 보이게 하기
                tInput.nextElementSibling.nextElementSibling.style.display = "none";
                // input read-only class 추가
                tInput.classList.toggle("read-only");
                // input read-only 속성 추가
                tInput.readOnly = true;
                // tempValue.travelTitle 에 input값 대입
                tempValue[tInput.getAttribute("id")] = tInput.value;
                // travel.title에 인풋 값 대입
                travel[tInput.getAttribute("id")] = tInput.value;
            }
        });
    }
})();

// 여행 장소 목록 생성
const createTravelList = () => {
    // 여행 장소 목록 조회
    // 비동기 코드 작성 필요
    $.ajax({
        url:"/travel/selectTravel",
        data : {
            "travelNo": travel.travelNo,
        },
        success: result => {
            travel = result;

            const travelList = document.getElementById("travelList");
            travelList.innerHTML = "";
            if(result.placeList.length == 0) {       // 아무것도 없을 때
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
                for(let i=0; i<result.placeList.length; i++) {
                    const travelItem = document.createElement("li");
                    travelItem.classList.add("travel-item");
        
                    /* 장소 썸네일 이미지 */
                    const travelFirstImage = document.createElement("a");
                    travelFirstImage.href=`/place/detail/${result.placeList[i].contenttypeid}/${result.placeList[i].contentid}`;
                    travelFirstImage.classList.add("travel-first-image");
                    const img = document.createElement("img");
                    img.src = result.placeList[i].firstimage;
        
                    /* 장소 정보 */
                    const placeInfo = document.createElement("div");
                    placeInfo.classList.add("place-info");
        
                    const placeTitleArea = document.createElement("div");
                    placeTitleArea.classList.add("place-title-area");
                    const placeTitleA = document.createElement("a");
                    placeTitleA.href = `/place/detail/${result.placeList[i].contenttypeid}/${result.placeList[i].contentid}`;
                    placeTitleA.innerText = result.placeList[i].title;
                    const placeTitleIcon = document.createElement("button");
                    placeTitleIcon.classList.add("fa-solid", "fa-ellipsis", "drop-down");
                    const dropDownBox = document.createElement("ul");
                    dropDownBox.classList.add("drop-down_box");
                    const li1 = document.createElement("li");
                    li1.innerText = "여행에서 제외";
                    li1.classList.add("deleteTravelPlaceBtn");
                    li1.setAttribute("onclick", `deleteTravelPlace(${i})`);
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
        
                    const rating = document.createElement("div");
                    rating.classList.add("rating");
        
                    const empty = document.createElement("span");
                    empty.classList.add("empty");
                    empty.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";
                    
                    const fill = document.createElement("span");
                    fill.classList.add("fill");
                    fill.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";
                    fill.style.width = 92 * (result.placeList[i].averageRating * 20) / 100;
                    const reviewCount = document.createElement("span");
                    reviewCount.innerText = result.placeList[i].reviewCount;
        
                    const placeAddr = document.createElement("span");
                    placeAddr.classList.add("place-addr");
                    placeAddr.innerText = result.placeList[i].addr1;

                    rating.append(empty, fill);
                    /* 조립 */
                    reviewArea.append(rating, reviewCount);
                    placeTitleArea.append(placeTitleA, placeTitleIcon);
                    placeInfo.append(placeTitleArea, reviewArea, placeAddr);
        
                    travelFirstImage.append(img);
                    travelItem.append(travelFirstImage, placeInfo);
        
                    travelList.append(travelItem);
                }
            }

        }
    });
}

// 스크랩 장소 목록 생성
const searchScrapPlaceList = (keyword, sort) =>{
    console.log(keyword);
    console.log(sort);

    /* 검색 */
    $.ajax({
        url: "/travel/searchScrap",
        data: {
            "memberNo" : memberNo,
            "keyword" : keyword,
            "sort": sort
        },
        success: scrapPlacerResult=>{
            console.log(scrapPlacerResult);
            scrapList = scrapPlacerResult;
            
            const scrapPlaceList = document.getElementById("scrapPlaceList");
            scrapPlaceList.innerHTML = "";
            if(scrapPlacerResult.length == 0) {
                const emptyScrap = document.createElement("div");
                emptyScrap.classList.add("empty-scrap");
                emptyScrap.innerText = "텅...";
                scrapPlaceList.append(emptyScrap);
            } else {
                for(let i=0; i<scrapPlacerResult.length; i++) {
                    const scrapPlaceItem = document.createElement("li");
                    scrapPlaceItem.classList.add("scrap-place-item");
        
                    const placeFirstImage = document.createElement("a");
                    placeFirstImage.classList.add("place-first-image");
                    const img = document.createElement("img");
                    img.src=scrapPlacerResult[i].firstimage;
        
                    const scrapPlaceInfo = document.createElement("div");
                    scrapPlaceInfo.classList.add("scrap-place-info");
                    const placeTitleArea = document.createElement("div");
                    placeTitleArea.classList.add("place-title-area");
                    const placeTitleAreaA = document.createElement("a");
                    placeTitleAreaA.href=`/place/detail/${scrapPlacerResult[i].contenttypeid}/${scrapPlacerResult[i].contentid}`;
                    placeTitleAreaA.innerText = scrapPlacerResult[i].title;
        
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
                    const rating = document.createElement("div");
                    rating.classList.add("rating");
        
                    const empty = document.createElement("span");
                    empty.classList.add("empty");
                    empty.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";
                    
                    const fill = document.createElement("span");
                    fill.classList.add("fill");
                    fill.style.width = 92 * (scrapPlacerResult[i].averageRating * 20) / 100 + "px";
                    fill.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679";
        
                    const span2 =document.createElement("span");
                    span2.innerText = scrapPlacerResult[i].reviewCount;
        
                    const placeAddr = document.createElement("span");
                    placeAddr.classList.add("place-addr");
                    placeAddr.innerText = scrapPlacerResult[i].addr1;
                    const scrapDate = document.createElement("span");
                    scrapDate.classList.add("scrap-date");
                    scrapDate.innerText = `스크랩 날짜: ${scrapPlacerResult[i].scrapDate}`;
        
                    placeTitleArea.append(placeTitleAreaA, dropDown);
        
                    rating.append(empty, fill);
                    reviewArea.append(rating, span2);
        
                    scrapPlaceInfo.append(placeTitleArea, reviewArea, placeAddr, scrapDate);
        
                    placeFirstImage.append(img);
        
                    scrapPlaceItem.append(placeFirstImage, scrapPlaceInfo);
                    scrapPlaceList.append(scrapPlaceItem);
                }
            }
        },
        error: ()=>{
            console.log("스크렙 목록 조회 실패");
        }
    })

}

// 스크랩 삭제
const deleteScrap = (index) => {
    console.log(scrapList[index]);

    // 경고 메세지 출력
    if(confirm("여행에서도 삭제됩니다.<br>정말 삭제하시겠습니까?")){
        // 비동기로 스크랩 장소에서 제거
        $.ajax({
            url:"/travel/deleteScrap",
            data: {
                "placeScrapNo" : scrapList[index].placeScrapNo
            },
            success: result =>{
                if(result > 0) {
                    // 스크랩 리스트 다시 조회
                    searchScrapPlaceList(
                        document.getElementById("scrapSearchInput").value
                        /* 정렬옵션 */
                    );

                    for(let i=0; i<travel.placeList.length; i++) {      
                        if(travel.placeList[i].placeScrapNo == scrapList[index].placeScrapNo) { // 삭제한 스크랩 장소가 현재 조회중인 여행에 있다면
                            deleteTravelPlace(i);       // 삭제
                        }
                    }
                }
            }
        });
    } 
}

// 여행에 장소 추가
const addToPlaceTravel = index => {
    if(travel.placeList.length != 0) {          // 첫번째로 추가된 장소가 아니라면
        // 이전장소와 현재장소의 거리 구하기
        let distance = computeDistance(
            new Location(
                travel.placeList[travel.placeList.length-1].mapy,
                travel.placeList[travel.placeList.length-1].mapx,
            ),
            new Location(
                scrapList[index].mapy,
                scrapList[index].mapx,
            )
        );
        let startTitle = travel.placeList[travel.placeList.length-1].title;
        let directionTitle = scrapList[index].title;
        console.log(`${startTitle}부터 ${directionTitle}까지의 거리는 ${Math.round(distance * 10) / 10}입니다`);
        // 화면 상에 추가
        createTravelPlace(scrapList[index], Math.round(distance * 10) / 10);
    } else {                                     // 첫번째로 추가된 장소라면
        document.getElementsByClassName("empty-item")[0].remove();
        createTravelPlace(scrapList[index]);
    }
    // 실제 여행의 장소목록에 맨 마지막요소로 추가
    travel.placeList.push(new Place(scrapList[index]));
}

// 여행 장소 목록에서 제외
const deleteTravelPlace = (index) => {
    // 화면에서 장소정보 삭젠
    document.getElementsByClassName("travel-item")[index].remove();

    // 삭제할 다음 요소들의 deleteTravelPlace$({index}) 1씩 빼기
    const btnList = document.getElementsByClassName("deleteTravelPlaceBtn");
    for(let i=index; i<btnList.length; i++) {
        btnList[i].setAttribute("onclick", `deleteTravelPlace(${i})`);
    }

    


    // index가 0이면 (맨 첫번째 장소면)
    if(index == 0) {
        // 거리계산 필요x 0번째 li와 distance-area 삭제 후
        const distanceArea = document.getElementsByClassName("distance-area")[index].remove();
        // travel.placeList[0] shift
        travel.placeList.shift();
    } else if (index == travel.placeList.length - 1) {  // 마지막 요소면
        // 거리계산 필요x index 번째 li와 index-1번째 distance-area삭제 후
        const distanceArea = document.getElementsByClassName("distance-area")[index-1].remove();
        // travel.placeList.pop();
        console.log("pop");
        travel.placeList.pop();
    } else {                                            // 중간 요소라면
        // 이전 장소 
        const distanceArea = document.getElementsByClassName("distance-area")[index].remove();
        const prevPlace = travel.placeList[index -1];
        // 다음 장소
        const nextPlace = travel.placeList[index + 1];

        // index - 1 번째 distance-area에
        // prevPlace와, nextPlace 좌표 사이의 거리 넣기
        let distance = computeDistance(
            new Location(
                prevPlace.mapy,
                prevPlace.mapx
            ),
            new Location(
                nextPlace.mapy,
                nextPlace.mapx
            )
        )
        document.getElementsByClassName("distance-km")[index-1].innerText = `${Math.round(distance * 10) / 10}km`;
        console.log(`${index} 번째 삭제`);
        const deletePlace = travel.placeList.splice(index, 1);
        console.log(deletePlace);
    }
    
    // 모든 로직을 수행 후 여행 장소 목록이 비었다면
    if(travel.placeList.length == 0) {      // 비었다는 메세지의 요소를 추가
        const travelList = document.getElementById("travelList");

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
    }
}

// travelList에 html요소 생성에서 추가
const createTravelPlace = (travelPlace, distance) => {
    console.log(travelPlace);
    const travelList = document.getElementById("travelList");
    // 거리 영역 생성
    if(distance != null) {      // 첫번째 요소가 아니면
        const distanceArea = document.createElement("div");
        distanceArea.classList.add("distance-area");
        const path = document.createElement("img");
        path.src="/resources/images/common/distance.png";
        path.classList.add("path");
    
        const distanceDiv = document.createElement("div");
        distanceDiv.classList.add("distance");
        const walk = document.createElement("img");
        walk.src="/resources/images/common/person-walking.png";
        const span = document.createElement("span");
        span.classList.add("distance-km");
        span.innerText= `${distance}km`; 
    
        distanceDiv.append(walk, span);
        distanceArea.append(path, distanceDiv);
        travelList.append(distanceArea);
    }

    // 장소 영역 생성
    const travelItem = document.createElement("li");
    travelItem.classList.add("travel-item");

    /* 장소 썸네일 이미지 */
    const travelFirstImage = document.createElement("a");
    travelFirstImage.href=`/place/detail/${travelPlace.contenttypeid}/${travelPlace.contentid}`;
    travelFirstImage.classList.add("travel-first-image");
    const img = document.createElement("img");
    img.src = travelPlace.firstimage;

    /* 장소 정보 */
    const placeInfo = document.createElement("div");
    placeInfo.classList.add("place-info");

    const placeTitleArea = document.createElement("div");
    placeTitleArea.classList.add("place-title-area");
    const placeTitleA = document.createElement("a");
    placeTitleA.href = `/place/detail/${travelPlace.contenttypeid}/${travelPlace.contentid}`;
    placeTitleA.innerText = travelPlace.title;
    const placeTitleIcon = document.createElement("button");
    placeTitleIcon.classList.add("fa-solid", "fa-ellipsis", "drop-down");
    const dropDownBox = document.createElement("ul");
    dropDownBox.classList.add("drop-down_box");
    const li1 = document.createElement("li");
    li1.innerText = "여행에서 제외";
    li1.setAttribute("onclick", `deleteTravelPlace(${travel.placeList.length})`);
    li1.classList.add("deleteTravelPlaceBtn");
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

    const rating = document.createElement("div");
    rating.classList.add("rating");

    const empty = document.createElement("span");
    empty.classList.add("empty");
    empty.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";
    
    const fill = document.createElement("span");
    fill.classList.add("fill");
    fill.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";
    fill.style.width = 92 * (travelPlace.averageRating * 20) / 100;
    const reviewCount = document.createElement("span");
    reviewCount.innerText = travelPlace.reviewCount;

    const placeAddr = document.createElement("span");
    placeAddr.classList.add("place-addr");
    placeAddr.innerText = travelPlace.addr1;

    rating.append(empty, fill);
    /* 조립 */
    reviewArea.append(rating, reviewCount);
    placeTitleArea.append(placeTitleA, placeTitleIcon);
    placeInfo.append(placeTitleArea, reviewArea, placeAddr);

    travelFirstImage.append(img);
    travelItem.append(travelFirstImage, placeInfo);

    travelList.append(travelItem);
    travelItem.focus();
}


// 여행 변경 사항 저장
const updateTravel = () => {
    if(document.getElementById("travelTitle").value.trim().length == 0) {
        alert("여행 제목을 작성해주세요.");
        return;
    }

    // 비동기로 업데이트
    $.ajax({
        url: "/travel/updateTravel",
        data: { 
            "jsonTravel": JSON.stringify(travel)
        },
        type: "POST",
        success: result=>{
            if(result > 0) {
                alert("변경사항을 저장했습니다.");
            } else {
                alert("변경사항 저장에 실패했습니다.");
            }
        },
        error: ()=>{
            console.log("실패");
        }
    });
}




// 장소 생성자
function Place(addPlace) {
    this.travelNo = travel.travelNo;
    this.contenttypeid = addPlace.contenttypeid;
    this.contentid = addPlace.contentid;
    this.mapx = addPlace.mapx;
    this.mapy = addPlace.mapy;
    this.placeScrapNo = addPlace.placeScrapNo;
    this.reviewCount = addPlace.reviewCount;
    this.scrapDate = addPlace.scrapDate;
    this.title = addPlace.title;
}

// 위도,경도 생성자
function Location(latitude, longitude) {    // latitude : mapy, longitude : mapx
    this.latitude = latitude,
    this.longitude = longitude
};

// 두 위도,경도 사이의 거리 구하기
function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371; //지구의 반경(km)
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                    Math.cos(startLatRads) * Math.cos(destLatRads) *
                    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}