// 현재 접속위치 좌표 얻기
console.log("hello");
(() => {
    let latitude;   // 위도
    let longitude;  // 경도
    if(navigator.geolocation) {     // GPS 사용가능하면
        navigator.geolocation.getCurrentPosition(position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            const aURL = `latitude=${latitude}&longitude=${longitude}&contentTypeId=12`;
            document.getElementById("aroundSearch").href += aURL;

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
                    createPlaceList(result);
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
                    createPlaceList(result);
                },
                error: () =>{
                    console.log("error");
                }
            });
        }, error => {
            console.log(error);
            return;
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert("GPS를 지원하지 않습니다.");
    }
})();

function createPlaceList(resultList) {

    const placeAreaTitle = document.createElement("span");
    placeAreaTitle.classList.add("place-area-title");
    if(resultList[0].contenttypeid == '12') {
        placeAreaTitle.innerText = "주변 관광지";
    } else {
        placeAreaTitle.innerText = "주변 음식점";
    }

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
        a.setAttribute("href", "#");

        const img = document.createElement("img");
        if(place.firstimage == '') {
            img.src = `/resources/images/common/${place.contenttypeid}.png`;
        } else {
            img.src = place.firstimage;  // 해당 장소의 썸네일 이미지 경로
        }
        const placeTitle = document.createElement("span");
        placeTitle.classList.add("place-title");
        placeTitle.innerText = place.title;
        const grade = document.createElement("div");
        grade.classList.add("grade");
        const span1 = document.createElement("span");
        span1.innerText = "평점";
        const span2 = document.createElement("span");
        span2.innerText = "리뷰 갯수";
        grade.append(span1, span2);

        const distIcon = document.createElement("i");
        distIcon.className = "fa-solid fa-location-dot dist-icon";

        const dist = parseInt(place.dist / 100) * 100 / 1000 + "km 떨어짐"
        a.append(img, placeTitle, grade, distIcon, dist);
        placeItem.append(a);
        placeList.append(placeItem);
    }

    prevArrow.append(prevArrowIcon);
    nextArrow.append(nextArrowIcon);

    slideContainer.append(prevArrow, nextArrow, placeList);

    document.querySelector(".place-area").append(placeAreaTitle, slideContainer);
}