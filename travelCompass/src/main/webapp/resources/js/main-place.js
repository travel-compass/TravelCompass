// 최근 검색어 생성
(()=> {
    // 최근 검색어 가져오기 (json -> 객체 파싱)
    let resentKeywordArr = localStorage.getItem("recentKeyword");
    if(resentKeywordArr != null) {                                  // 비어있지 않으면

        resentKeywordArr = JSON.parse(resentKeywordArr);

        const resentKeywordArea = document.createElement("div");
        resentKeywordArea.className = "resent-keyword-area";

        const resentKeywordTitle = document.createElement("span");
        resentKeywordTitle.className = "resent-keyword-title";
        resentKeywordTitle.innerText = "최근 검색어";
        
        const resentKeywordList = document.createElement("ul");       // 최근 검색어 담을 리스트 생성
        resentKeywordList.className = "resent-keyword-list";
        resentKeywordList.setAttribute("id", "resentKeywordList");

        for(keyword of resentKeywordArr) {                              // 저장된 키워드 갯수만큼 반복
            const item = document.createElement("li");
            item.className = "item";
            
            const a = document.createElement("a");
            a.href = `search?keyword=${keyword.keyword}&contentTypeId=${keyword.contentTypeId}&areaCode=${keyword.areaCode}`;

            const icon = document.createElement("i");
            icon.className = "fa-solid fa-magnifying-glass";

            const span = document.createElement("span");
            span.innerText = keyword.keyword;

            a.append(icon, span);
            item.append(a);

            if(resentKeywordList.firstChild != null) {
                resentKeywordList.insertBefore(item, resentKeywordList.firstChild);
            } else {
                resentKeywordList.append(item);
            }
        }
        resentKeywordArea.append(resentKeywordTitle, resentKeywordList);
        document.getElementById("searchArea").after(resentKeywordArea);
    }
})();
// 최근 본 장소 리뷰 연결
(()=>{
    if(localStorage.getItem("recentPlace") != null) {
        $.ajax({
            url: "/travel/recentPlace",
            type:"POST",
            data :{
                jsonPlaceList: localStorage.getItem("recentPlace"),
            },
            success: placeList => {
                // console.log(placeList);
                createPlaceList(placeList, "최근에 본 장소");
            }
        })
    }
})();

// 현재 접속위치 좌표 얻기
(() => {
    let latitude = 37.563398;  // 위도
    let longitude = 126.9863309;  // 경도
    // let latitude;  // 위도
    // let longitude;  // 경도
    // if(navigator.geolocation) {     // GPS 사용가능하면
    //     navigator.geolocation.getCurrentPosition(position => {
    //         latitude = position.coords.latitude;
    //         longitude = position.coords.longitude;
    //         console.log(latitude);
    //         console.log(longitude);
    //         const aURL = `latitude=${latitude}&longitude=${longitude}&contentTypeId=12`;
    //         // document.getElementById("aroundSearch").href += aURL;

    //         $.ajax({
    //             url: "/location/searchPlace",
    //             data: {
    //                 "latitude": latitude,
    //                 "longitude": longitude,
    //                 "contentTypeId" : "12"
    //             },
    //             type: "GET",
    //             success: result => {
    //                 console.log(result);
    //                 createPlaceList(result, "주변 관광지");
    //             },
    //             error: () =>{
    //                 console.log("error");
    //             }
    //         });
    //         $.ajax({
    //             url: "/location/searchPlace",
    //             data: {
    //                 "latitude": latitude,
    //                 "longitude": longitude,
    //                 "contentTypeId" : "39"
    //             },
    //             type: "GET",
    //             success: result => {
    //                 console.log(result);
    //                 createPlaceList(result, "주변 음식점");
    //             },
    //             error: () =>{
    //                 console.log("error");
    //             }
    //         });
    //     }, error => {
    //         console.log(error);
    //         return;
    //     }, {
    //         enableHighAccuracy: false,
    //         maximumAge: 0,
    //         timeout: Infinity
    //     });
    // } else {
    //     alert("GPS를 지원하지 않습니다.");
    // }
    $.ajax({
        url: "/location/searchPlace",
        data: {
            "latitude": latitude,
            "longitude": longitude,
            "contentTypeId" : "12"
        },
        type: "GET",
        success: result => {
            console.log(result);
            createPlaceList(result, "주변 관광지");
        },
        error: () =>{
            console.log("error");
        }
    });
    $.ajax({
        url: "/location/searchPlace",
        data: {
            "latitude": latitude,
            "longitude": longitude,
            "contentTypeId" : "39"
        },
        type: "GET",
        success: result => {
            console.log(result);
            createPlaceList(result, "주변 음식점");
        },
        error: () =>{
            console.log("error");
        }
    });
})();

// 최근에 본 장소 보여주기
// (()=>{ 
//     let recentPlaceArr;
//     recentPlaceArr = localStorage.getItem("recentPlace");

//     if(recentPlaceArr != null) {  // 최근에 본 장소가 있을때만
//         recentPlaceArr = JSON.parse(recentPlaceArr);
//         createPlaceList(recentPlaceArr, "최근에 본 장소");
//     }
// })();

function createPlaceList(resultList, title) {

    const placeAreaTitle = document.createElement("span");
    placeAreaTitle.classList.add("place-area-title");
    placeAreaTitle.innerText = title;

    const slideContainer = document.createElement("div");
    slideContainer.classList.add("slide-container");

    const prevArrow = document.createElement("span");
    prevArrow.classList.add("prev-arrow");
    const prevArrowIcon = document.createElement("i");
    prevArrowIcon.classList.add("fa-solid", "fa-arrow-left");

    const nextArrow = document.createElement("span");
    nextArrow.classList.add("next-arrow");
    const nextArrowIcon = document.createElement("i");
    nextArrowIcon.classList.add("fa-solid", "fa-arrow-right");


    const placeList = document.createElement("ul");
    placeList.classList.add("place-list");

    for(let place of resultList) {
        const placeItem = document.createElement("li");
        placeItem.classList.add("place-item");
        const a = document.createElement("a");
        a.setAttribute("href", `/place/detail/${place.contenttypeid}/${place.contentid}`);
        a.setAttribute("onclick", `return addRecentViewPlace("${place.title}", "${place.firstimage}", "${place.contentid}", "${place.contenttypeid}", "${place.averageRating}", "${place.reviewCount}", "${place.addr1}")`);

        const img = document.createElement("img");
        if(place.firstimage == '' || place.firstimage == null) {
            img.src = `/resources/images/common/${place.contenttypeid}.png`;
        } else {
            img.src = place.firstimage;  // 해당 장소의 썸네일 이미지 경로
        }
        const placeTitle = document.createElement("span");
        placeTitle.classList.add("place-title");
        placeTitle.innerText = place.title;

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
        fill.style.width = 92 * (place.averageRating * 20) / 100 + "px";
        const reviewCount = document.createElement("span");
        reviewCount.innerText = place.reviewCount;

        // const rating = document.createElement("div");
        // rating.classList.add("grade");
        // const span1 = document.createElement("span");
        // span1.innerText = "평점";
        // const span2 = document.createElement("span");
        // span2.innerText = "리뷰 갯수";
        rating.append(empty, fill);
        reviewArea.append(rating, reviewCount);

        // 주소
        const addr = document.createElement("span");
        addr.classList.add("place-addr");
        addr.innerText = place.addr1;

        // 거리
        
        a.append(img, placeTitle, reviewArea, addr);
        if(place.dist != null) {
            const distArea = document.createElement("span");
            distArea.classList.add("dist-area");
            
            const distIcon = document.createElement("i");
            distIcon.className = "fa-solid fa-location-dot dist-icon";
            
            const dist = parseInt(place.dist / 100) * 100 / 1000 + "km 떨어짐"
            distArea.append(distIcon, dist);
            a.append(distArea);
        }
        placeItem.append(a);
        placeList.append(placeItem);
    }

    prevArrow.append(prevArrowIcon);
    nextArrow.append(nextArrowIcon);
    if(resultList.length > 4) {
        slideContainer.append(prevArrow, nextArrow)
    }
    slideContainer.append(placeList);
    document.getElementById("placeArea").append(placeAreaTitle, slideContainer);
}