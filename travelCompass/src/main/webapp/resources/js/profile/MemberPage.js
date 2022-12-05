// 슬라이드 함수
// let slideIndex = 1;

const prev = document.getElementsByClassName("prev");
// const next = document.getElementsByClassName("next");
// const slideArr = new Array(prev.length);

for(let i = 0; i < prev.length; i++) {
    showSlides(0, prev[i]);
}

// for(let i = 0; i < prev.length; i++) {
//     prev[i].addEventListener("click", () => {
//         showSlides(slideIndex += n, element);
//     })
// }

// 페이지 버튼을 눌렀을 때
function plusSlides(n, element) {
    // showSlides(slideIndex += n, element);
    showSlides(n, element);
}

function showSlides(n, element) {
    
    // 이벤트가 발생한 버튼(plusSlides 또는 currentSlide)의
    // 부모(div class="slide-container-style")의 자식을 모두 배열로 가져옴
    const arr = element.parentElement.children;

    // 슬라이드 배열 선언
    const slides = [];

    // arr 배열에서 자식 요소를 하나씩 꺼내옴
    for(let temp of arr){

        // 만약에 클래스명에 slide가 포함되는 자식이 있다면
        if(temp.classList.contains("slide")) {

            // slides 배열에 해당 자식 요소를 추가
            slides.push(temp);
        }
    }

// console.log(slides);
    let idx = 0;
    for(let i=0 ; i<slides.length ; i++){
        if( slides[i].style.display == "block" ){
            idx = i;
            break;
        }
    }
    // console.log("idx : " + idx);
    n += idx;
    // console.log("n : " + n);
    // let slides = document.getElementsByClassName("slide");

    // slideIndex가 slides 배열의 크기보다 크면, slideIndex = 1로 (1번 사진으로 다시 되돌아옴)
    if (n == slides.length) {n = 0}

    // slideIndex가 1보다 작으면 slideIndex를 slides 배열의 크기로 설정 (마지막 사진으로 돌아옴)
    //if (n < 1) {slideIndex = slides.length}

    // 선택된 슬라이드만 보이게 만들고 선택되지 않은 슬라이드는 display = "none";
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slides[n].style.display = "block"; 
} 

// -------------------------------------------------------------------------

// 드랍 다운 메뉴 이벤트
const dropDownMenu = document.getElementsByClassName("user-page-review-dot-style");

for (let BTNList of dropDownMenu){
    BTNList.addEventListener("click",() => {

        BTNList.nextElementSibling.style.display = "block";
    })
    
    BTNList.addEventListener("blur", () => {

        BTNList.nextElementSibling.style.display = "none";

    })

}

const suportButton = document.getElementsByClassName("suport-button");

for(let item of suportButton){
    let count = 0;
    let flag = false;
    
    item.addEventListener("click", function(){

        if(flag == false){
            item.firstElementChild.style.color = "black";
            item.style.textDecoration = "underline";
            count++;
            flag = true;
        } else {
            item.firstElementChild.style.color = "#757575";
            item.style.textDecoration = "none";
            count--;
            flag = false;
        }

        if (count == 0){
            item.parentElement.previousElementSibling.style.display = "none";
            // item.parentElement.previousElementSibling.style.visibility = "hidden";

            // item.parentElement.previousElementSibling.style.maxHeight= "0px";
        } else {
            // item.parentElement.previousElementSibling.style.visibility = "visible";
            // item.parentElement.previousElementSibling.style.maxHeight= "300px";
            item.parentElement.previousElementSibling.style.display = "flex";
            item.parentElement.previousElementSibling.innerHTML = count + "개의 도움이 되는 리뷰";

        }
    });

}

// 프로필 페이지의 피드 버튼 눌렀을 때 사진 유무의 리뷰들 불러오는 비동기
const Fed = document.getElementById("Fed");

Fed.addEventListener("click", (e) => {
    $.ajax({
        url : "/profile/" + memberNo + "/Fed", 
        type : "GET",
        dataType : "JSON",
        success : (reviewList) => {

            const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";

            if (reviewList.length == 0){

                const reviewTextColum = document.createElement("div");
                reviewTextColum.classList.add("user-page-review-colums2");

                const reviewNoneContainner = document.createElement("div");
                reviewNoneContainner.classList.add("user-page-review-none-content");
    
                const reviewNoneContentTitle = document.createElement("div");
                reviewNoneContentTitle.classList.add("none-content-title");
                reviewNoneContentTitle.innerText = "프로필 작성";
    
                const reviewNoneContent = document.createElement("div");
                reviewNoneContent.classList.add("none-content");
                reviewNoneContent.innerText = "사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!";
    
                const reviewCreateButton = document.createElement("div");
                reviewCreateButton.classList.add("none-content-review-create");
                reviewCreateButton.innerHTML = "<a href='리뷰작성페이지'><i class='fa-solid fa-pen-to-square'></i>리뷰 작성하러 가기</a>";
                
                reviewListContainer.append(reviewTextColum);

                reviewTextColum.append(reviewNoneContainner);

                reviewNoneContainner.append(reviewNoneContentTitle, reviewNoneContent, reviewCreateButton);
                
            } else {
                
                for(let list of reviewList){

                    // 슬라이드 번호 초기화 작업
                    for(let j = 0; j < prev.length; j++) {
                        showSlides(0, prev[j]);
                    }
                    
                    const reviewTextColum = document.createElement("div");
                    reviewTextColum.classList.add("user-page-review-colums2");

                    const reviewTextHeaderStyle = document.createElement("div");
                    reviewTextHeaderStyle.classList.add("user-page-review-header-style");
                
                    const reviewTextHeaderLayout = document.createElement("div");
                    reviewTextHeaderLayout.classList.add("user-page-review-header-layout");
            
                    const reviewTextUserImage = document.createElement("a");
                    reviewTextUserImage.classList.add("review-user-image");
        
                    reviewTextUserImage.innerHTML = "<img src=\""+ list.profileImage +"\">";
        
                    const reviewTextInfoLayout = document.createElement("div");
                    reviewTextInfoLayout.classList.add("review-user-info-layout");
        
                    const reviewInfoNickname = document.createElement("span");
                    reviewInfoNickname.classList.add("review-user-nickname");
    
                    reviewInfoNickname.innerHTML = "<a href='#'>"+ list.memberNickname +"</a>님이 리뷰를 작성했습니다."
    
                    const reviewInfoDateLink = document.createElement("a");
                    reviewInfoDateLink.classList.add("review-user-dday");

                    reviewInfoDateLink.innerText = list.reviewDate;
                
                    const reviewTextDotStyle = document.createElement("button");
                    reviewTextDotStyle.classList.add("user-page-review-dot-style");
                    reviewTextDotStyle.innerHTML= "<i class='fa-solid fa-ellipsis' ></i>";
            
                    const reivewTextDotDownMenu = document.createElement("div");
                    reivewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");
                    
                    const reivewTextDownMenu = document.createElement("ul");
                    reivewTextDownMenu.classList.add("down-menu");
        
                    const reivewTextDownMenu_li1 = document.createElement("li");
                    reivewTextDownMenu_li1.innerHTML = "<li><a href='#'>수정</a></li>";
                    
                    const reivewTextDownMenu_li2 = document.createElement("li");
                    reivewTextDownMenu_li2.innerHTML = "<li><a href='#'>삭제</a></li>";

                    // 드랍 다운 메뉴 이벤트 삽입
                    reviewTextDotStyle.addEventListener("click", () => {
                        reviewTextDotStyle.nextElementSibling.style.display = "block";
                    });
                    reviewTextDotStyle.addEventListener("blur", () => {
                        reviewTextDotStyle.nextElementSibling.style.display = "none";
                    });
                    
                    const reviewTextDataTableStyle = document.createElement("div");
                    reviewTextDataTableStyle.classList.add("review-data-table-style");
                    
                    const reviewTextPoint = document.createElement("div");
                    reviewTextPoint.classList.add("review-point");
        
                    const reviewText_span1 = document.createElement("span");
                    reviewText_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
    
                    const reviewText_span2 = document.createElement("span");
                    reviewText_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span3 = document.createElement("span");
                    reviewText_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span4 = document.createElement("span");
                    reviewText_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span5 = document.createElement("span");
                    reviewText_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                    const reviewTextTitle = document.createElement("div");
                    reviewTextTitle.classList.add("review-title");
        
                    reviewTextTitle.innerText = list.reviewTitle;
        
                    const reviewTextContent = document.createElement("div");
                    reviewTextContent.classList.add("review-content");
        
                    reviewTextContent.innerText = '\"' + list.reviewContent + '\"';
        
                    const reviewTextDate = document.createElement("div");
                    reviewTextDate.classList.add("review-date");
                    reviewTextDate.innerHTML = "<span class='rdt'>방문 날짜 :</span>" + list.reviewDate;
                    
                    const reviewTextNaviStyle = document.createElement("div");
                    reviewTextNaviStyle.classList.add("review-navi-style");
                
                    const reviewTextNaviLayout = document.createElement("div");
                    reviewTextNaviLayout.classList.add("review-navi-layout");
        
                    const reviewTextNaviImage = document.createElement("a");
                    reviewTextNaviImage.classList.add("review-navi-left");
                    reviewTextNaviImage.innerHTML = "<div><img src='/resources/images/profile/venis.webp'></div>";
                    
                    const reviewTextNaviTitle = document.createElement("div");
                    reviewTextNaviTitle.classList.add("review-navi-title");
                    reviewTextNaviTitle.innerHTML = "<div>위치정보 제목</div>";

                    const reviewTextNaviDeep = document.createElement("div");
                    reviewTextNaviDeep.classList.add("review-navi-deep");

                    const reviewTextNaviDeepPoint = document.createElement("div");
                    reviewTextNaviDeepPoint.classList.add("review-navi-deep-point");

                    const reviewTextNavi_span1 = document.createElement("span");
                    reviewTextNavi_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
    
                    const reviewTextNavi_span2 = document.createElement("span");
                    reviewTextNavi_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span3 = document.createElement("span");
                    reviewTextNavi_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span4 = document.createElement("span");
                    reviewTextNavi_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span5 = document.createElement("span");
                    reviewTextNavi_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                    const reviewTextNaviCount = document.createElement("div");
                    reviewTextNaviCount.innerText = "00건의 리뷰";
                
                    const reviewTextNavi = document.createElement("div");
                    reviewTextNavi.innerText = "배니스, 이탈리아";
    
                    const reviewTextNaviLike = document.createElement("div");
                    reviewTextNaviLike.classList.add("review-navi-right");
                    reviewTextNaviLike.innerHTML = "<i class='fa-solid fa-heart'></i>";
                
                    const reviewTextSupport = document.createElement("div");
                    reviewTextSupport.classList.add("review-support");
            
                    const reviewTextBottomMenu = document.createElement("div");
                    reviewTextBottomMenu.classList.add("review-bottom-menu-style");
                    
                    const reviewTextSuportButton = document.createElement("div");
                    reviewTextSuportButton.classList.add("suport-button");
                    reviewTextSuportButton.innerHTML = "<i class='fa-regular fa-thumbs-up'></i>도움이 됨";
        
                    const  reviewTextSaveButton = document.createElement("div");
                    reviewTextSaveButton.classList.add("save-button");
                    reviewTextSaveButton.innerHTML= "<i class='fa-solid fa-heart'></i>저장";
        
                    const reviewTextShareButton = document.createElement("div");
                    reviewTextShareButton.classList.add("share-button");
                    reviewTextShareButton.innerHTML = "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";

                    // 최종 부모인 <ul class="review-list" id="reviewContainer"></ul> 에 append
                    reviewListContainer.append(reviewTextColum);

                    // 슬라이드 검사해서 추가

                    // 슬라이드 조립 시작
                    if (list.reviewImgList.length != 0){

                        const reviewImageSlideContainer = document.createElement("div");
                        reviewImageSlideContainer.classList.add("slide-container-style");
                        
                        for(let i = 0 ; i <  list.reviewImgList.length; i++){

                                const reviewImageSlide = document.createElement("div");
                                reviewImageSlide.classList.add("slide", "fade");

                                const reviewImageSlideNumber = document.createElement("div");
                                reviewImageSlideNumber.classList.add("numbertext");
                                reviewImageSlideNumber.innerHTML = (i + 1) + "/" + list.reviewImgList.length;
                            
                                const reviewImageSlidePath = document.createElement("img");
                                reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImgPath + list.reviewImgList[i].reviewImgOriginal);
                            
                                
                                reviewImageSlideContainer.append(reviewImageSlide);
                                
                                reviewImageSlide.append(reviewImageSlideNumber, reviewImageSlidePath);
                            }
                                        
                                            
                            const reviewImageSlidePrevButton = document.createElement("a");
                            reviewImageSlidePrevButton.classList.add("prev");
                            reviewImageSlidePrevButton.setAttribute("onclick", "plusSlides(-1, this)");
                            reviewImageSlidePrevButton.innerHTML = "&#10094;";
                            
                            const reviewImageSlideNextButton = document.createElement("a");
                            reviewImageSlideNextButton.classList.add("next");
                            reviewImageSlideNextButton.setAttribute("onclick", "plusSlides(1, this)");
                            reviewImageSlideNextButton.innerHTML = "&#10095;";

                            reviewImageSlideContainer.append(reviewImageSlidePrevButton, reviewImageSlideNextButton);
                            // 슬라이드 조립 끝

                            // 사진이 있을 땐 사이에 슬라이드 디브 테이블 append
                            reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewTextDataTableStyle, reviewTextNaviStyle,
                                reviewTextSupport, reviewTextBottomMenu);

                    } else {
                        // 사진이 없을 땐 밑에께 바로 실행
                        // A 리뷰 시작 태그인 reviewTextColum append
                        reviewTextColum.append(reviewTextHeaderStyle, reviewTextDataTableStyle, reviewTextNaviStyle,
                            reviewTextSupport, reviewTextBottomMenu);

                    }

                    // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                    reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle,
                        reivewTextDotDownMenu);
                        
                    // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                    reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                    // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                    reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                        
                    // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                    reivewTextDotDownMenu.append(reivewTextDownMenu);

                    // A-0-2-0
                    reivewTextDownMenu.append(reivewTextDownMenu_li1, reivewTextDownMenu_li2);
                    
                    // A-0 번 완성
                                    
                    // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                    reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent,
                        reviewTextDate);

                    // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                    reviewTextPoint.append(reviewText_span1, reviewText_span2, reviewText_span3,
                        reviewText_span4, reviewText_span5);

                    // A-1 번 완성

                    // A-2 (A 리뷰 시작의 2번 인덱스 위치에 있는 태그 )의 append
                    reviewTextNaviStyle.append(reviewTextNaviLayout);

                    // A-2-0 
                    reviewTextNaviLayout.append(reviewTextNaviImage, reviewTextNaviLike);

                    // A-2-0-0
                    reviewTextNaviImage.append(reviewTextNaviTitle);

                    // A-2-0-0-0
                    reviewTextNaviTitle.append(reviewTextNaviDeep, reviewTextNavi);
                
                    // A-2-0-0-0-0
                    reviewTextNaviDeep.append(reviewTextNaviDeepPoint, reviewTextNaviCount);

                    // A-2-0-0-0-0-0
                    reviewTextNaviDeepPoint.append(reviewTextNavi_span1, reviewTextNavi_span2,
                        reviewTextNavi_span3, reviewTextNavi_span4, reviewTextNavi_span5)

                    // A-2 번 완성

                    // A-3 (A 리뷰 시작의 3번 인덱스 위치에 있는 태그 ) append 없음 이벤트 있음
                    
                    // A-4 (A 리뷰 시작의 4번 인덱스 위치에 있는 태그 )의 append
                    reviewTextBottomMenu.append(reviewTextSuportButton, reviewTextSaveButton,
                        reviewTextShareButton);

                    // A-4 번 완성
                }
            }
            
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }

    });

});


        

/*  무한 스크롤 이벤트
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    }
}

*/

// 프로필 페이지의 피드 버튼 눌렀을 때 사진 없는 리뷰들 불러오는 비동기
const Review = document.getElementById("Review");

Review.addEventListener("click", (e) => {
    $.ajax({
        url : "/profile/" + memberNo + "/Review", 
        type : "GET",
        dataType : "JSON",
        success : (reviewList) => {

            const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";

            if (reviewList.length == 0){

                const reviewTextColum = document.createElement("div");
                reviewTextColum.classList.add("user-page-review-colums2");

                const reviewNoneContainner = document.createElement("div");
                reviewNoneContainner.classList.add("user-page-review-none-content");
    
                const reviewNoneContentTitle = document.createElement("div");
                reviewNoneContentTitle.classList.add("none-content-title");
                reviewNoneContentTitle.innerText = "프로필 작성";
    
                const reviewNoneContent = document.createElement("div");
                reviewNoneContent.classList.add("none-content");
                reviewNoneContent.innerText = "사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!";
    
                const reviewCreateButton = document.createElement("div");
                reviewCreateButton.classList.add("none-content-review-create");
                reviewCreateButton.innerHTML = "<a href='리뷰작성페이지'><i class='fa-solid fa-pen-to-square'></i>리뷰 작성하러 가기</a>";
                
                reviewListContainer.append(reviewTextColum);

                reviewTextColum.append(reviewNoneContainner);

                reviewNoneContainner.append(reviewNoneContentTitle, reviewNoneContent, reviewCreateButton);
                
            } else {
                
                for(let list of reviewList){

                    if(list.reviewImgList.length > 0){
                        continue;
                    }

                    // 슬라이드 번호 초기화 작업
                    for(let j = 0; j < prev.length; j++) {
                        showSlides(0, prev[j]);
                    }
                    
                    const reviewTextColum = document.createElement("div");
                    reviewTextColum.classList.add("user-page-review-colums2");

                    const reviewTextHeaderStyle = document.createElement("div");
                    reviewTextHeaderStyle.classList.add("user-page-review-header-style");
                
                    const reviewTextHeaderLayout = document.createElement("div");
                    reviewTextHeaderLayout.classList.add("user-page-review-header-layout");
            
                    const reviewTextUserImage = document.createElement("a");
                    reviewTextUserImage.classList.add("review-user-image");
        
                    reviewTextUserImage.innerHTML = "<img src=\""+ list.profileImage +"\">";
        
                    const reviewTextInfoLayout = document.createElement("div");
                    reviewTextInfoLayout.classList.add("review-user-info-layout");
        
                    const reviewInfoNickname = document.createElement("span");
                    reviewInfoNickname.classList.add("review-user-nickname");
    
                    reviewInfoNickname.innerHTML = "<a href='#'>"+ list.memberNickname +"</a>님이 리뷰를 작성했습니다."
    
                    const reviewInfoDateLink = document.createElement("a");
                    reviewInfoDateLink.classList.add("review-user-dday");

                    reviewInfoDateLink.innerText = list.reviewDate;
                
                    const reviewTextDotStyle = document.createElement("button");
                    reviewTextDotStyle.classList.add("user-page-review-dot-style");
                    reviewTextDotStyle.innerHTML= "<i class='fa-solid fa-ellipsis' ></i>";
            
                    const reivewTextDotDownMenu = document.createElement("div");
                    reivewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");
                    
                    const reivewTextDownMenu = document.createElement("ul");
                    reivewTextDownMenu.classList.add("down-menu");
        
                    const reivewTextDownMenu_li1 = document.createElement("li");
                    reivewTextDownMenu_li1.innerHTML = "<li><a href='#'>수정</a></li>";
                    
                    const reivewTextDownMenu_li2 = document.createElement("li");
                    reivewTextDownMenu_li2.innerHTML = "<li><a href='#'>삭제</a></li>";

                    // 드랍 다운 메뉴 이벤트 삽입
                    reviewTextDotStyle.addEventListener("click", () => {
                        reviewTextDotStyle.nextElementSibling.style.display = "block";
                    });
                    reviewTextDotStyle.addEventListener("blur", () => {
                        reviewTextDotStyle.nextElementSibling.style.display = "none";
                    });
                    
                    const reviewTextDataTableStyle = document.createElement("div");
                    reviewTextDataTableStyle.classList.add("review-data-table-style");
                    
                    const reviewTextPoint = document.createElement("div");
                    reviewTextPoint.classList.add("review-point");
        
                    const reviewText_span1 = document.createElement("span");
                    reviewText_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
    
                    const reviewText_span2 = document.createElement("span");
                    reviewText_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span3 = document.createElement("span");
                    reviewText_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span4 = document.createElement("span");
                    reviewText_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span5 = document.createElement("span");
                    reviewText_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                    const reviewTextTitle = document.createElement("div");
                    reviewTextTitle.classList.add("review-title");
        
                    reviewTextTitle.innerText = list.reviewTitle;
        
                    const reviewTextContent = document.createElement("div");
                    reviewTextContent.classList.add("review-content");
        
                    reviewTextContent.innerText = '\"' + list.reviewContent + '\"';
        
                    const reviewTextDate = document.createElement("div");
                    reviewTextDate.classList.add("review-date");
                    reviewTextDate.innerHTML = "<span class='rdt'>방문 날짜 :</span>" + list.reviewDate;
                    
                    const reviewTextNaviStyle = document.createElement("div");
                    reviewTextNaviStyle.classList.add("review-navi-style");
                
                    const reviewTextNaviLayout = document.createElement("div");
                    reviewTextNaviLayout.classList.add("review-navi-layout");
        
                    const reviewTextNaviImage = document.createElement("a");
                    reviewTextNaviImage.classList.add("review-navi-left");
                    reviewTextNaviImage.innerHTML = "<div><img src='/resources/images/profile/venis.webp'></div>";
                    
                    const reviewTextNaviTitle = document.createElement("div");
                    reviewTextNaviTitle.classList.add("review-navi-title");
                    reviewTextNaviTitle.innerHTML = "<div>위치정보 제목</div>";

                    const reviewTextNaviDeep = document.createElement("div");
                    reviewTextNaviDeep.classList.add("review-navi-deep");

                    const reviewTextNaviDeepPoint = document.createElement("div");
                    reviewTextNaviDeepPoint.classList.add("review-navi-deep-point");

                    const reviewTextNavi_span1 = document.createElement("span");
                    reviewTextNavi_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
    
                    const reviewTextNavi_span2 = document.createElement("span");
                    reviewTextNavi_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span3 = document.createElement("span");
                    reviewTextNavi_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span4 = document.createElement("span");
                    reviewTextNavi_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span5 = document.createElement("span");
                    reviewTextNavi_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                    const reviewTextNaviCount = document.createElement("div");
                    reviewTextNaviCount.innerText = "00건의 리뷰";
                
                    const reviewTextNavi = document.createElement("div");
                    reviewTextNavi.innerText = "배니스, 이탈리아";
    
                    const reviewTextNaviLike = document.createElement("div");
                    reviewTextNaviLike.classList.add("review-navi-right");
                    reviewTextNaviLike.innerHTML = "<i class='fa-solid fa-heart'></i>";
                
                    const reviewTextSupport = document.createElement("div");
                    reviewTextSupport.classList.add("review-support");
            
                    const reviewTextBottomMenu = document.createElement("div");
                    reviewTextBottomMenu.classList.add("review-bottom-menu-style");
                    
                    const reviewTextSuportButton = document.createElement("div");
                    reviewTextSuportButton.classList.add("suport-button");
                    reviewTextSuportButton.innerHTML = "<i class='fa-regular fa-thumbs-up'></i>도움이 됨";
        
                    const  reviewTextSaveButton = document.createElement("div");
                    reviewTextSaveButton.classList.add("save-button");
                    reviewTextSaveButton.innerHTML= "<i class='fa-solid fa-heart'></i>저장";
        
                    const reviewTextShareButton = document.createElement("div");
                    reviewTextShareButton.classList.add("share-button");
                    reviewTextShareButton.innerHTML = "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";

                    // 최종 부모인 <ul class="review-list" id="reviewContainer"></ul> 에 append
                    reviewListContainer.append(reviewTextColum);

                    // 사진이 없을 땐 밑에께 바로 실행
                    // A 리뷰 시작 태그인 reviewTextColum append
                    reviewTextColum.append(reviewTextHeaderStyle, reviewTextDataTableStyle, reviewTextNaviStyle,
                        reviewTextSupport, reviewTextBottomMenu);


                    // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                    reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle,
                        reivewTextDotDownMenu);
                        
                    // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                    reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                    // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                    reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                        
                    // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                    reivewTextDotDownMenu.append(reivewTextDownMenu);

                    // A-0-2-0
                    reivewTextDownMenu.append(reivewTextDownMenu_li1, reivewTextDownMenu_li2);
                    
                    // A-0 번 완성
                                    
                    // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                    reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent,
                        reviewTextDate);

                    // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                    reviewTextPoint.append(reviewText_span1, reviewText_span2, reviewText_span3,
                        reviewText_span4, reviewText_span5);

                    // A-1 번 완성

                    // A-2 (A 리뷰 시작의 2번 인덱스 위치에 있는 태그 )의 append
                    reviewTextNaviStyle.append(reviewTextNaviLayout);

                    // A-2-0 
                    reviewTextNaviLayout.append(reviewTextNaviImage, reviewTextNaviLike);

                    // A-2-0-0
                    reviewTextNaviImage.append(reviewTextNaviTitle);

                    // A-2-0-0-0
                    reviewTextNaviTitle.append(reviewTextNaviDeep, reviewTextNavi);
                
                    // A-2-0-0-0-0
                    reviewTextNaviDeep.append(reviewTextNaviDeepPoint, reviewTextNaviCount);

                    // A-2-0-0-0-0-0
                    reviewTextNaviDeepPoint.append(reviewTextNavi_span1, reviewTextNavi_span2,
                        reviewTextNavi_span3, reviewTextNavi_span4, reviewTextNavi_span5)

                    // A-2 번 완성

                    // A-3 (A 리뷰 시작의 3번 인덱스 위치에 있는 태그 ) append 없음 이벤트 있음
                    
                    // A-4 (A 리뷰 시작의 4번 인덱스 위치에 있는 태그 )의 append
                    reviewTextBottomMenu.append(reviewTextSuportButton, reviewTextSaveButton,
                        reviewTextShareButton);

                    // A-4 번 완성
                }
            }
            
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }

    });

});


// 프로필 페이지의 피드 버튼 눌렀을 때 사진만 있는 리뷰들 불러오는 비동기
const ImageReview = document.getElementById("ImageReview");

ImageReview.addEventListener("click", (e) => {
    $.ajax({
        url : "/profile/" + memberNo + "/ImageReview", 
        type : "GET",
        dataType : "JSON",
        success : (reviewList) => {

            const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";

            if (reviewList.length == 0){

                const reviewTextColum = document.createElement("div");
                reviewTextColum.classList.add("user-page-review-colums2");

                const reviewNoneContainner = document.createElement("div");
                reviewNoneContainner.classList.add("user-page-review-none-content");
    
                const reviewNoneContentTitle = document.createElement("div");
                reviewNoneContentTitle.classList.add("none-content-title");
                reviewNoneContentTitle.innerText = "프로필 작성";
    
                const reviewNoneContent = document.createElement("div");
                reviewNoneContent.classList.add("none-content");
                reviewNoneContent.innerText = "사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!";
    
                const reviewCreateButton = document.createElement("div");
                reviewCreateButton.classList.add("none-content-review-create");
                reviewCreateButton.innerHTML = "<a href='리뷰작성페이지'><i class='fa-solid fa-pen-to-square'></i>리뷰 작성하러 가기</a>";
                
                reviewListContainer.append(reviewTextColum);

                reviewTextColum.append(reviewNoneContainner);

                reviewNoneContainner.append(reviewNoneContentTitle, reviewNoneContent, reviewCreateButton);
                
            } else {
                
                for(let list of reviewList){

                    // 슬라이드 번호 초기화 작업
                    for(let j = 0; j < prev.length; j++) {
                        showSlides(0, prev[j]);
                    }
                    
                    if(list.reviewImgList.length == 0){
                        continue;
                    }

                    
                    const reviewTextColum = document.createElement("div");
                    reviewTextColum.classList.add("user-page-review-colums2");

                    const reviewTextHeaderStyle = document.createElement("div");
                    reviewTextHeaderStyle.classList.add("user-page-review-header-style");
                
                    const reviewTextHeaderLayout = document.createElement("div");
                    reviewTextHeaderLayout.classList.add("user-page-review-header-layout");
            
                    const reviewTextUserImage = document.createElement("a");
                    reviewTextUserImage.classList.add("review-user-image");
        
                    reviewTextUserImage.innerHTML = "<img src=\""+ list.profileImage +"\">";
        
                    const reviewTextInfoLayout = document.createElement("div");
                    reviewTextInfoLayout.classList.add("review-user-info-layout");
        
                    const reviewInfoNickname = document.createElement("span");
                    reviewInfoNickname.classList.add("review-user-nickname");
    
                    reviewInfoNickname.innerHTML = "<a href='#'>"+ list.memberNickname +"</a>님이 리뷰를 작성했습니다."
    
                    const reviewInfoDateLink = document.createElement("a");
                    reviewInfoDateLink.classList.add("review-user-dday");

                    reviewInfoDateLink.innerText = list.reviewDate;
                
                    const reviewTextDotStyle = document.createElement("button");
                    reviewTextDotStyle.classList.add("user-page-review-dot-style");
                    reviewTextDotStyle.innerHTML= "<i class='fa-solid fa-ellipsis' ></i>";
            
                    const reivewTextDotDownMenu = document.createElement("div");
                    reivewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");
                    
                    const reivewTextDownMenu = document.createElement("ul");
                    reivewTextDownMenu.classList.add("down-menu");
        
                    const reivewTextDownMenu_li1 = document.createElement("li");
                    reivewTextDownMenu_li1.innerHTML = "<li><a href='#'>수정</a></li>";
                    
                    const reivewTextDownMenu_li2 = document.createElement("li");
                    reivewTextDownMenu_li2.innerHTML = "<li><a href='#'>삭제</a></li>";

                    // 드랍 다운 메뉴 이벤트 삽입
                    reviewTextDotStyle.addEventListener("click", () => {
                        reviewTextDotStyle.nextElementSibling.style.display = "block";
                    });
                    reviewTextDotStyle.addEventListener("blur", () => {
                        reviewTextDotStyle.nextElementSibling.style.display = "none";
                    });
                    
                    const reviewTextDataTableStyle = document.createElement("div");
                    reviewTextDataTableStyle.classList.add("review-data-table-style");
                    
                    const reviewTextPoint = document.createElement("div");
                    reviewTextPoint.classList.add("review-point");
        
                    const reviewText_span1 = document.createElement("span");
                    reviewText_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
    
                    const reviewText_span2 = document.createElement("span");
                    reviewText_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span3 = document.createElement("span");
                    reviewText_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span4 = document.createElement("span");
                    reviewText_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewText_span5 = document.createElement("span");
                    reviewText_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                    const reviewTextTitle = document.createElement("div");
                    reviewTextTitle.classList.add("review-title");
        
                    reviewTextTitle.innerText = list.reviewTitle;
        
                    const reviewTextContent = document.createElement("div");
                    reviewTextContent.classList.add("review-content");
        
                    reviewTextContent.innerText = '\"' + list.reviewContent + '\"';
        
                    const reviewTextDate = document.createElement("div");
                    reviewTextDate.classList.add("review-date");
                    reviewTextDate.innerHTML = "<span class='rdt'>방문 날짜 :</span>" + list.reviewDate;
                    
                    const reviewTextNaviStyle = document.createElement("div");
                    reviewTextNaviStyle.classList.add("review-navi-style");
                
                    const reviewTextNaviLayout = document.createElement("div");
                    reviewTextNaviLayout.classList.add("review-navi-layout");
        
                    const reviewTextNaviImage = document.createElement("a");
                    reviewTextNaviImage.classList.add("review-navi-left");
                    reviewTextNaviImage.innerHTML = "<div><img src='/resources/images/profile/venis.webp'></div>";
                    
                    const reviewTextNaviTitle = document.createElement("div");
                    reviewTextNaviTitle.classList.add("review-navi-title");
                    reviewTextNaviTitle.innerHTML = "<div>위치정보 제목</div>";

                    const reviewTextNaviDeep = document.createElement("div");
                    reviewTextNaviDeep.classList.add("review-navi-deep");

                    const reviewTextNaviDeepPoint = document.createElement("div");
                    reviewTextNaviDeepPoint.classList.add("review-navi-deep-point");

                    const reviewTextNavi_span1 = document.createElement("span");
                    reviewTextNavi_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
    
                    const reviewTextNavi_span2 = document.createElement("span");
                    reviewTextNavi_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span3 = document.createElement("span");
                    reviewTextNavi_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span4 = document.createElement("span");
                    reviewTextNavi_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                    
                    const reviewTextNavi_span5 = document.createElement("span");
                    reviewTextNavi_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                    const reviewTextNaviCount = document.createElement("div");
                    reviewTextNaviCount.innerText = "00건의 리뷰";
                
                    const reviewTextNavi = document.createElement("div");
                    reviewTextNavi.innerText = "배니스, 이탈리아";
    
                    const reviewTextNaviLike = document.createElement("div");
                    reviewTextNaviLike.classList.add("review-navi-right");
                    reviewTextNaviLike.innerHTML = "<i class='fa-solid fa-heart'></i>";
                
                    const reviewTextSupport = document.createElement("div");
                    reviewTextSupport.classList.add("review-support");
            
                    const reviewTextBottomMenu = document.createElement("div");
                    reviewTextBottomMenu.classList.add("review-bottom-menu-style");
                    
                    const reviewTextSuportButton = document.createElement("div");
                    reviewTextSuportButton.classList.add("suport-button");
                    reviewTextSuportButton.innerHTML = "<i class='fa-regular fa-thumbs-up'></i>도움이 됨";
        
                    const  reviewTextSaveButton = document.createElement("div");
                    reviewTextSaveButton.classList.add("save-button");
                    reviewTextSaveButton.innerHTML= "<i class='fa-solid fa-heart'></i>저장";
        
                    const reviewTextShareButton = document.createElement("div");
                    reviewTextShareButton.classList.add("share-button");
                    reviewTextShareButton.innerHTML = "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";

                    // 최종 부모인 <ul class="review-list" id="reviewContainer"></ul> 에 append
                    reviewListContainer.append(reviewTextColum);

                    // 슬라이드 검사해서 추가

                    // 슬라이드 조립 시작

                    const reviewImageSlideContainer = document.createElement("div");
                    reviewImageSlideContainer.classList.add("slide-container-style");
                    
                    for(let i = 0 ; i <  list.reviewImgList.length; i++){

                        const reviewImageSlide = document.createElement("div");
                        reviewImageSlide.classList.add("slide", "fade");

                        const reviewImageSlideNumber = document.createElement("div");
                        reviewImageSlideNumber.classList.add("numbertext");
                        reviewImageSlideNumber.innerHTML = (i + 1) + "/" + list.reviewImgList.length;
                    
                        const reviewImageSlidePath = document.createElement("img");
                        reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImgPath + list.reviewImgList[i].reviewImgOriginal);
                    
                        
                        reviewImageSlideContainer.append(reviewImageSlide);
                        
                        reviewImageSlide.append(reviewImageSlideNumber, reviewImageSlidePath);
                    }
                                    
                                        
                    const reviewImageSlidePrevButton = document.createElement("a");
                    reviewImageSlidePrevButton.classList.add("prev");
                    reviewImageSlidePrevButton.setAttribute("onclick", "plusSlides(-1, this)");
                    reviewImageSlidePrevButton.innerHTML = "&#10094;";
                    
                    const reviewImageSlideNextButton = document.createElement("a");
                    reviewImageSlideNextButton.classList.add("next");
                    reviewImageSlideNextButton.setAttribute("onclick", "plusSlides(1, this)");
                    reviewImageSlideNextButton.innerHTML = "&#10095;";

                    reviewImageSlideContainer.append(reviewImageSlidePrevButton, reviewImageSlideNextButton);
                    // 슬라이드 조립 끝

                    // 사진이 있을 땐 사이에 슬라이드 디브 테이블 append
                    reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewTextDataTableStyle, reviewTextNaviStyle,
                        reviewTextSupport, reviewTextBottomMenu);

                    // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                    reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle,
                        reivewTextDotDownMenu);
                        
                    // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                    reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                    // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                    reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                        
                    // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                    reivewTextDotDownMenu.append(reivewTextDownMenu);

                    // A-0-2-0
                    reivewTextDownMenu.append(reivewTextDownMenu_li1, reivewTextDownMenu_li2);
                    
                    // A-0 번 완성
                                    
                    // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                    reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent,
                        reviewTextDate);

                    // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                    reviewTextPoint.append(reviewText_span1, reviewText_span2, reviewText_span3,
                        reviewText_span4, reviewText_span5);

                    // A-1 번 완성

                    // A-2 (A 리뷰 시작의 2번 인덱스 위치에 있는 태그 )의 append
                    reviewTextNaviStyle.append(reviewTextNaviLayout);

                    // A-2-0 
                    reviewTextNaviLayout.append(reviewTextNaviImage, reviewTextNaviLike);

                    // A-2-0-0
                    reviewTextNaviImage.append(reviewTextNaviTitle);

                    // A-2-0-0-0
                    reviewTextNaviTitle.append(reviewTextNaviDeep, reviewTextNavi);
                
                    // A-2-0-0-0-0
                    reviewTextNaviDeep.append(reviewTextNaviDeepPoint, reviewTextNaviCount);

                    // A-2-0-0-0-0-0
                    reviewTextNaviDeepPoint.append(reviewTextNavi_span1, reviewTextNavi_span2,
                        reviewTextNavi_span3, reviewTextNavi_span4, reviewTextNavi_span5)

                    // A-2 번 완성

                    // A-3 (A 리뷰 시작의 3번 인덱스 위치에 있는 태그 ) append 없음 이벤트 있음
                    
                    // A-4 (A 리뷰 시작의 4번 인덱스 위치에 있는 태그 )의 append
                    reviewTextBottomMenu.append(reviewTextSuportButton, reviewTextSaveButton,
                        reviewTextShareButton);

                    // A-4 번 완성
                }
            }
            
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }

    });

});

// 모달 팝업창 열닫 기능

// 팔로워 숫자 모달 버튼
const followButton = document.getElementById("follow-button-list");

// 모달 레이아웃
const followModal = document.getElementById("follow-modal");

const followModalCancel = document.querySelector(".modal-bc");


// 팔로워 숫자 클릭 시 팝업 창 오픈
followButton.addEventListener("click", () => {
    
        // 팔로워 수가 0 이상일 때 작동
    if (followButton.innerText > 0) {
        
        followModal.style.display = "block";

    } else {
        return;
    }

    $.ajax({
        url : "/profile/" + memberNo + "/follow", 
        type : "GET",
        dataType : "JSON",
        success : (followMemberList) => {

            // 팔로우 테이블 비우기
            const followTable = document.getElementById("follow-table");
            followTable.innerHTML = "";

            console.log(followMemberList);
            
            if (followMemberList.length == 0){
                return;
            }

            for(let list of followMemberList) {
                
                const followTableLi = document.createElement("li");

                const followMemberLink = document.createElement("a");
                followMemberLink.setAttribute("href", "/profile/" + list.memberNo);


                const followTableImage = document.createElement("div");
                followTableImage.classList.add("follow-user-image");
                followTableImage.innerHTML = "<img src=" + list.profileImage + ">";

                const followTableUserInfo = document.createElement("div");
                followTableUserInfo.classList.add("follow-user-info");

                const followUserButton = document.createElement("button");
                followUserButton.classList.add("follow-user-button", "followOff");
                followUserButton.innerHTML = "<i class='fa-solid fa-user-plus'></i>";

                // 팔로우 하기 버튼
                followUserButton.addEventListener("click", function () {

                    if (loginMemberNo == list.memberNo) {
                        alert("본인한테는 팔로우 할 수 없습니다.");
                        return;
                        
                    }

                    if(loginMemberNo == ""){
                        alert("로그인 후 이용해주세요.");
                        return;
                    }
                
                    if(followUserButton.classList.contains("followOff")){
                
                        $.ajax({
                            url : "/follow",
                            data : {"loginMemberNo" : loginMemberNo, "reviewPageMemberNo" : list.memberNo},
                            type : "GET",
                            success : (result) => {
                
                                // 팔로우 insert 성공 시
                                if (result > 0){
                                    followUserButton.classList.remove("followOff");
                                    
                                    followUserButton.classList.add("followOn");
                
                                    followCountArray();
                
                                } else{
                                    console.log("증가 실패");
                                }
                            },
                            error : () => {
                                console.log("증가 에러");
                            }
                        })
                    } else {
                
                        $.ajax({
                            url : "/unFollow",
                            data : {"loginMemberNo" :loginMemberNo, "reviewPageMemberNo" : list.memberNo},
                            type : "GET",
                            success : (result) => {
                
                                if (result > 0) {
                
                                    followUserButton.classList.remove("followOn");
                                    
                                    followUserButton.classList.add("followOff");
                
                                    followCountArray();
                
                                } else{
                                    console.log("감소 실패");
                                }
                            },
                            error : () =>{
                                console.log("감소 에러");
                            }
                        });
                    }
                    
                })

                followMemberLink.append(followTableImage, followTableUserInfo);

                followTableLi.append(followMemberLink, followUserButton);

                const followUserNickname = document.createElement("div");
                followUserNickname.classList.add("follow-user-nickname");
                followUserNickname.innerText = list.memberNickname;

                const followUserEmail = document.createElement("div");
                followUserEmail.classList.add("follow-user-email");
                followUserEmail.innerText = list.memberEmail;

                const followUserAddress = document.createElement("div");
                followUserAddress.classList.add("follow-user-address");
                followUserAddress.innerText = list.memberAddress;

                const followUserEA = document.createElement("div");
                followUserEA.classList.add("follow-user-ea");
                followUserEA.innerText = list.totalPosting + "포스팅 " + list.totalFollower + "팔로워";

                followTableUserInfo.append(followUserNickname, followUserEmail, followUserAddress, followUserEA);

                // 리스트 테이블에 리스트 하나씩 추가
                followTable.append(followTableLi);
            }

        },
        error : () => {
            alert("팔로워 리스트 출력 에러")
        }
    });
});

const followingButton = document.getElementById("following-button-list");

// 팔로잉 숫자 클릭 시 팝업 창 오픈
followingButton.addEventListener("click", () => {
    
        // 팔로워 수가 0 이상일 때 작동
    if (followingButton.innerText > 0) {
        
        followModal.style.display = "block";

    } else {
        return;
    }

    
    $.ajax({
        url : "/profile/" + memberNo + "/following", 
        type : "GET",
        dataType : "JSON",
        success : (followingMemberList) => {

            // 팔로우 테이블 비우기
            const followTable = document.getElementById("follow-table");
            followTable.innerHTML = "";

            console.log(followingMemberList);
            
            if (followingMemberList.length == 0){
                return;
            }

            const modalTitle = document.getElementById("modal-title");
            modalTitle.innerText = "팔로잉 " + followingMemberList.length + "명";


            for(let list of followingMemberList) {
                
                const followTableLi = document.createElement("li");

                const followMemberLink = document.createElement("a");
                followMemberLink.setAttribute("href", "/profile/" + list.memberNo);


                const followTableImage = document.createElement("div");
                followTableImage.classList.add("follow-user-image");
                followTableImage.innerHTML = "<img src=" + list.profileImage + ">";

                const followTableUserInfo = document.createElement("div");
                followTableUserInfo.classList.add("follow-user-info");

                const followUserButton = document.createElement("button");
                followUserButton.classList.add("follow-user-button", "followOn");
                followUserButton.innerHTML = "<i class='fa-solid fa-user-plus'></i>";

                // 팔로우 하기 버튼
                followUserButton.addEventListener("click", function () {

                    const followingCount = document.getElementsByClassName("PFFCount")[2].lastElementChild;

                    if (loginMemberNo == list.memberNo) {
                        alert("본인한테는 팔로우 할 수 없습니다.");
                        return;
                        
                    }

                    if(loginMemberNo == ""){
                        alert("로그인 후 이용해주세요.");
                        return;
                    }
                
                    if(followUserButton.classList.contains("followOff")){
                
                        $.ajax({
                            url : "/follow",
                            data : {"loginMemberNo" : loginMemberNo, "reviewPageMemberNo" : list.memberNo},
                            type : "GET",
                            success : (result) => {
                
                                // 팔로우 insert 성공 시
                                if (result > 0){
                                    followUserButton.classList.remove("followOff");
                                    
                                    followUserButton.classList.add("followOn");
                
                                    followCountArray();
                
                                } else{
                                    console.log("증가 실패");
                                }
                            },
                            error : () => {
                                console.log("증가 에러");
                            }
                        })
                    } else {
                
                        $.ajax({
                            url : "/unFollow",
                            data : {"loginMemberNo" :loginMemberNo, "reviewPageMemberNo" : list.memberNo},
                            type : "GET",
                            success : (result) => {
                
                                if (result > 0) {
                
                                    followUserButton.classList.remove("followOn");
                                    
                                    followUserButton.classList.add("followOff");
                
                                    followUserButton.parentElement.remove();

                                    followingCount.innerText = Number(followingCount.innerText) - 1;

                                    modalTitle.innerText = "팔로잉 " + (followingMemberList.length - 1) + "명";
                                    
                                    followCountArray();
                
                                } else{
                                    console.log("감소 실패");
                                }
                            },
                            error : () =>{
                                console.log("감소 에러");
                            }
                        });
                    }
                    
                })

                followMemberLink.append(followTableImage, followTableUserInfo);

                followTableLi.append(followMemberLink, followUserButton);

                const followUserNickname = document.createElement("div");
                followUserNickname.classList.add("follow-user-nickname");
                followUserNickname.innerText = list.memberNickname;

                const followUserEmail = document.createElement("div");
                followUserEmail.classList.add("follow-user-email");
                followUserEmail.innerText = list.memberEmail;

                const followUserAddress = document.createElement("div");
                followUserAddress.classList.add("follow-user-address");
                followUserAddress.innerText = list.memberAddress;

                const followUserEA = document.createElement("div");
                followUserEA.classList.add("follow-user-ea");
                followUserEA.innerText = list.totalPosting + "포스팅 " + list.totalFollower + "팔로워";

                followTableUserInfo.append(followUserNickname, followUserEmail, followUserAddress, followUserEA);

                // 리스트 테이블에 리스트 하나씩 추가
                followTable.append(followTableLi);
            }

        },
        error : () => {
            alert("팔로워 리스트 출력 에러")
        }
    });
});

// 팝업 밖 선택 시 팝업 창 닫기
window.addEventListener('click', (e) => {
    e.target === followModalCancel ? followModal.style.display = 'none' : false;
});

// 포스팅, 팔로워, 팔로잉 수가 0일 때 비활성화 하는 작업
const PFF = document.getElementById("PFFColor");

const PFFArray = [];

const followCountArray = function (){

    for(let items of PFF.children){

        if(items.classList.contains("PFFCount")){
    
            // 배열에 해당 자식 요소를 추가
            PFFArray.push(items);
        }
    
    }
    
    for(let items of PFFArray){
    
        if(items.lastElementChild.innerText == 0){
    
            items.lastElementChild.style.color = "#757575";
            items.classList.remove("PFFMouseEvent");
            
        } else{
            
            items.lastElementChild.style.color = "black";
            items.classList.add("PFFMouseEvent");
            
        }
    }
}

// 팔로우 하기 전 버튼 속성 검색하여 할당하기
followCountArray();

// 팔로우 하기
const clickFollow = document.getElementById("clickFollow");

if (clickFollow != null){

    clickFollow.addEventListener("click", () => {
    
        if(loginMemberNo == ""){
            alert("로그인 후 이용해주세요.");
            return;
        }
    
        const followCount = document.getElementsByClassName("PFFCount")[1].lastElementChild;
    
        if(clickFollow.classList.contains("followOff")){
    
            $.ajax({
                url : "/follow",
                data : {"loginMemberNo" : loginMemberNo, "reviewPageMemberNo" : reviewPageMemberNo},
                type : "GET",
                success : (result) => {
    
                    // 팔로우 insert 성공 시
                    if (result > 0){
                        clickFollow.classList.remove("followOff");
                        
                        clickFollow.classList.add("followOn");
    
                        followCount.innerText = Number(followCount.innerText) + 1;
    
                        followCountArray();
    
                    } else{
                        console.log("증가 실패");
                    }
                },
                error : () => {
                    console.log("증가 에러");
                }
            })
        } else {
    
            $.ajax({
                url : "/unFollow",
                data : {"loginMemberNo" :loginMemberNo, "reviewPageMemberNo" : reviewPageMemberNo},
                type : "GET",
                success : (result) => {
    
                    if (result > 0) {
    
                        clickFollow.classList.remove("followOn");
                        
                        clickFollow.classList.add("followOff");
    
                        followCount.innerText = Number(followCount.innerText) - 1;
    
                        followCountArray();
    
                    } else{
                        console.log("감소 실패");
                    }
                },
                error : () =>{
                    console.log("감소 에러");
                }
            });
        }
    });
}

