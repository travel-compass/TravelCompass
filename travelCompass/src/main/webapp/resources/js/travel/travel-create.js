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
    });
    
    // 수정 아이콘 클릭 시 인풋 사용 가능
    const updateBtnList = document.getElementsByClassName("update-btn");
    for(let btn of updateBtnList) {
        btn.addEventListener("click", e=>{
            if(e.target.previousElementSibling.getAttribute("id") == "travelContent") {
                travelContent.style.height = '1px';
                travelContent.style.height = (12 + travelContent.scrollHeight) + 'px';
            }
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
        if(travel.travelContent != null) {
            travel.travelContent = travel.travelContent.replaceAll("&", "&amp;");
            travel.travelContent = travel.travelContent.replaceAll("<", "&lt;");
            travel.travelContent = travel.travelContent.replaceAll(">", "&gt;");
            travel.travelContent = travel.travelContent.replaceAll("\"", "&quot;");

            travel.travelContent = travel.travelContent.replaceAll("<br>", "\n");
        }
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

    // 여행 삭제 버튼 이벤트 달기
    document.getElementById("deleteTravel").addEventListener("click", ()=>{
        if(confirm("정말 삭제하시겠습니까?")) {
            const form = document.createElement("form");
            form.setAttribute("action", `/travel/deleteTravel/${travel.travelNo}`);
            form.setAttribute("method", "POST");
            document.body.append(form);
            form.submit();
        }
    });

    // 변경사항 초기화 버튼 이벤트 달기
    document.getElementById("reloadTravel").addEventListener("click", ()=>{
        location.reload();
    });

    // 공유 버튼 이벤트 달기
    document.getElementById("share").addEventListener("click", ()=>{
        let url = "";
        const temp = document.createElement("textarea");
        document.body.appendChild(temp);
        url = location.href;
        temp.value = url;
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        alert("클립보드에 저장되었습니다.");
    });

    // 화면 로드 시
    // travel.placeList 간의 거리 출력
    const distanceList = document.getElementsByClassName("distance-km");
    for(let i=0; i<distanceList.length; i++) {
        console.log(`${i}번째 초기화`);
        // 여행 장소 리스트의 i + 1번째가 null이 아니면
        if(travel.placeList[i+1] != null) {
            let distance = computeDistance(
                new Location(travel.placeList[i].mapy, travel.placeList[i].mapx),
                new Location(travel.placeList[i+1].mapy, travel.placeList[i+1].mapx)
            )
            distanceList[i].innerText = `${Math.round(distance * 10) / 10}km`;
        }
    }

    // 지도 화면 변경 토글 이벤트 달기
    const mapToggle = document.getElementById("mapToggle");
    mapToggle.addEventListener("click", ()=>{
        if(mapToggle.value % 2 == 1) {      // 홀수면 맵으로 이동
            if(travel.placeList.length == 0) {
                alert("여행이 비어있어 지도를 펼칠 수 없습니다.");
                return;
            }
            createTravelMap();

            mapToggle.value = Number(mapToggle.value) + 1;
        } else {
            createScrapView();
            
            mapToggle.value = Number(mapToggle.value) - 1;
        }
    });

    // 모달 이벤트
    const roadViewModal = document.getElementById("roadViewModal");
    roadViewModal.addEventListener("click", e=>{
        console.log("클릭");
        if(e.target.getAttribute("id") == "roadViewModal") {
            roadViewModal.classList.remove("show");
        }
    });
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
                    if(result.placeList[i].firstimage != null) {
                        img.src = result.placeList[i].firstimage;
                    } else {
                        img.src = "/reousrces/images/common/12.png";
                    }
                    
        
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
    if(confirm("여행에서도 삭제됩니다.\n정말 삭제하시겠습니까?")){
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

                    // for(let i=0; i<travel.placeList.length; i++) {      
                    //     if(travel.placeList[i].placeScrapNo == scrapList[index].placeScrapNo) { // 삭제한 스크랩 장소가 현재 조회중인 여행에 있다면
                    //         deleteTravelPlace(i);       // 삭제
                    //     }
                    // }

                    // 삭제할 스크립 번호를 저장
                    const deleteScrapNo = scrapList[index].placeScrapNo;
                    // placeList를 돌면서 scrapNo가 맞는 인덱스 확인
                    for(let i = 0; i<travel.placeList.length; i++) {
                        if(travel.placeList[i].placeScrapNo == deleteScrapNo) {
                            deleteTravelPlace(i--);
                        }
                    }
                    // placeList를 돌면서 scrapNo가 맞는 인덱스 확인
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
        if(travel.placeList.length > 1) {
            const distanceArea = document.getElementsByClassName("distance-area")[index].remove();
        }
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
    if(travelPlace.firstimage != null) {
        img.src = travelPlace.firstimage;
    } else {
        img.src = "/resources/images/common/12.png";
    }

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
    fill.style.width = 92 * (travelPlace.averageRating * 20) / 100 + "px";
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




let map;
let bounds;
// 여행 맵 만들기
const createTravelMap = ()=>{
    const toggleArea = document.getElementById("toggleArea");

    // 영역 전부 비우기
    toggleArea.innerHTML = "";

    const travelMap = document.createElement("div");
    travelMap.setAttribute("id", "travelMap");
    
    toggleArea.append(travelMap);
    // 버튼 생성 후 prepend
    const mapInitBtn = document.createElement("button");
    mapInitBtn.setAttribute("id", "mapInit");
    mapInitBtn.addEventListener("click", ()=>{
        setBounds(map, bounds)
    });
    mapInitBtn.innerText = "초기화";
    document.getElementsByClassName("travel-create-content")[0].prepend(mapInitBtn);
    showMap();
};

const showMap = ()=>{
    const mapContainer = document.getElementById("travelMap");
    let mapOption = {
        center: new kakao.maps.LatLng(Number(travel.placeList[0].mapy), Number(travel.placeList[0].mapx)),
        level: 3
    }
    map = new kakao.maps.Map(mapContainer, mapOption);
    console.log("맵 생성");
    // 바운드 생성
    bounds = new kakao.maps.LatLngBounds();

    for(let place of travel.placeList) {
        // 마커찍을 위치 생성
        let markerPosition = new kakao.maps.LatLng(Number(place.mapy), Number(place.mapx));

        let marker = new kakao.maps.Marker({
            "position": markerPosition
        });

        // 인포 윈도우 생성
        // 커스텀 오버레이 생성
        let content = `<div class='marker-content' onclick='showRoadView(${place.mapy}, ${place.mapx})'>` +
            `<span class='marker-title'>${place.title}</span>`
        "</div>";
        
        let customOverlay = new kakao.maps.CustomOverlay({
            "map":map,
            "position": markerPosition,
            "content": content,
            "yAnchor": 1
        });
        
        // 마커 세팅
        marker.setMap(map);
        
        // 인포윈도우 세팅
        
        // 바운드에 마커 세팅
        bounds.extend(markerPosition);
    }
    setBounds(map, bounds);
}

// 로드뷰 보여주기
function showRoadView(mapy, mapx) {
    document.getElementById("roadViewModal").classList.add("show");
    
    // 로드뷰 보여줄 컨테이너
    const roadViewContainer = document.getElementById("roadView");
    roadViewContainer.innerHTML = "";
    // 로드뷰 객체
    const roadView = new kakao.maps.Roadview(roadViewContainer);   
    const roadviewClient = new kakao.maps.RoadviewClient();

    const position = new kakao.maps.LatLng(Number(mapy), Number(mapx));

    roadviewClient.getNearestPanoId(position, 100, panoId=>{
        if(panoId == null) {
            alert("로드뷰를 지원하지 않습니다.");
        }
        console.log(panoId);
        roadView.setPanoId(panoId, position);
    });
}

function setBounds(map, bounds) {
    console.log("초기화");
    map.setBounds(bounds);
}

// 스크랩 장소 검색 화면 보여주기
const createScrapView = ()=>{
    const toggleArea = document.getElementById("toggleArea");
    toggleArea.innerHTML = "";

    const form = document.createElement("form");
    form.classList.add("scrap-place-search");
    form.setAttribute("id", "scrapSearch");
    const searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder", "검색");
    searchInput.classList.add("scrap-place-search-input");
    searchInput.setAttribute("id", "scrapSearchInput");

    const sortBtn = document.createElement("button");
    sortBtn.setAttribute("type", "button");
    sortBtn.classList.add("fa-solid", "fa-sort");
    sortBtn.setAttribute("id", "sortBtn");
    sortBtn.value = "1";

    const submitBtn = document.createElement("button");
    submitBtn.hidden = true;
    
    const scrapPlaceList = document.createElement("ul");
    scrapPlaceList.setAttribute("id", "scrapPlaceList");

    form.append(searchInput, sortBtn, submitBtn);
    toggleArea.append(form, scrapPlaceList);

    // 검색 이벤트 달기
    form.addEventListener("submit", e=>{
        e.preventDefault();
        if(searchInput.value.trim().length == 0) {
            searchInput.focus();
            return;
        }
        searchScrapPlaceList(searchInput.value.trim());
    });

    // 정렬 이벤트 달기
    sortBtn.addEventListener("click", e=>{
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

    searchScrapPlaceList();
};




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