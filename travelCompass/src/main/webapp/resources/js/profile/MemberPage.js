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

const dotmenu = document.getElementsByClassName("user-page-review-dot-style");

for(let item of dotmenu){
    item.addEventListener("click", function(){
        item.nextElementSibling.style.display = "inline-block";
    });
    item.nextElementSibling.addEventListener("click", function(){
        item.nextElementSibling.style.display = "none";
    });
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

// 비동기 리뷰 테이블 작성 (사진 없는 테이블)

const reviewTextColum = document.createElement("div");
reviewTextColum.classList.add("user-page-review-colums2");

    const reviewTextHeaderStyle = document.createElement("div");
    reviewTextHeaderStyle.classList.add("user-page-review-header-style");

        const reviewTextHeaderLayout = document.createElement("div");
        reviewTextHeaderLayout.classList.add("user-page-review-header-layout");

            const reviewTextUserImage = document.createElement("a");
            reviewTextUserImage.classList.add("review-user-image");

            reviewTextUserImage.innerHTML = "<img src=''>";

            const reviewTextInfoLayout = document.createElement("div");
            reviewTextInfoLayout.classList.add("review-user-info-layout");

                const reviewInfoNickname = document.createElement("span");
                reviewInfoNickname.classList.add("review-user-nickname");

                reviewInfoNickname.innerHTML = "<a href='#'>유저닉네임</a>님이 리뷰를 작성했습니다."

                    const reviewInfoDateLink = document.createElement("a");
                    reviewInfoDateLink.classList.add("review-user-dday");

                    reviewInfoDateLink.innerText = "0000년 0월";
                    
        const reviewTextDotStyle = document.createElement("div");
        reviewTextDotStyle.classList.add("user-page-review-dot-style");

        const reivewTextDotDownMenu = document.createElement("div");
        reivewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");

            const reivewTextDownMenu = document.createElement("ul");
            reivewTextDownMenu.classList.add("down-menu");

                const reivewTextDownMenu_li1 = document.createElement("li");
                    
                    const  reivewTextDownMenu_li1_a = document.createElement("a");

                    reivewTextDownMenu_li1_a.innerText = "수정";
                    
                const reivewTextDownMenu_li2 = document.createElement("li");
                    
                    const  reivewTextDownMenu_li2_a = document.createElement("a");

                    reivewTextDownMenu_li2_a.innerText = "삭제";
                    
        const reviewTextDataTableStyle = document.createElement("div");
        reviewTextDataTableStyle.classList.add("review-date-table-style");

            const reviewTextPoint = document.createElement("div");

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

            reviewTextTitle.innerText = "리뷰 제목";

            const reviewTextContent = document.createElement("div");
            reviewTextContent.classList.add("review-content");

            reviewTextContent.innerText = "내용";

            const reviewTextDte = document.createElement("div");
            reviewTextDte.classList.add("review-date");

                const reviewText_RDT = document.createElement("span");
                reviewText_RDT.classList.add("rdt");

                reviewText_RDT.innerText = "방문날짜 :";

            reviewTextDte.innerText = "0000년 00월";

        const reviewTextNaviStyle = document.createElement("div");
        reviewTextNaviStyle.classList.add("review-navi-style");

            const reviewTextNaviLayout = document.createElement("div");
            reviewTextNaviLayout.classList.add("review-navi-layout");

                const reviewTextNaviImage = document.createElement("a");
                reviewTextNaviImage.classList.add("review_navi_left");
                reviewTextNaviImage.innerHTML = "<div><img src='/resources/images/profile/venis.webp'></div>";
                
                    const reviewTextNaviTitle = document.createElement("div");
                    reviewTextNaviTitle.classList.add("review_navi_title");
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

            const  reviewTextSaceButton = document.createElement("div");
            reviewTextSaceButton.classList.add("save-button");
            reviewTextSaceButton.innerHTML= "<i class='fa-solid fa-heart'></i>저장";

            const reviewTextShareButton = document.createElement("div");
            reviewTextShareButton.classList.add("share-button");
            reviewTextShareButton.innerHTML = "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";

// --------------------------------------------------------------------------------------------

// 비동기사진 리뷰 테이블 작성


const reviewImageColum = document.createElement("div");
reviewImageColum.classList.add("user-page-review-colums2");

    const reviewImageHeaderStyle = document.createElement("div");
    reviewImageHeaderStyle.classList.add("user-page-review-header-style");

        const reviewImageHeaderLayout = document.createElement("div");
        reviewImageHeaderLayout.classList.add("user-page-review-header-layout");

            const reviewImageUserImage = document.createElement("a");
            reviewImageUserImage.classList.add("review-user-image");

            reviewImageUserImage.innerHTML = "<img src=''>";

            const reviewImageInfoLayout = document.createElement("div");
            reviewImageInfoLayout.classList.add("review-user-info-layout");

                const reviewImageInfoNickname = document.createElement("span");
                reviewImageInfoNickname.classList.add("review-user-nickname");

                reviewImageInfoNickname.innerHTML = "<a href='#'>유저닉네임</a>님이 리뷰를 작성했습니다."

                    const reviewImageInfoDateLink = document.createElement("a");
                    reviewImageInfoDateLink.classList.add("review-user-dday");

                    reviewImageInfoDateLink.innerText = "0000년 0월";
                    
        const reviewImageDotStyle = document.createElement("div");
        reviewTextDotStyle.classList.add("user-page-review-dot-style");

        const reivewImageDotDownMenu = document.createElement("div");
        reivewImageDotDownMenu.classList.add("user-page-review-dot-down-menu");

            const reivewImageDownMenu = document.createElement("ul");
            reivewImageDownMenu.classList.add("down-menu");

                const reivewImageDownMenu_li1 = document.createElement("li");
                    
                    const  reivewImageDownMenu_li1_a = document.createElement("a");

                    reivewImageDownMenu_li1_a.innerText = "수정";
                    
                const reivewImageDownMenu_li2 = document.createElement("li");
                    
                    const  reivewImageDownMenu_li2_a = document.createElement("a");

                    reivewImageDownMenu_li2_a.innerText = "삭제";

        /* 사진 슬라이드 비동기 테이블 작성 위치 */

        


        const reviewImageDataTableStyle = document.createElement("div");
        reviewImageDataTableStyle.classList.add("review-date-table-style");

            const reviewImagePoint = document.createElement("div");

                const reviewImage_span1 = document.createElement("span");
                reviewImage_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";

                const reviewImage_span2 = document.createElement("span");
                reviewImage_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const reviewImage_span3 = document.createElement("span");
                reviewImage_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const reviewImage_span4 = document.createElement("span");
                reviewImage_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const reviewImage_span5 = document.createElement("span");
                reviewImage_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

            const reviewImageTitle = document.createElement("div");
            reviewImageTitle.classList.add("review-title");

            reviewImageTitle.innerText = "리뷰 제목";

            const reviewImageContent = document.createElement("div");
            reviewImageContent.classList.add("review-content");

            reviewImageContent.innerText = "내용";

            const reviewImageDate = document.createElement("div");
            reviewImageDate.classList.add("review-date");

                const reviewImage_RDT = document.createElement("span");
                reviewImage_RDT.classList.add("rdt");

                reviewImage_RDT.innerText = "방문날짜 :";

            reviewImageDate.innerText = "0000년 00월";

        const reviewImageNaviStyle = document.createElement("div");
        reviewImageNaviStyle.classList.add("review-navi-style");

            const reviewImageNaviLayout = document.createElement("div");
            reviewImageNaviLayout.classList.add("review-navi-layout");

                const reviewImageNaviImage = document.createElement("a");
                reviewImageNaviImage.classList.add("review_navi_left");
                reviewImageNaviImage.innerHTML = "<div><img src='/resources/images/profile/venis.webp'></div>";
                
                    const reviewImageNaviTitle = document.createElement("div");
                    reviewImageNaviTitle.classList.add("review_navi_title");
                    reviewImageNaviTitle.innerHTML = "<div>위치정보 제목</div>";

                        const reviewImageNaviDeep = document.createElement("div");
                        reviewImageNaviDeep.classList.add("review-navi-deep");

                            const reviewImageNaviDeepPoint = document.createElement("div");
                            reviewImageNaviDeepPoint.classList.add("review-navi-deep-point");

                                const reviewImageNavi_span1 = document.createElement("span");
                                reviewImageNavi_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                                const reviewImageNavi_span2 = document.createElement("span");
                                reviewImageNavi_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                                
                                const reviewImageNavi_span3 = document.createElement("span");
                                reviewImageNavi_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                                
                                const reviewImageNavi_span4 = document.createElement("span");
                                reviewImageNavi_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                                
                                const reviewImageNavi_span5 = document.createElement("span");
                                reviewImageNavi_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                            const reviewImageNaviCount = document.createElement("div");
                            reviewImageNaviCount.innerText = "00건의 리뷰";
                        
                        const reviewImageNavi = document.createElement("div");
                        reviewImageNavi.innerText = "배니스, 이탈리아";

                const reviewImageNaviLike = document.createElement("div");
                reviewImageNaviLike.classList.add("review-navi-right");
                reviewImageNaviLike.innerHTML = "<i class='fa-solid fa-heart'></i>";

        const reviewImageSupport = document.createElement("div");
        reviewImageSupport.classList.add("review-support");

        const reviewImageBottomMenu = document.createElement("div");
        reviewImageBottomMenu.classList.add("review-bottom-menu-style");

            const reviewImageSuportButton = document.createElement("div");
            reviewImageSuportButton.classList.add("suport-button");
            reviewImageSuportButton.innerHTML = "<i class='fa-regular fa-thumbs-up'></i>도움이 됨";

            const  reviewImageSaceButton = document.createElement("div");
            reviewImageSaceButton.classList.add("save-button");
            reviewImageSaceButton.innerHTML= "<i class='fa-solid fa-heart'></i>저장";

            const reviewImageShareButton = document.createElement("div");
            reviewImageShareButton.classList.add("share-button");
            reviewImageShareButton.innerHTML = "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";


// -------------------------------------------------------------------------------------------------------

// 프로필 페이지의 리뷰 a태그
const Review = document.getElementById("Review");

Review.addEventListener("click", (e) => {
    $.ajax({
        url : "/profile/" + memberNo + "/Review", 
        type : "GET",
        dataType : "JSON",
        success : (reviewList) => {

            const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";
            
            for(let list of reviewList){

                if (list != ""){

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
                                        
                            const reviewTextDotStyle = document.createElement("div");
                            reviewTextDotStyle.classList.add("user-page-review-dot-style");
                            reviewTextDotStyle.innerHTML= "<i class='fa-solid fa-ellipsis' ></i>";
                    
                            const reivewTextDotDownMenu = document.createElement("div");
                            reivewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");
                    
                                const reivewTextDownMenu = document.createElement("ul");
                                reivewTextDownMenu.classList.add("down-menu");
                    
                                    const reivewTextDownMenu_li1 = document.createElement("li");
                                    reivewTextDownMenu_li1.innerHTML = "<li><a href='아직 미정'>수정</a></li>";
                                    
                                    const reivewTextDownMenu_li2 = document.createElement("li");
                                    reivewTextDownMenu_li2.innerHTML = "<li><a href='아직 미정'>삭제</a></li>";
                                        
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

                                // 슬라이드 if문 위치 여기 예상합니다.

                                // 슬라이드 검사해서 추가

                                // 슬라이드 조립 시작
                                    console.log(list.imageList.isEmpty());
                                if (list.imageList != ""){
                                    console.log(list.imageList);

                                    const reviewImageSlideContainer = document.createElement("div");
                                    reviewImageSlideContainer.classList.add("slide-container-style");
                                    
                                        const reviewImageSlide = document.createElement("div");
                                        reviewImageSlide.classList.add("slide", "fade");

                                        for(let i = 0 ; i < list.ImageList.size(); i++){

                                            const reviewImageSlideNumber = document.createElement("div");
                                            reviewImageSlideNumber.classList.add("numbertext");
                                            reviewImageSlideNumber.innerHTML = "${"+ i + "+1} / ${fn:length(reviewList.reviewImgList)}";
                                        
                                            const reviewImageSlidePath = document.createElement("img");
                                            reviewImageSlidePath.setAttribute("src", "${reviewList.reviewImgList[" + i + "].reviewImgPath}${reviewList.reviewImgList[" + i + "].reviewImgOriginal}");
                                        
                                            
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
        error : console.log("에러")


    })
})
        

/*  무한 스크롤 이벤트
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    }
}

*/
