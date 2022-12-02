/* ----------------------------- 리뷰 ----------------------------------- */

// 리뷰 목록 조회(AJAX)
function selectReview() {
  $.ajax({
    url: "selectReview",
    data: {
      contentid: contentid,
    },
  });
}

/* 리뷰 작성 등록 */
const addReview = document.getElementById("addReview");
const reviewTitle = document.getElementById("reviewTitle");
const reviewContent = document.getElementById("reviewContent");

addReview.addEventListener("click", () => {
  // 로그인 확인
  if (memberNo == "") {
    // 로그인X
    if (confirm("로그인하시겠습니까?")) {
      location.href = "/member/login";
    } else {
      // alert("로그인 후 이용해주세요");
    }
    return;
  }

  if (reviewTitle.value.trim().length == 0) {
    alert("제목을 입력해주세요");
    reviewTitle.focus();

    return;
  }

  if (reviewContent.value.trim().length == 0) {
    alert("내용을 입력해주세요");
    reviewContent.focus();

    return;
  }

  // 비동기화 리뷰 작성(등록)
  $.ajax({
    url: "/insertReview",
    data: {
      rating: document.querySelector('input[name="gender"]:checked').value,
      reviewTitle: reviewTitle.value,
      reviewContent: reviewContent.value,
      memberNo: memberNo,
      contentid: contentid,
      firstimage: firstimage,
    },
    type: "post",
    success: (result) => {
      if (result > 0) {
        //댓글 등록 성공
        reviewTitle.value = "";
        reviewContent.value = "";

        selectReview(); // 비동기 리뷰 목록 조회 함수 호출
        // -> 새로운 리뷰 추가
      } else {
        // 실패
        alert("리뷰 등록에 실패했습니다");
      }
    },

    error: function (req, status, error) {
      console.log("리뷰 등록 에러");
    },
  });
});

/* ====================================================================================== */

const reviewListContainer = document.getElementById("reviewContainer");
            reviewListContainer.innerHTML = "";

            if (reviewList.length == 0){

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
                    for(let i = 0; i < prev.length; i++) {
                        showSlides(0, prev[i]);
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

                                    
                    