/* ------------------------------ 스크랩 --------------------------------- */
const placeScrap = document.getElementById("placeScrap");
placeScrap.addEventListener("click", (e) => {
  if (memberNo == "") {
    alert("로그인 후 이용해주세요");
    return;
  }
  // 로그인 상태이면서 스크랩 상태가 아닌 경우
  if (e.target.classList.contains("fa-regular")) {
    // 빈 모양일때
    $.ajax({
      url: "/place/scrap",
      data: {
        contentid: contentid,
        contenttypeid: contenttypeid,
        memberNo: memberNo,
        firstimage: firstimage,
        addr1: addr1,
        mapx: mapx,
        mapy: mapy,
      },
      type: "GET",
      success: (result) => {
        if (result > 0) {
          // 성공
          e.target.classList.remove("fa-regular"); // 빈 스크랩 클래스 삭제
          e.target.classList.add("fa-solid"); // 꽉 찬 스크랩 클래스 추가
        } else {
          // 실패
          console.log("스크랩 실패");
        }
      },
      error: () => {
        console.log("스크랩 에러");
      },
    });
  } else {
    // 로그인 상태이면서 스크랩 상태인 경우
    if (confirm("정말 스크랩을 취소할까요?")) {
      $.ajax({
        url: "/place/scrapCancel",
        data: { contentid: contentid, memberNo: memberNo },
        type: "GET",
        success: (result) => {
          if (result > 0) {
            // 성공
            e.target.classList.remove("fa-solid");
            e.target.classList.add("fa-regular");
          } else {
            // 실패
            console.log("스크랩 취소 실패");
          }
        },
        error: () => {
          console.log("스크랩 취소 에러");
        },
      });
    }
  }
});

/* ------------------------------- 지도 -----------------------------------*/
// 카카오 지도 api js
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(mapy, mapx), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(mapy, mapx);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
// map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

/* ----------------------------- 리뷰 ----------------------------------- */
//별점 마킹 모듈 프로토타입으로 생성
function Rating() {}
Rating.prototype.rate = 0;
Rating.prototype.setRate = function (newrate) {
  //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
  this.rate = newrate;
  let items = document.querySelectorAll(".rate_radio");
  items.forEach(function (item, idx) {
    if (idx < newrate) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
};
let rating = new Rating(); //별점 인스턴스 생성

document.addEventListener("DOMContentLoaded", function () {
  //별점선택 이벤트 리스너
  document.querySelector(".rating").addEventListener("click", function (e) {
    let elem = e.target;
    if (elem.classList.contains("rate_radio")) {
      rating.setRate(parseInt(elem.value));
    }
  });
});

//상품평 작성 글자수 초과 체크 이벤트 리스너
document
  .querySelector(".review_textarea")
  .addEventListener("keydown", function () {
    //리뷰 400자 초과 안되게 자동 자름
    let review = document.querySelector(".review_textarea");
    let lengthCheckEx = /^.{400,}$/;
    if (lengthCheckEx.test(review.value)) {
      //400자 초과 컷
      review.value = review.value.substr(0, 400);
    }
  });

//저장 전송전 필드 체크 이벤트 리스너
document.querySelector("#rate").addEventListener("click", function (e) {
  //별점 선택 안했으면 메시지 표시
  if (rating.rate == 0) {
    rating.showMessage("rate");
    return false;
  }
  //리뷰 5자 미만이면 메시지 표시
  if (document.querySelector(".review_textarea").value.length < 5) {
    rating.showMessage("review");
    return false;
  }
  //폼 서밋
});

Rating.prototype.showMessage = function (type) {
  //경고메시지 표시
  switch (type) {
    case "rate":
      //안내메시지 표시
      document.querySelector(".review_rating .warning_msg").style.display =
        "block";
      //지정된 시간 후 안내 메시지 감춤
      setTimeout(function () {
        document.querySelector(".review_rating .warning_msg").style.display =
          "none";
      }, 1000);
      break;
    case "review":
      //안내메시지 표시
      document.querySelector(".review_contents .warning_msg").style.display =
        "block";
      //지정된 시간 후 안내 메시지 감춤
      setTimeout(function () {
        document.querySelector(".review_contents .warning_msg").style.display =
          "none";
      }, 1000);
      break;
  }
};

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
const reviewContent = document.getElementById("revivewContent");

addReview.addEventListener("click", () => {
  // 로그인 확인
  if (memberNo == "") {
    // 로그인X
    if (confirm("로그인하시겠습니까?")) {
      location.href = "/member/login";
    } else {
      alert("로그인 후 이용해주세요");
    }

    return;
  }

  //별점 선택 안했으면 메시지 표시
  if (rating.rate == 0) {
    rating.showMessage("rate");
    rating.focus();
    return false;
  }
  //리뷰 5자 미만이면 메시지 표시
  if (document.querySelector(".review_textarea").value.length < 5) {
    rating.showMessage("review");
    reviewContent.focus();
    return false;
  }

  // 비동기화 리뷰 DB 등록
  $.ajax({
    url: "/insertReview",
    data: {
      memberNo: memberNo,
      reviewTitle: reviewTitle.value,
      reivewContent: reviewContent.value,
      contentid: contentid,
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

// 리뷰 테이블
// 비동기 리뷰 테이블 작성 (사진 없는 테이블)

const reviewTextColum = document.createElement("div");
reviewTextColum.classList.add("user-page-review-colums2");

const reviewTextHeaderStyle = document.createElement("div");
reviewTextHeaderStyle.classList.add("user-page-review-header-style");

const reviewTextHeaderLayout = document.createElement("div");
reviewTextHeaderLayout.classList.add("user-page-review-header-layout");

const reviewTextUserImage = document.createElement("a");
reviewTextUserImage.classList.add("review-user-image");

reviewTextUserImage.innerHTML = "<img src='${loginMember.profileImage}'>";

const reviewTextInfoLayout = document.createElement("div");
reviewTextInfoLayout.classList.add("review-user-info-layout");

const reviewInfoNickname = document.createElement("span");
reviewInfoNickname.classList.add("review-user-nickname");

reviewInfoNickname.innerHTML =
  "<a href='#'>유저닉네임</a>님이 리뷰를 작성했습니다.";

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

const reivewTextDownMenu_li1_a = document.createElement("a");

reivewTextDownMenu_li1_a.innerText = "수정";

const reivewTextDownMenu_li2 = document.createElement("li");

const reivewTextDownMenu_li2_a = document.createElement("a");

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
reviewTextNaviImage.innerHTML =
  "<div><img src='/resources/images/profile/venis.webp'></div>";

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
reviewTextSuportButton.innerHTML =
  "<i class='fa-regular fa-thumbs-up'></i>도움이 됨";

const reviewTextSaceButton = document.createElement("div");
reviewTextSaceButton.classList.add("save-button");
reviewTextSaceButton.innerHTML = "<i class='fa-solid fa-heart'></i>저장";

const reviewTextShareButton = document.createElement("div");
reviewTextShareButton.classList.add("share-button");
reviewTextShareButton.innerHTML =
  "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";

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

reviewImageUserImage.innerHTML = "<img src='${loginMember.profileImage}'>";

const reviewImageInfoLayout = document.createElement("div");
reviewImageInfoLayout.classList.add("review-user-info-layout");

const reviewImageInfoNickname = document.createElement("span");
reviewImageInfoNickname.classList.add("review-user-nickname");

reviewImageInfoNickname.innerHTML =
  "<a href='#'>유저닉네임</a>님이 리뷰를 작성했습니다.";

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

const reivewImageDownMenu_li1_a = document.createElement("a");

reivewImageDownMenu_li1_a.innerText = "수정";

const reivewImageDownMenu_li2 = document.createElement("li");

const reivewImageDownMenu_li2_a = document.createElement("a");

reivewImageDownMenu_li2_a.innerText = "삭제";

/* 사진 슬라이드 비동기 테이블 작성 위치 */
const reviewImageSlideContainer = document.createElement("div");
reviewImageSlideContainer.classList.add("slide-container-style");

const reviewImageSlide = document.createElement("div");
reviewImageSlide.classList.add("slide", "fade");

const reviewImageNumber = document.createElement("div");
reviewImageNumber.classList.add("numbertext");

const reviewImageSlideImage = document.createElement("img");

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
reviewImageNaviImage.innerHTML =
  "<div><img src='/resources/images/profile/venis.webp'></div>";

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
reviewImageSuportButton.innerHTML =
  "<i class='fa-regular fa-thumbs-up'></i>도움이 됨";

const reviewImageSaceButton = document.createElement("div");
reviewImageSaceButton.classList.add("save-button");
reviewImageSaceButton.innerHTML = "<i class='fa-solid fa-heart'></i>저장";

const reviewImageShareButton = document.createElement("div");
reviewImageShareButton.classList.add("share-button");
reviewImageShareButton.innerHTML =
  "<i class='fa-solid fa-arrow-up-from-bracket'></i>공유";
