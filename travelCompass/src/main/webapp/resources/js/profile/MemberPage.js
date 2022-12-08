

// 더보기 버튼 눌렀을 때 review offset 전역 변수로 설정
let reviewRowBoundCount = 10;

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

        BTNList.lastElementChild.style.display = "block";
    })
    
    BTNList.addEventListener("blur", () => {
        setTimeout(()=>{
            BTNList.lastElementChild.style.display = "none";
        }, 10)
    });

}





// 프로필 페이지의 피드 버튼 눌렀을 때 사진 유무의 리뷰들 불러오는 비동기
const Fed = document.getElementById("Fed");

Fed.addEventListener("click", (e) => {


    window.scrollTo({ top: 0, behavior: "smooth" });

    $.ajax({
        url : "/profile/" + memberNo + "/Fed", 
        type : "GET",
        dataType : "JSON",
        success : (fedList) => {

            const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";

            if (fedList.length == 0){

                const reviewTextColum = document.createElement("div");
                reviewTextColum.classList.add("user-page-review-colums2");

                const reviewNoneContainner = document.createElement("div");
                reviewNoneContainner.classList.add("user-page-review-none-content");
    
                const reviewNoneContentTitle = document.createElement("div");
                reviewNoneContentTitle.classList.add("none-content-title");
                reviewNoneContentTitle.innerText = "리뷰 작성";
    
                const reviewNoneContent = document.createElement("div");
                reviewNoneContent.classList.add("none-content");
                reviewNoneContent.innerText = "사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!";
                
                reviewListContainer.append(reviewTextColum);

                reviewTextColum.append(reviewNoneContainner);

                reviewNoneContainner.append(reviewNoneContentTitle, reviewNoneContent);
                
            } else {
                
                for(let list of fedList){

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
                    reivewTextDownMenu_li1.innerText = "삭제";
                    reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");
                    
                    // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                    reivewTextDownMenu_li1.addEventListener("click", () => {
                        
                        if(loginMemberNo == list.memberNo) {
                            if (confirm("정말 삭제 하시겠습니까?")){
                    
                                location.href = location.pathname + "/" + reviewNo + "/delete";
                        
                            }
                        } else{
                            alert("본인만 이용할 수 있습니다.");
                        }

                    });

                    // 드랍 다운 메뉴 이벤트 삽입
                    reviewTextDotStyle.addEventListener("click", () => {
                        reviewTextDotStyle.lastElementChild.style.display = "block";
                    });

                    reviewTextDotStyle.addEventListener("blur", () => {
                        setTimeout(()=>{
                            reviewTextDotStyle.lastElementChild.style.display = "none";
                        }, 10)
                    });

                    const reviewDetailPage = document.createElement("a");
                    reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);

                    const reviewTextDataTableStyle = document.createElement("span");
                    reviewTextDataTableStyle.classList.add("review-data-table-style");
                    
                    const reviewTextPoint = document.createElement("div");
                    reviewTextPoint.classList.add("review-point");
        
                    const rating = document.createElement("div");
                    rating.classList.add("rating");
                    rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                    +"<span class='fill' style='(width:84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";

                    const reviewTextTitle = document.createElement("div");
                    reviewTextTitle.classList.add("review-title");
        
                    reviewTextTitle.innerText = list.reviewTitle;
        
                    const reviewTextContent = document.createElement("div");
                    reviewTextContent.classList.add("review-content");

                    if(list.reviewContent != null) {
                        list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                    }
        
                    reviewTextContent.innerText = '\"' + list.reviewContent + '\"';

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
                                reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImagePath + list.reviewImgList[i].reviewImageOriginal);
                            
                                
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
                            reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewDetailPage);

                    } else {
                        // 사진이 없을 땐 밑에께 바로 실행
                        // A 리뷰 시작 태그인 reviewTextColum append
                        reviewTextColum.append(reviewTextHeaderStyle, reviewDetailPage);

                    }

                    // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                    reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                    
                    reviewTextDotStyle.append(reivewTextDotDownMenu);  
                    
                    // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                    reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                    // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                    reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                        
                    // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                    reivewTextDotDownMenu.append(reivewTextDownMenu);

                    // A-0-2-0
                    reivewTextDownMenu.append(reivewTextDownMenu_li1);

                    // A-0 번 완성
                                    
                    // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                    reviewDetailPage.append(reviewTextDataTableStyle);                
                    reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);

                    // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                    reviewTextPoint.append(rating);
                    
                }
                
                // 리뷰 길이가 10개 면 버튼 추가
                if (fedList.length == 10){

                    const moreButtonPlus = document.createElement("button");
                    moreButtonPlus.classList.add("more-button");
                    moreButtonPlus.setAttribute("id", "moreButton");
                    moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
                    
                    reviewRowBoundCount += 10;

                    moreButtonPlus.addEventListener("click", () => {
                        fedMoreReviewList();
                    })

                    reviewListContainer.append(moreButtonPlus);
                    
                    
                    // 피드 리뷰 리스트가 길이가 10개이면 다음 10개를 열기 위한 더보기 버튼 추가
                    // 더보기 버튼 작동
                } else {
                    reviewRowBoundCount = 0;
                }
                
                
            }
            
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }

    });

});

// 피드 비동기 테이블의 더보기 버튼 클릭 시 리뷰가 있을 때 추가로 보여지기
const fedMoreReviewList = function() {

    $.ajax({
        url : "/profile/" + memberNo + "/ajaxfedMoreList", 
        data : {"rowBoundCount" : reviewRowBoundCount},
        type : "GET",
        dataType : "JSON",
        success : (ajaxFedMoreList) => {

            const moreButton = document.getElementById("moreButton");
            // 더보기 버튼 삭제
            moreButton.remove();

            const reviewListContainer = document.getElementById("reviewContainer");
            
            for(let list of ajaxFedMoreList){

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
                reivewTextDownMenu_li1.innerText = "삭제";
                reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");
                
                // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                reivewTextDownMenu_li1.addEventListener("click", () => {
            
                    if(loginMemberNo == list.memberNo) {

                        if (confirm("정말 삭제 하시겠습니까?")){
                
                            location.href = location.pathname + "/" + reviewNo + "/delete";
                    
                        }
                    } else{
                        alert("본인만 이용할 수 있습니다.");
                    }
                });

                // 드랍 다운 메뉴 이벤트 삽입
                reviewTextDotStyle.addEventListener("click", () => {
                    reviewTextDotStyle.lastElementChild.style.display = "block";
                });

                reviewTextDotStyle.addEventListener("blur", () => {
                    setTimeout(()=>{
                        reviewTextDotStyle.lastElementChild.style.display = "none";
                    }, 10)
                });

                const reviewDetailPage = document.createElement("a");
                reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);
                    
                const reviewTextDataTableStyle = document.createElement("span");
                reviewTextDataTableStyle.classList.add("review-data-table-style");
                
                const reviewTextPoint = document.createElement("div");
                reviewTextPoint.classList.add("review-point");
                
                const rating = document.createElement("div");
                rating.classList.add("rating");
                rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                +"<span class='fill' style='width:(84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";

                const reviewTextTitle = document.createElement("div");
                reviewTextTitle.classList.add("review-title");
    
                reviewTextTitle.innerText = list.reviewTitle;
    
                const reviewTextContent = document.createElement("div");
                reviewTextContent.classList.add("review-content");

                if(list.reviewContent != null) {
                    list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                }

                reviewTextContent.innerText = '\"' + list.reviewContent + '\"';

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
                            reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImagePath + list.reviewImgList[i].reviewImageOriginal);
                        
                            
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
                        reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewDetailPage);

                } else {
                    // 사진이 없을 땐 밑에께 바로 실행
                    // A 리뷰 시작 태그인 reviewTextColum append
                    reviewTextColum.append(reviewTextHeaderStyle, reviewDetailPage);

                }

                // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                    
                reviewTextDotStyle.append(reivewTextDotDownMenu);
                    
                // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                    
                // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                reivewTextDotDownMenu.append(reivewTextDownMenu);

                // A-0-2-0
                reivewTextDownMenu.append(reivewTextDownMenu_li1);

                // A-0 번 완성
                                
                // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                reviewDetailPage.append(reviewTextDataTableStyle);                
                reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);

                // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                reviewTextPoint.append(rating);

            }
            
            if (ajaxFedMoreList.length == 10){

                const moreButtonPlus = document.createElement("button");
                moreButtonPlus.classList.add("more-button");
                moreButtonPlus.setAttribute("id", "moreButton");
                moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
    
                reviewRowBoundCount += 10;
    
                moreButtonPlus.addEventListener("click", () => {
    
                    // 재귀함수 호출
                    fedMoreReviewList();
                })
        
                reviewListContainer.append(moreButtonPlus);
            } else {
                reviewRowBoundCount = 0;
            }
        }
    })
}

// 여기까지 피드 비동기 테이블
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// 프로필 페이지의 리뷰 버튼 눌렀을 때 사진 없는 리뷰들 불러오는 비동기
const Review = document.getElementById("Review");

Review.addEventListener("click", (e) => {

    window.scrollTo({ top: 0, behavior: "smooth" });

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
                reviewNoneContentTitle.innerText = "리뷰 작성";
    
                const reviewNoneContent = document.createElement("div");
                reviewNoneContent.classList.add("none-content");
                reviewNoneContent.innerText = "사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!";
                
                reviewListContainer.append(reviewTextColum);

                reviewTextColum.append(reviewNoneContainner);

                reviewNoneContainner.append(reviewNoneContentTitle, reviewNoneContent);
                
            } else {
                
                for(let list of reviewList){
                    
                    // // 슬라이드 번호 초기화 작업
                    // for(let j = 0; j < prev.length; j++) {
                    //     showSlides(0, prev[j]);
                    // }
    
                    if(list.reviewImgList.length == 0){

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
                        reivewTextDownMenu_li1.innerText = "삭제";
                        reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");
        
                        // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                        reivewTextDownMenu_li1.addEventListener("click", () => {
                    
                            if(loginMemberNo == list.memberNo) {
    
                                if (confirm("정말 삭제 하시겠습니까?")){
                        
                                    location.href = location.pathname + "/" + reviewNo + "/delete";
                            
                                }
                            } else{
                                alert("본인만 이용할 수 있습니다.");
                            }
                        });
                        // 드랍 다운 메뉴 이벤트 삽입
                        reviewTextDotStyle.addEventListener("click", () => {
                            reviewTextDotStyle.lastElementChild.style.display = "block";
                        });
    
                        reviewTextDotStyle.addEventListener("blur", () => {
                            setTimeout(()=>{
                                reviewTextDotStyle.lastElementChild.style.display = "none";
                            }, 10)
                        });
                        const reviewDetailPage = document.createElement("a");
                        reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);
                        
                        const reviewTextDataTableStyle = document.createElement("span");
                        reviewTextDataTableStyle.classList.add("review-data-table-style");
                        
                        const reviewTextPoint = document.createElement("div");
                        reviewTextPoint.classList.add("review-point");
                        const rating = document.createElement("div");
    
                        rating.classList.add("rating");
                        rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                        +"<span class='fill' style='width:(84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";
    
                        const reviewTextTitle = document.createElement("div");
                        reviewTextTitle.classList.add("review-title");
            
                        reviewTextTitle.innerText = list.reviewTitle;
            
                        const reviewTextContent = document.createElement("div");
                        reviewTextContent.classList.add("review-content");

                        if(list.reviewContent != null) {
                            list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                        }
            
                        reviewTextContent.innerText = '\"' + list.reviewContent + '\"';
    
                        // 최종 부모인 <ul class="review-list" id="reviewContainer"></ul> 에 append
                        reviewListContainer.append(reviewTextColum);
    
                        // 사진이 없을 땐 밑에께 바로 실행
                        // A 리뷰 시작 태그인 reviewTextColum append
                        reviewTextColum.append(reviewTextHeaderStyle, reviewDetailPage);
    
    
                        // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                        reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                        
                        reviewTextDotStyle.append(reivewTextDotDownMenu);
                            
                        // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                        reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);
    
                        // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                        reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                            
                        // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                        reivewTextDotDownMenu.append(reivewTextDownMenu);
    
                        // A-0-2-0
                        reivewTextDownMenu.append(reivewTextDownMenu_li1);
    
                        // A-0 번 완성
                                        
                        // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                        reviewDetailPage.append(reviewTextDataTableStyle);
                        
                        reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);
    
                        // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                        reviewTextPoint.append(rating);
        
                    }
                }
                    
                
                // 리뷰 길이가 10개 면 버튼 추가
                if (reviewList.length == 10){

                    const moreButtonPlus = document.createElement("button");
                    moreButtonPlus.classList.add("more-button");
                    moreButtonPlus.setAttribute("id", "moreButton");
                    moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
                    
                    reviewRowBoundCount += 10;

                    moreButtonPlus.addEventListener("click", () => {
                        reviewMoreReviewList();
                    })

                    reviewListContainer.append(moreButtonPlus);
                    
                    
                    // 피드 리뷰 리스트가 길이가 10개이면 다음 10개를 열기 위한 더보기 버튼 추가
                    // 더보기 버튼 작동
                } else {
                    reviewRowBoundCount = 0;
                }  

            }
            
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }

    });

});

function reviewMoreReviewList () {

    $.ajax({
        url : "/profile/" + memberNo + "/ajaxReviewMoreList", 
        data : {"rowBoundCount" : reviewRowBoundCount},
        type : "GET",
        dataType : "JSON",
        success : (ajaxReviewMoreList) => {

            const moreButton = document.getElementById("moreButton");
            // 더보기 버튼 삭제
            moreButton.remove();

            const reviewListContainer = document.getElementById("reviewContainer");
            
            for(let list of ajaxReviewMoreList){

                if(list.reviewImgList.length == 0){
                    
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
                    reivewTextDownMenu_li1.innerText = "삭제";
                    reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");
                    
                    // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                    reivewTextDownMenu_li1.addEventListener("click", () => {
                
                        if(loginMemberNo == list.memberNo) {
    
                            if (confirm("정말 삭제 하시겠습니까?")){
                    
                                location.href = location.pathname + "/" + reviewNo + "/delete";
                        
                            }
                        } else{
                            alert("본인만 이용할 수 있습니다.");
                        }
                    });
    
                    // 드랍 다운 메뉴 이벤트 삽입
                    reviewTextDotStyle.addEventListener("click", () => {
                        reviewTextDotStyle.lastElementChild.style.display = "block";
                    });
    
                    reviewTextDotStyle.addEventListener("blur", () => {
                        setTimeout(()=>{
                            reviewTextDotStyle.lastElementChild.style.display = "none";
                        }, 10)
                    });
    
                    const reviewDetailPage = document.createElement("a");list
                    reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);
                        
                    const reviewTextDataTableStyle = document.createElement("span");
                    reviewTextDataTableStyle.classList.add("review-data-table-style");
                    
                    const reviewTextPoint = document.createElement("div");
                    reviewTextPoint.classList.add("review-point");
        
                    const rating = document.createElement("div");
                    rating.classList.add("rating");
                    rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                    +"<span class='fill' style='width:(84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";
    
                    const reviewTextTitle = document.createElement("div");
                    reviewTextTitle.classList.add("review-title");
        
                    reviewTextTitle.innerText = list.reviewTitle;
        
                    const reviewTextContent = document.createElement("div");
                    reviewTextContent.classList.add("review-content");

                    if(list.reviewContent != null) {
                        list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                    }
        
                    reviewTextContent.innerText = '\"' + list.reviewContent + '\"';
    
                    // 최종 부모인 <ul class="review-list" id="reviewContainer"></ul> 에 append
                    reviewListContainer.append(reviewTextColum);
    
                    // 사진이 없을 땐 밑에께 바로 실행
                    // A 리뷰 시작 태그인 reviewTextColum append
                    reviewTextColum.append(reviewTextHeaderStyle, reviewDetailPage);
    
    
                    // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                    reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                        
                    reviewTextDotStyle.append(reivewTextDotDownMenu);
                        
                    // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                    reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);
    
                    // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                    reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                        
                    // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                    reivewTextDotDownMenu.append(reivewTextDownMenu);
    
                    // A-0-2-0
                    reivewTextDownMenu.append(reivewTextDownMenu_li1);
                    
                    // A-0 번 완성
                                    
                    // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                    reviewDetailPage.append(reviewTextDataTableStyle);                
                    reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);
                    // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                    reviewTextPoint.append(rating);
                }
                    
            }
            
            if (ajaxReviewMoreList.length == 10){

                const moreButtonPlus = document.createElement("button");
                moreButtonPlus.classList.add("more-button");
                moreButtonPlus.setAttribute("id", "moreButton");
                moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
    
                reviewRowBoundCount += 10;
    
                moreButtonPlus.addEventListener("click", () => {
    
                    // 재귀함수 호출
                    reviewMoreReviewList();
                })
        
                reviewListContainer.append(moreButtonPlus);
            } else {
                reviewRowBoundCount = 0;
            }
        }
    })
}

// 여기까지 리뷰 비동기 테이블
// ----------------------------------------------------------------------------------------------------------------



// 프로필 페이지의 사진 버튼 눌렀을 때 사진만 있는 리뷰들 불러오는 비동기
const ImageReview = document.getElementById("ImageReview");

ImageReview.addEventListener("click", (e) => {

    window.scrollTo({ top: 0, behavior: "smooth" });

    $.ajax({
        url : "/profile/" + memberNo + "/ImageReview", 
        type : "GET",
        dataType : "JSON",
        success : (imageReviewList) => {

            const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";

            if (imageReviewList.length == 0){

                const reviewTextColum = document.createElement("div");
                reviewTextColum.classList.add("user-page-review-colums2");

                const reviewNoneContainner = document.createElement("div");
                reviewNoneContainner.classList.add("user-page-review-none-content");
    
                const reviewNoneContentTitle = document.createElement("div");
                reviewNoneContentTitle.classList.add("none-content-title");
                reviewNoneContentTitle.innerText = "리뷰 작성";
    
                const reviewNoneContent = document.createElement("div");
                reviewNoneContent.classList.add("none-content");
                reviewNoneContent.innerText = "사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!";
                
                reviewListContainer.append(reviewTextColum);

                reviewTextColum.append(reviewNoneContainner);

                reviewNoneContainner.append(reviewNoneContentTitle, reviewNoneContent);
                
            } else {
                
                for(let list of imageReviewList){

                    
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
                    reivewTextDownMenu_li1.innerText = "삭제";
                    reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");

                    // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                    reivewTextDownMenu_li1.addEventListener("click", () => {
                
                        if(loginMemberNo == list.memberNo) {

                            if (confirm("정말 삭제 하시겠습니까?")){
                    
                                location.href = location.pathname + "/" + reviewNo + "/delete";
                        
                            }
                        } else{
                            alert("본인만 이용할 수 있습니다.");
                        }
                    });

                    // 드랍 다운 메뉴 이벤트 삽입
                    reviewTextDotStyle.addEventListener("click", () => {
                        reviewTextDotStyle.lastElementChild.style.display = "block";
                    });

                    reviewTextDotStyle.addEventListener("blur", () => {
                        setTimeout(()=>{
                            reviewTextDotStyle.lastElementChild.style.display = "none";
                        }, 10)
                    });

                    const reviewDetailPage = document.createElement("a");
                    reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);
                    
                    const reviewTextDataTableStyle = document.createElement("span");
                    reviewTextDataTableStyle.classList.add("review-data-table-style");
                    
                    const reviewTextPoint = document.createElement("div");
                    reviewTextPoint.classList.add("review-point");
        
                    const rating = document.createElement("div");
                    rating.classList.add("rating");
                    rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                    +"<span class='fill' style='width:(84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";

                    const reviewTextTitle = document.createElement("div");
                    reviewTextTitle.classList.add("review-title");
        
                    reviewTextTitle.innerText = list.reviewTitle;
        
                    const reviewTextContent = document.createElement("div");
                    reviewTextContent.classList.add("review-content");

                    if(list.reviewContent != null) {
                        list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                    }
        
                    reviewTextContent.innerText = '\"' + list.reviewContent + '\"';

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
                        reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImagePath + list.reviewImgList[i].reviewImageOriginal);
                    
                        
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
                    reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewDetailPage);

                    // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                    reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                    
                    reviewTextDotStyle.append(reivewTextDotDownMenu);
                        
                    // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                    reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                    // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                    reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                        
                    // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                    reivewTextDotDownMenu.append(reivewTextDownMenu);

                    // A-0-2-0
                    reivewTextDownMenu.append(reivewTextDownMenu_li1);
                    
                    // A-0 번 완성
                                    
                    // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                    reviewDetailPage.append(reviewTextDataTableStyle);                
                    reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);
                    // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                    reviewTextPoint.append(rating);
                    
                    // 슬라이드 번호 초기화 작업
                    for(let j = 0; j < prev.length; j++) {
                        showSlides(0, prev[j]);
                    }
                }
                
                // 리뷰 길이가 10개 면 버튼 추가
                if (imageReviewList.length == 10){

                    const moreButtonPlus = document.createElement("button");
                    moreButtonPlus.classList.add("more-button");
                    moreButtonPlus.setAttribute("id", "moreButton");
                    moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
                    
                    reviewRowBoundCount += 10;

                    moreButtonPlus.addEventListener("click", () => {
                        imageMoreReviewList();
                    })

                    reviewListContainer.append(moreButtonPlus);
                    
                    
                    // 피드 리뷰 리스트가 길이가 10개이면 다음 10개를 열기 위한 더보기 버튼 추가
                    // 더보기 버튼 작동
                } else {
                    reviewRowBoundCount = 0;
                }  

            }
            
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }

    });

});

function imageMoreReviewList() {

    $.ajax({
        url : "/profile/" + memberNo + "/ajaxImageMoreList", 
        data : {"rowBoundCount" : reviewRowBoundCount},
        type : "GET",
        dataType : "JSON",
        success : (ajaxImageMoreList) => {

            // 이미지리스트 카운터용
            let i = 0;

            const moreButton = document.getElementById("moreButton");
            // 더보기 버튼 삭제
            moreButton.remove();

            const reviewListContainer = document.getElementById("reviewContainer");
            
            for(let list of ajaxImageMoreList){

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
                reivewTextDownMenu_li1.innerText = "삭제";
                reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");
                
                // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                reivewTextDownMenu_li1.addEventListener("click", () => {
                
                    if(loginMemberNo == list.memberNo) {

                        if (confirm("정말 삭제 하시겠습니까?")){
                
                            location.href = location.pathname + "/" + reviewNo + "/delete";
                    
                        }
                    } else{
                        alert("본인만 이용할 수 있습니다.");
                    }
                });
                
                // 드랍 다운 메뉴 이벤트 삽입
                reviewTextDotStyle.addEventListener("click", () => {
                    reviewTextDotStyle.lastElementChild.style.display = "block";
                });

                reviewTextDotStyle.addEventListener("blur", () => {
                    setTimeout(()=>{
                        reviewTextDotStyle.lastElementChild.style.display = "none";
                    }, 10)
                });

                const reviewDetailPage = document.createElement("a");
                reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);
                    
                const reviewTextDataTableStyle = document.createElement("span");
                reviewTextDataTableStyle.classList.add("review-data-table-style");
                
                const reviewTextPoint = document.createElement("div");
                reviewTextPoint.classList.add("review-point");
    
                const rating = document.createElement("div");
                rating.classList.add("rating");
                rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                +"<span class='fill' style='width:(84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";

                const reviewTextTitle = document.createElement("div");
                reviewTextTitle.classList.add("review-title");
    
                reviewTextTitle.innerText = list.reviewTitle;
    
                const reviewTextContent = document.createElement("div");
                reviewTextContent.classList.add("review-content");

                if(list.reviewContent != null) {
                    list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                }
    
                reviewTextContent.innerText = '\"' + list.reviewContent + '\"';

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
                    reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImagePath + list.reviewImgList[i].reviewImageOriginal);
                
                    
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
                reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewDetailPage);

                // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                    
                reviewTextDotStyle.append(reivewTextDotDownMenu);
                    
                // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);

                // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                    
                // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                reivewTextDotDownMenu.append(reivewTextDownMenu);

                // A-0-2-0
                reivewTextDownMenu.append(reivewTextDownMenu_li1);
                
                // A-0 번 완성
                                
                // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                reviewDetailPage.append(reviewTextDataTableStyle);                
                reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);

                // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                reviewTextPoint.append(rating);

                i++;
            }
            
            if (ajaxImageMoreList[i].reviewImgList.length == 10){

                const moreButtonPlus = document.createElement("button");
                moreButtonPlus.classList.add("more-button");
                moreButtonPlus.setAttribute("id", "moreButton");
                moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
    
                reviewRowBoundCount += 10;
    
                moreButtonPlus.addEventListener("click", () => {
    
                    // 재귀함수 호출
                    imageMoreReviewList();
                })
        
                reviewListContainer.append(moreButtonPlus);
            } else {
                reviewRowBoundCount = 0;
            }
        }
    })
}

// 사진 비동기 테이블 더보기 버튼 누르면 비동기로 추가하여 보여지기
// --------------------------------------------------------------------------------------------------

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

            const modalTitle = document.getElementById("modal-title");
            modalTitle.innerText = "팔로워 " + followMemberList.length + "명";

            for(let list of followMemberList) {
                
                const followTableLi = document.createElement("li");

                const followMemberLink = document.createElement("a");
                followMemberLink.setAttribute("href", "/profile/" + list.memberNo);


                const followTableImage = document.createElement("div");
                followTableImage.classList.add("follow-user-image");
                followTableImage.innerHTML = "<img src=" + list.profileImage + ">";

                const followTableUserInfo = document.createElement("div");
                followTableUserInfo.classList.add("follow-user-info");

                // 여기 조건문 추가
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
                                    alert("이미 팔로우한 인원입니다.");
                        
                                    clickFollow.classList.remove("followOn");
                                    
                                    clickFollow.classList.add("followOff");
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
                                    alert("이미 팔로우한 인원입니다.");
                                    
                                    clickFollow.classList.remove("followOn");
                                    
                                    clickFollow.classList.add("followOff");
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
                                    alert("이미 팔로우한 인원입니다.");
                                    
                                    clickFollow.classList.remove("followOn");
                                    
                                    clickFollow.classList.add("followOff");

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
                data : {"loginMemberNo" : loginMemberNo, "reviewPageMemberNo" : reviewMemberNo},
                type : "GET",
                success : (result) => {
    
                    // 팔로우 insert 성공 시
                    if (result > 0){
                        clickFollow.classList.remove("followOff");
                        
                        clickFollow.classList.add("followOn");
    
                        followCount.innerText = Number(followCount.innerText) + 1;
    
                        followCountArray();
    
                    } else{
                        alert("이미 팔로우한 인원입니다.");
                        
                        clickFollow.classList.remove("followOn");

                        clickFollow.classList.add("followOff");
                        
                    }
                },
                error : () => {
                    console.log("증가 에러");
                }
            })
        } else {
    
            $.ajax({
                url : "/unFollow",
                data : {"loginMemberNo" :loginMemberNo, "reviewPageMemberNo" : reviewMemberNo},
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

// 더보기 버튼 눌렀을 때 10개씩 리뷰 추가하기
const reviewMoreButton = document.getElementById("moreButton");

if (reviewMoreButton != null){

    reviewMoreButton.addEventListener("click", () => {
    
        reviewMoreList();
    })
}


const reviewMoreList = function(){

    $.ajax({
        url : "/profile/" + memberNo + "/reviewMoreList", 
        data : {"rowBoundCount" : reviewRowBoundCount},
        type : "GET",
        dataType : "JSON",
        success : (moreReviewList) => {

            const moreButton = document.getElementById("moreButton");
            // 더보기 버튼 삭제
            moreButton.remove();
    
            const reviewListContainer = document.getElementById("reviewContainer");
                
            for(let list of moreReviewList){
    
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
                reivewTextDownMenu_li1.innerText = "삭제";
                reivewTextDownMenu_li1.setAttribute("id", "reviewDelete");
                
                // 드랍 다운 메뉴 삭제 버튼에 이벤트 삽입
                reivewTextDownMenu_li1.addEventListener("click", () => {
            
                    if(loginMemberNo == list.memberNo) {

                        if (confirm("정말 삭제 하시겠습니까?")){
                
                            location.href = location.pathname + "/" + reviewNo + "/delete";
                    
                        }
                    } else{
                        alert("본인만 이용할 수 있습니다.");
                    }
                });

                // 드랍 다운 메뉴 이벤트 삽입
                reviewTextDotStyle.addEventListener("click", () => {
                    reviewTextDotStyle.lastElementChild.style.display = "block";
                });

                reviewTextDotStyle.addEventListener("blur", () => {
                    setTimeout(()=>{
                        reviewTextDotStyle.lastElementChild.style.display = "none";
                    }, 10)
                });

                const reviewDetailPage = document.createElement("a");
                reviewDetailPage.setAttribute("href","/place/detail/" +list.contenttypeid + "/" + list.contentid);

                const reviewTextDataTableStyle = document.createElement("span");
                reviewTextDataTableStyle.classList.add("review-data-table-style");
                
                const reviewTextPoint = document.createElement("div");
                reviewTextPoint.classList.add("review-point");
    
                const rating = document.createElement("div");
                rating.classList.add("rating");
                rating.innerHTML = "<span class='empty'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>"
                +"<span class='fill' style='width:(84.5 * (" + list.rating + " * 20) / 100)px;'>&#9679;&#9679;&#9679;&#9679;&#9679;</span>";
    
                const reviewTextTitle = document.createElement("div");
                reviewTextTitle.classList.add("review-title");
    
                reviewTextTitle.innerText = list.reviewTitle;
    
                const reviewTextContent = document.createElement("div");
                reviewTextContent.classList.add("review-content");

                if(list.reviewContent != null) {
                    list.reviewContent = list.reviewContent.replaceAll("&nbsp;", " ").replaceAll("<br>", "(\r\n|\n|\r|\n\r)");
                }
    
                reviewTextContent.innerText = '\"' + list.reviewContent + '\"';
    
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
                            reviewImageSlidePath.setAttribute("src", list.reviewImgList[i].reviewImagePath + list.reviewImgList[i].reviewImageOriginal);
                        
                            
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
                        reviewTextColum.append(reviewTextHeaderStyle, reviewImageSlideContainer, reviewDetailPage);
    
                } else {
                    // 사진이 없을 땐 밑에께 바로 실행
                    // A 리뷰 시작 태그인 reviewTextColum append
                    reviewTextColum.append(reviewTextHeaderStyle, reviewDetailPage);
    
                }
    
                // A-0 (A 리뷰 시작의 0번 인덱스 위치에 있는 태그 )의 append
                reviewTextHeaderStyle.append(reviewTextHeaderLayout, reviewTextDotStyle);
                        
                reviewTextDotStyle.append(reivewTextDotDownMenu);
                    
                // A-0-0 (A 리뷰 0번 위치의 0번 위치에 있는 태그)
                reviewTextHeaderLayout.append(reviewTextUserImage, reviewTextInfoLayout);
    
                // A-0-0-1 (A 리뷰 0번 위치의 0번 위치의 1번 위치에 있는 태그)
                reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);
                    
                // A-0-2 (A 리뷰 0번 위치의 2번 위치에 있는 태그)
                reivewTextDotDownMenu.append(reivewTextDownMenu);
    
                // A-0-2-0
                reivewTextDownMenu.append(reivewTextDownMenu_li1);
                
                // A-0 번 완성
                                
                // A-1 (A 리뷰 시작의 1번 인덱스 위치에 있는 태그 )의 append
                reviewDetailPage.append(reviewTextDataTableStyle);                
                reviewTextDataTableStyle.append(reviewTextPoint, reviewTextTitle, reviewTextContent);
    
                // A-1-0 (A 리뷰 1번 위치의 0번 위치에 있는 태그)
                reviewTextPoint.append(rating);
    
            }
    
            if (moreReviewList.length == 10){

                const moreButtonPlus = document.createElement("button");
                moreButtonPlus.classList.add("more-button");
                moreButtonPlus.setAttribute("id", "moreButton");
                moreButtonPlus.innerHTML = "더보기<i class='fa-solid fa-chevron-down'></i>";
    
                reviewRowBoundCount += 10;
    
                moreButtonPlus.addEventListener("click", () => {
    
                    reviewMoreList();
                })
        
                reviewListContainer.append(moreButtonPlus);
            } else {
                reviewRowBoundCount = 0;
            }
        },
        error : () => {
            console.log("리뷰 리스트 불러오기 실패");
        }
    
    });
}

// 프로필 이미지 수정

const profileImage = document.getElementById("profile-image");
const imageInput = document.getElementById("image-input");
const profileForm = document.getElementById("profileForm");

let initCheck;

// (0 : 초기값(취소) / 1 : 새 이미지 업로드)
let deleteCheck = 0;

const originalImage = profileImage.getAttribute("src");

if(imageInput != null){

    if(profileImage.getAttribute("src") == "/resources/images/common/profile.png"){
        // 기본 이미지인 경우
        initCheck = false;
    } else {
        initCheck = true;
    }

    imageInput.addEventListener("change", e => {

        console.log(e.target.files);
        console.log(e.target.files[0]);

        if(e.target.files[0] != undefined){

            const profileImage = new FileReader();

            profileImage.readAsDataURL(e.target.files[0]);


            profileImage.onload = event => {

                profileImage.setAttribute("src", event.target.result);

                deleteCheck = 1;
            }

        } else {
            
            profileImage.setAttribute("src", originalImage);
            
            deleteCheck = 0;
        }
        
        profileForm.submit(profileImage);
        
    });
}

const reviewDelteBtn = document.getElementsByClassName("down-menu");

for (let Btn of reviewDelteBtn){

    Btn.childNodes[1].addEventListener("click", () => {
    
        const reviewNo = Btn.childNodes[1].getAttribute("var");

        if(loginMemberNo == reviewMemberNo) {

            if (confirm("정말 삭제 하시겠습니까?")){
    
                location.href = location.pathname + "/" + reviewNo + "/delete";
        
            }
        } else{
            alert("본인만 이용할 수 있습니다.");
        }

    });
}