document.addEventListener("DOMContentLoaded", ()=>{
    createPlaceList();
});

function createPlaceList() {
    const placeArea = document.createElement("div");
    placeArea.classList.add("place-item");

    const placeAreaTitle = document.createElement("span");
    placeAreaTitle.classList.add("place-area-title");
    placeAreaTitle.innerText = "주변을 둘러보세요";

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

    for(let i = 0; i< 5; i++) {
        const placeItem = document.createElement("li");
        placeItem.classList.add("place-item");

        const a = document.createElement("a");
        /* a태그 href속성에 쿼리스트링 생성 */

        const img = document.createElement("img");
        img.src = "/resources/images/main-sample.jpg";  // 해당 장소의 썸네일 이미지 경로
        const placeTitle = document.createElement("span");
        placeTitle.classList.add("place-title");
        placeTitle.innerText = `주변장소${i}`;
        const grade = document.createElement("div");
        grade.classList.add("grade");
        const span1 = document.createElement("span");
        span1.innerText = "평점";
        const span2 = document.createElement("span");
        span2.innerText = "리뷰 갯수";
        grade.append(span1, span2);
        a.append(img, placeTitle, grade);
        placeItem.append(a);
        placeList.append(placeItem);
    }

    prevArrow.append(prevArrowIcon);
    nextArrow.append(nextArrowIcon);

    slideContainer.append(prevArrow, nextArrow, placeList);

    placeArea.append(placeAreaTitle, slideContainer);
    document.querySelector(".place-area").after(placeArea); 
}