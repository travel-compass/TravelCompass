/* 리뷰 작성 등록 */
const addReview = document.getElementById("addReview");
const reviewTitle = document.getElementById("reviewTitle");
const reviewContent = document.getElementById("reviewContent");

const submitReview = document.getElementById("reviewform");

addReview.addEventListener("click", () => {
  // console.log("비동기 리뷰 작성");
  // 로그인 확인
  if (loginMemberNo == "") {
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
    url: "/review/insert",
    data: {
      rating: document.querySelector('input[name="rating"]:checked').value,
      reviewTitle: reviewTitle.value,
      reviewContent: reviewContent.value,
      memberNo: loginMemberNo,
      contentid: contentid,
      contenttypeid: contenttypeid,
    },
    type: "post",
    success: (result) => {
      // console.log("작성 성공");
      if (result > 0) {
        //댓글 등록 성공
        reviewTitle.value = "";
        reviewContent.value = "";

        selectReviewList(); // 비동기 리뷰 목록 조회 함수 호출
        // -> 새로운 리뷰 추가
      } else {
        // 실패
        alert("리뷰 등록에 실패했습니다");
      }
    },

    error: function (req, status, error) {
      // console.log("리뷰 등록 에러");
    },
  });
});

// 프로필 페이지의 피드 버튼 눌렀을 때 사진 유무의 리뷰들 불러오는 비동기

function selectReviewList(e) {
  $.ajax({
    url: "/review/list",
    type: "get",
    data: {
      contentid: contentid,
    },
    dataType: "JSON",
    success: (reviewMap) => {
      // console.log(reviewMap);
      const ulreviewList = document.getElementById("review-list");
      ulreviewList.innerHTML = "";

      for (let review of reviewMap.reviewList) {
        const reviewTextColum = document.createElement("li");
        reviewTextColum.classList.add("user-page-review-colums2");

        const reviewTextHeaderStyle = document.createElement("div");
        reviewTextHeaderStyle.classList.add("user-page-review-header-style");

        const reviewTextHeaderLayout = document.createElement("div");
        reviewTextHeaderLayout.classList.add("user-page-review-header-layout");

        reviewTextHeaderStyle.append(reviewTextHeaderLayout);

        const reviewTextUserImage = document.createElement("a");
        reviewTextUserImage.classList.add("review-user-image");

        reviewTextUserImage.innerHTML =
          '<img src="' + review.profileImage + '">';

        const reviewTextInfoLayout = document.createElement("div");
        reviewTextInfoLayout.classList.add("review-user-info-layout");

        const reviewInfoNickname = document.createElement("span");
        reviewInfoNickname.classList.add("review-user-nickname");

        reviewInfoNickname.innerHTML =
          "<a href='#'>" + review.memberNickname + "</a>";

        const reviewInfoDateLink = document.createElement("a");
        reviewInfoDateLink.classList.add("review-user-dday");

        reviewInfoDateLink.innerText = review.reviewDate;
        //
        const reviewTextDotStyle = document.createElement("button");
        reviewTextDotStyle.classList.add("user-page-review-dot-style");
        reviewTextDotStyle.innerHTML = "<i class='fa-solid fa-ellipsis' ></i>";

        const reviewTextDotDownMenu = document.createElement("div");
        reviewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");

        const reviewTextDownMenu = document.createElement("ul");
        reviewTextDownMenu.classList.add("down-menu");

        const reviewTextDownMenu_li1 = document.createElement("li");
        reviewTextDownMenu_li1.innerText = "수정";

        const reviewTextDownMenu_li2 = document.createElement("li");
        reviewTextDownMenu_li2.innerText = "삭제";
        reviewTextDownMenu_li2.setAttribute(
          "onclick",
          `deleteReview(${review.reviewNo})`
        );
        //
        // 드랍 다운 메뉴 이벤트 삽입
        reviewTextDotStyle.addEventListener("click", () => {
          reviewTextDotStyle.nextElementSibling.style.display = "block";
        });
        // reviewTextDotStyle.addEventListener("blur", () => {
        //   reviewTextDotStyle.nextElementSibling.style.display = "none";
        // });

        const reviewArea = document.createElement("div");
        reviewArea.classList.add("review-area");

        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("review-container");

        const rating = document.createElement("div");
        rating.classList.add("rating");

        const empty = document.createElement("span");
        empty.classList.add("empty");
        empty.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";

        const fill = document.createElement("span");
        fill.classList.add("fill");
        fill.style.width = (69 * (review.rating * 20)) / 100 + "px";
        fill.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";

        const reviewTextTitle = document.createElement("div");
        reviewTextTitle.classList.add("review-title");

        reviewTextTitle.innerText = review.reviewTitle;
        // XSS 방지 처리 해제
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&amp;", "&");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&lt;", "<");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&gt;", ">");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll(
          "&quot;",
          '"'
        );

        // 개행문자 처리 해제
        reviewTextTitle.innerText = review.reviewTitle
          .replaceAll("<br>", "\n")
          .replaceAll("&nbsp;", " ");

        const reviewTextContent = document.createElement("div");
        reviewTextContent.classList.add("review-content");

        reviewTextContent.innerText = '"' + review.reviewContent + '"';

        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&amp;",
          "&"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&lt;",
          "<"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&gt;",
          ">"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&quot;",
          '"'
        );

        // 개행문자 처리 해제
        reviewTextContent.innerText = review.reviewContent
          .replaceAll("<br>", "\n")
          .replaceAll("&nbsp;", " ");

        const reviewTextSupport = document.createElement("div");
        reviewTextSupport.classList.add("review-support");

        const reviewTextBottomMenu = document.createElement("div");
        reviewTextBottomMenu.classList.add("review-bottom-menu-style");

        const reviewTextSaveButton = document.createElement("div");
        reviewTextSaveButton.classList.add("save-button");
        if (review.likeCheck == 0) {
          reviewTextSaveButton.innerHTML =
            "<i class='fa-regular fa-heart'></i>좋아요";
        } else {
          reviewTextSaveButton.innerHTML =
            "<i class='fa-solid fa-heart'></i>좋아요";
        }
        reviewTextSaveButton.setAttribute(
          "onclick",
          `reviewLike(${review.reviewNo},${review.memberNo},${loginMemberNo},${this})`
        );

        const likeCount = document.createElement("span");
        likeCount.classList.add("likeCount");
        likeCount.innerText = review.reviewLike;

        const reviewTextShareButton = document.createElement("div");
        reviewTextShareButton.classList.add("share-button");
        reviewTextShareButton.innerHTML =
          "<i class='fa-solid fa-arrow-up-from-bracket'></i>신고";
        reviewTextShareButton.setAttribute(
          "onclick",
          `reviewLike(${review.reviewNo},${review.memberNo},${loginMemberNo})`
        );

        ulreviewList.append(reviewTextColum);

        reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);

        reviewTextHeaderLayout.append(
          reviewTextUserImage,
          reviewTextInfoLayout
        );

        reviewTextDotDownMenu.append(reviewTextDownMenu);

        reviewTextDownMenu.append(
          reviewTextDownMenu_li1,
          reviewTextDownMenu_li2
        );

        reviewArea.append(reviewContainer);

        reviewContainer.append(rating);

        rating.append(empty, fill);

        if (loginMemberNo == review.memberNo) {
          reviewTextHeaderStyle.append(
            reviewTextHeaderLayout,
            reviewTextDotStyle,
            reviewTextDotDownMenu
          );
        } else {
          reviewTextHeaderStyle.append(reviewTextHeaderLayout);
        }

        reviewTextSaveButton.append(likeCount);

        reviewTextBottomMenu.append(
          reviewTextSaveButton,
          reviewTextShareButton
        );

        reviewTextColum.append(
          reviewTextHeaderStyle,
          reviewArea,
          reviewTextTitle,
          reviewTextContent,
          reviewTextSupport,
          reviewTextBottomMenu
        );

        // reviewRight.append(reviewTextColum);
      }
    },
    error: () => {
      // console.log("리뷰 리스트 불러오기 실패");
    },
  });
}

/* 리뷰 수정 삭제 버튼 */
// 클릭 이벤트로 실행 하기

// 드랍 다운 메뉴 이벤트
const dropDownMenu = document.getElementsByClassName(
  "user-page-review-dot-style"
);

for (let BTNList of dropDownMenu) {
  BTNList.addEventListener("click", () => {
    if (loginMemberNo == "") {
      // 로그인X
      if (confirm("로그인하시겠습니까?")) {
        location.href = "/member/login";
      }
      return;
    } else {
      BTNList.nextElementSibling.style.display = "block";
    }
  });
}

// for (let BTNList of dropDownMenu) {
//   BTNList.nextElementSibling.addEventListener("blur", () => {
//     setTimeout(() => {
//       BTNList.nextElementSibling.style.display = "none";
//     }, 1);
//   });
// }

document.addEventListener("click", (e) => {
  const list = document.querySelectorAll(
    ".user-page-review-dot-style, .user-page-review-dot-style *, .user-page-review-dot-down-menu, .user-page-review-dot-down-menu *"
  );

  let flag = true;

  for (let item of list) {
    if (e.target == item) {
      flag = false;
      break;
    }
  }

  if (flag) {
    const temp = document.querySelectorAll(".user-page-review-dot-down-menu");

    for (let item of temp) {
      item.style.display = "none";
    }
  }
});

/* 리뷰 수정 */
let beforeTitle;
let beforeContent;

for (let BTNList of dropDownMenu) {
  BTNList.firstElementChild.addEventListener("click", () => {
    beforeTitle = reviewTitle.innerHTML;
    beforeContent = reviewContent.innerHTML;

    reviewTitle.innerHTML = "";
    reviewContent.innerHTML = "";

    const reviewTitleUpdate = document.createElement("textarea");
    reviewTitleUpdate.classList.add("updateReview");
    const reviewContentUpdate = document.createElement("textarea");
    reviewContentUpdate.classList.add("updateReview");

    beforeTitle = beforeTitle.replaceAll("&amp;", "&");
    beforeTitle = beforeTitle.replaceAll("&lt;", "<");
    beforeTitle = beforeTitle.replaceAll("&gt;", ">");
    beforeTitle = beforeTitle.replaceAll("&quot;", '"');

    beforeContent = beforeContent.replaceAll("&amp;", "&");
    beforeContent = beforeContent.replaceAll("&lt;", "<");
    beforeContent = beforeContent.replaceAll("&gt;", ">");
    beforeContent = beforeContent.replaceAll("&quot;", '"');

    beforeContent = beforeContent
      .replaceAll("<br>", "\n")
      .replaceAll("&nbsp;", " ");

    reviewTitleUpdate.value = beforeTitle;
    reviewContentUpdate.value = beforeContent;

    reviewTitle.append(reviewTitleUpdate);
    reviewContent.append(reviewContentUpdate);
  });
}

/* 리뷰 삭제 */
function deleteReview(reviewNo) {
  // console.log(reviewNo);
  if (confirm("정말 삭제하시겠습니까?")) {
    $.ajax({
      url: "/review/delete",
      data: {
        reviewNo: reviewNo,
      },
      type: "GET",
      success: (result) => {
        if (result > 0) {
          alert("삭제되었습니다");
          selectReviewList();
        } else {
          // console.log("삭제 실패");
        }
      },
      error: () => {
        // console.log("삭제 에러");
      },
    });
  }
}

/* 버튼 이벤트 */

const suportButton = document.getElementsByClassName("suport-button");

for (let item of suportButton) {
  let count = 0;
  let flag = false;

  item.addEventListener("click", function () {
    if (flag == false) {
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

    if (count == 0) {
      item.parentElement.previousElementSibling.style.display = "none";
      // item.parentElement.previousElementSibling.style.visibility = "hidden";

      // item.parentElement.previousElementSibling.style.maxHeight= "0px";
    } else {
      // item.parentElement.previousElementSibling.style.visibility = "visible";
      // item.parentElement.previousElementSibling.style.maxHeight= "300px";
      item.parentElement.previousElementSibling.style.display = "flex";
      item.parentElement.previousElementSibling.innerHTML =
        count + "개의 도움이 되는 리뷰";
    }
  });
}

/* ------------------------- 무한 스크롤 ------------------------------ */
const moreBtn = document.getElementById("moreBtn");
const wrapContainer = document.getElementById("wrapContainer");

let rowBoundCount = 10;

moreBtn.addEventListener("click", () => {
  $.ajax({
    url: "/review/moreReview",
    data: {
      contentid: contentid,
      rowBoundCount: rowBoundCount,
    },
    type: "GET",
    dataType: "JSON",
    success: (reviewMoreList) => {
      moreBtn.remove();
      const ulreviewList = document.getElementById("review-list");

      for (let review of reviewMoreList) {
        const reviewTextColum = document.createElement("li");
        reviewTextColum.classList.add("user-page-review-colums2");

        const reviewTextHeaderStyle = document.createElement("div");
        reviewTextHeaderStyle.classList.add("user-page-review-header-style");

        const reviewTextHeaderLayout = document.createElement("div");
        reviewTextHeaderLayout.classList.add("user-page-review-header-layout");

        reviewTextHeaderStyle.append(reviewTextHeaderLayout);

        const reviewTextUserImage = document.createElement("a");
        reviewTextUserImage.href = `/profile/${review.memberNo}`;
        reviewTextUserImage.classList.add("review-user-image");

        reviewTextUserImage.innerHTML =
          '<img src="' + review.profileImage + '">';

        const reviewTextInfoLayout = document.createElement("div");
        reviewTextInfoLayout.classList.add("review-user-info-layout");

        const reviewInfoNickname = document.createElement("span");
        reviewInfoNickname.classList.add("review-user-nickname");

        reviewInfoNickname.innerHTML =
          "<a href=/profile/" +
          review.memberNo +
          ">" +
          review.memberNickname +
          "</a>";

        const reviewInfoDateLink = document.createElement("a");
        reviewInfoDateLink.classList.add("review-user-dday");

        reviewInfoDateLink.innerText = review.reviewDate;
        //
        const reviewTextDotStyle = document.createElement("button");
        reviewTextDotStyle.classList.add("user-page-review-dot-style");
        reviewTextDotStyle.innerHTML = "<i class='fa-solid fa-ellipsis' ></i>";

        const reviewTextDotDownMenu = document.createElement("div");
        reviewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");

        const reviewTextDownMenu = document.createElement("ul");
        reviewTextDownMenu.classList.add("down-menu");

        const reviewTextDownMenu_li1 = document.createElement("li");
        reviewTextDownMenu_li1.innerText = "수정";

        const reviewTextDownMenu_li2 = document.createElement("li");
        reviewTextDownMenu_li2.innerText = "삭제";
        reviewTextDownMenu_li2.setAttribute(
          "onclick",
          `deleteReview(${review.reviewNo})`
        );
        //
        // 드랍 다운 메뉴 이벤트 삽입
        reviewTextDotStyle.addEventListener("click", () => {
          reviewTextDotStyle.nextElementSibling.style.display = "block";
        });
        // reviewTextDotStyle.addEventListener("blur", () => {
        //   reviewTextDotStyle.nextElementSibling.style.display = "none";
        // });

        const reviewArea = document.createElement("div");
        reviewArea.classList.add("review-area");

        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("review-container");

        const rating = document.createElement("div");
        rating.classList.add("rating");

        const empty = document.createElement("span");
        empty.classList.add("empty");
        empty.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";

        const fill = document.createElement("span");
        fill.classList.add("fill");
        fill.style.width = (69 * (review.rating * 20)) / 100 + "px";
        fill.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";

        const reviewTextTitle = document.createElement("div");
        reviewTextTitle.classList.add("review-title");

        reviewTextTitle.innerText = review.reviewTitle;

        // XSS 방지 처리 해제
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&amp;", "&");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&lt;", "<");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&gt;", ">");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll(
          "&quot;",
          '"'
        );

        // 개행문자 처리 해제
        reviewTextTitle.innerText = review.reviewTitle
          .replaceAll("<br>", "\n")
          .replaceAll("&nbsp;", " ");

        const reviewTextContent = document.createElement("div");
        reviewTextContent.classList.add("review-content");

        reviewTextContent.innerText = '"' + review.reviewContent + '"';

        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&amp;",
          "&"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&lt;",
          "<"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&gt;",
          ">"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&quot;",
          '"'
        );

        // 개행문자 처리 해제
        reviewTextContent.innerText = review.reviewContent
          .replaceAll("<br>", "\n")
          .replaceAll("&nbsp;", " ");

        const reviewTextSupport = document.createElement("div");
        reviewTextSupport.classList.add("review-support");

        const reviewTextBottomMenu = document.createElement("div");
        reviewTextBottomMenu.classList.add("review-bottom-menu-style");

        const reviewTextSaveButton = document.createElement("div");
        reviewTextSaveButton.classList.add("save-button");
        if (review.likeCheck == 0) {
          reviewTextSaveButton.innerHTML =
            "<i class='fa-regular fa-heart'></i>좋아요";
        } else {
          reviewTextSaveButton.innerHTML =
            "<i class='fa-solid fa-heart'></i>좋아요";
        }

        reviewTextSaveButton.setAttribute(
          "onclick",
          `reviewLike(${review.reviewNo},${review.memberNo},${loginMemberNo},${this})`
        );

        const likeCount = document.createElement("span");
        likeCount.classList.add("likeCount");
        likeCount.innerText = review.reviewLike;

        const reviewTextShareButton = document.createElement("div");
        reviewTextShareButton.classList.add("share-button");
        reviewTextShareButton.innerHTML =
          "<i class='fa-solid fa-arrow-up-from-bracket'></i>신고";
        reviewTextShareButton.setAttribute(
          "onclick",
          `reviewLike(${review.reviewNo},${review.memberNo},${loginMemberNo})`
        );

        ulreviewList.append(reviewTextColum);

        reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);

        reviewTextHeaderLayout.append(
          reviewTextUserImage,
          reviewTextInfoLayout
        );

        reviewTextDotDownMenu.append(reviewTextDownMenu);

        reviewTextDownMenu.append(
          reviewTextDownMenu_li1,
          reviewTextDownMenu_li2
        );

        reviewTextSaveButton.append(likeCount);

        reviewArea.append(reviewContainer);

        reviewContainer.append(rating);

        rating.append(empty, fill);

        if (loginMemberNo == review.memberNo) {
          reviewTextHeaderStyle.append(
            reviewTextHeaderLayout,
            reviewTextDotStyle,
            reviewTextDotDownMenu
          );
        } else {
          reviewTextHeaderStyle.append(reviewTextHeaderLayout);
        }

        reviewTextBottomMenu.append(
          reviewTextSaveButton,
          reviewTextShareButton
        );

        reviewTextColum.append(
          reviewTextHeaderStyle,
          reviewArea,
          reviewTextTitle,
          reviewTextContent,
          reviewTextSupport,
          reviewTextBottomMenu
        );
      }

      if (reviewMoreList.length == 10) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("moreButton");

        const createBtn = document.createElement("button");
        createBtn.setAttribute("id", "moreBtn");
        createBtn.setAttribute("type", "button");
        createBtn.classList.add("moreBtn");
        createBtn.innerText = "더 보기";

        rowBoundCount += 10;

        createBtn.addEventListener("click", () => {
          createReviewList();
        });

        createDiv.append(createBtn);

        wrapContainer.append(createDiv);
        // reviewRight.append(reviewTextColum);
      } else {
        rowBoundCount = 0;
      }
    },
  });
});

const createReviewList = function () {
  $.ajax({
    url: "/review/moreReview",
    data: {
      contentid: contentid,
      rowBoundCount: rowBoundCount,
    },
    type: "GET",
    dataType: "JSON",
    success: (reviewMoreList) => {
      const moreBtn = document.getElementById("moreBtn");
      moreBtn.remove();
      const ulreviewList = document.getElementById("review-list");

      for (let review of reviewMoreList) {
        const reviewTextColum = document.createElement("li");
        reviewTextColum.classList.add("user-page-review-colums2");

        const reviewTextHeaderStyle = document.createElement("div");
        reviewTextHeaderStyle.classList.add("user-page-review-header-style");

        const reviewTextHeaderLayout = document.createElement("div");
        reviewTextHeaderLayout.classList.add("user-page-review-header-layout");

        reviewTextHeaderStyle.append(reviewTextHeaderLayout);

        const reviewTextUserImage = document.createElement("a");
        reviewTextUserImage.href = `/profile/${review.memberNo}`;
        reviewTextUserImage.classList.add("review-user-image");

        reviewTextUserImage.innerHTML =
          '<img src="' + review.profileImage + '">';

        const reviewTextInfoLayout = document.createElement("div");
        reviewTextInfoLayout.classList.add("review-user-info-layout");

        const reviewInfoNickname = document.createElement("span");
        reviewInfoNickname.classList.add("review-user-nickname");

        reviewInfoNickname.innerHTML =
          "<a href=/profile/" +
          review.memberNo +
          ">" +
          review.memberNickname +
          "</a>";

        const reviewInfoDateLink = document.createElement("a");
        reviewInfoDateLink.classList.add("review-user-dday");

        reviewInfoDateLink.innerText = review.reviewDate;
        //
        const reviewTextDotStyle = document.createElement("button");
        reviewTextDotStyle.classList.add("user-page-review-dot-style");
        reviewTextDotStyle.innerHTML = "<i class='fa-solid fa-ellipsis' ></i>";

        const reviewTextDotDownMenu = document.createElement("div");
        reviewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");

        const reviewTextDownMenu = document.createElement("ul");
        reviewTextDownMenu.classList.add("down-menu");

        const reviewTextDownMenu_li1 = document.createElement("li");
        reviewTextDownMenu_li1.innerText = "수정";

        const reviewTextDownMenu_li2 = document.createElement("li");
        reviewTextDownMenu_li2.innerText = "삭제";
        reviewTextDownMenu_li2.setAttribute(
          "onclick",
          `deleteReview(${review.reviewNo})`
        );
        //
        // 드랍 다운 메뉴 이벤트 삽입
        reviewTextDotStyle.addEventListener("click", () => {
          reviewTextDotStyle.nextElementSibling.style.display = "block";
        });
        reviewTextDotStyle.addEventListener("blur", () => {
          reviewTextDotStyle.nextElementSibling.style.display = "none";
        });

        const reviewArea = document.createElement("div");
        reviewArea.classList.add("review-container");

        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("review-container");

        const rating = document.createElement("div");
        rating.classList.add("rating");

        const empty = document.createElement("span");
        empty.classList.add("empty");
        empty.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";

        const fill = document.createElement("span");
        fill.classList.add("fill");
        fill.style.width = (69 * (review.rating * 20)) / 100 + "px";
        fill.innerHTML = "&#9679;&#9679;&#9679;&#9679;&#9679;";

        const reviewTextTitle = document.createElement("div");
        reviewTextTitle.classList.add("review-title");

        reviewTextTitle.innerText = review.reviewTitle;

        // XSS 방지 처리 해제
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&amp;", "&");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&lt;", "<");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll("&gt;", ">");
        reviewTextTitle.innerText = review.reviewTitle.replaceAll(
          "&quot;",
          '"'
        );

        // 개행문자 처리 해제
        reviewTextTitle.innerText = review.reviewTitle
          .replaceAll("<br>", "\n")
          .replaceAll("&nbsp;", " ");

        const reviewTextContent = document.createElement("div");
        reviewTextContent.classList.add("review-content");

        reviewTextContent.innerText = '"' + review.reviewContent + '"';

        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&amp;",
          "&"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&lt;",
          "<"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&gt;",
          ">"
        );
        reviewTextContent.innerText = review.reviewContent.replaceAll(
          "&quot;",
          '"'
        );

        // 개행문자 처리 해제
        reviewTextContent.innerText = review.reviewContent
          .replaceAll("<br>", "\n")
          .replaceAll("&nbsp;", " ");

        const reviewTextSupport = document.createElement("div");
        reviewTextSupport.classList.add("review-support");

        const reviewTextBottomMenu = document.createElement("div");
        reviewTextBottomMenu.classList.add("review-bottom-menu-style");

        const reviewTextSaveButton = document.createElement("div");
        reviewTextSaveButton.classList.add("save-button");

        if (review.likeCheck == 0) {
          reviewTextSaveButton.innerHTML =
            "<i class='fa-regular fa-heart'></i>좋아요";
        } else {
          reviewTextSaveButton.innerHTML =
            "<i class='fa-solid fa-heart'></i>좋아요";
        }

        reviewTextSaveButton.setAttribute(
          "onclick",
          `reviewLike(${review.reviewNo},${review.memberNo},${loginMemberNo},${this})`
        );

        const likeCount = document.createElement("span");
        likeCount.classList.add("likeCount");
        likeCount.innerText = review.reviewLike;

        const reviewTextShareButton = document.createElement("div");
        reviewTextShareButton.classList.add("share-button");
        reviewTextShareButton.innerHTML =
          "<i class='fa-solid fa-arrow-up-from-bracket'></i>신고";
        reviewTextShareButton.setAttribute(
          "onclick",
          `reviewLike(${review.reviewNo},${review.memberNo},${loginMemberNo})`
        );

        ulreviewList.append(reviewTextColum);

        reviewTextInfoLayout.append(reviewInfoNickname, reviewInfoDateLink);

        reviewTextHeaderLayout.append(
          reviewTextUserImage,
          reviewTextInfoLayout
        );

        reviewTextDotDownMenu.append(reviewTextDownMenu);

        reviewTextDownMenu.append(
          reviewTextDownMenu_li1,
          reviewTextDownMenu_li2
        );

        reviewTextSaveButton.append(likeCount);

        reviewArea.append(reviewContainer);

        reviewContainer.append(rating);

        rating.append(empty, fill);

        if (loginMemberNo == review.memberNo) {
          reviewTextHeaderStyle.append(
            reviewTextHeaderLayout,
            reviewTextDotStyle,
            reviewTextDotDownMenu
          );
        } else {
          reviewTextHeaderStyle.append(reviewTextHeaderLayout);
        }

        reviewTextBottomMenu.append(
          reviewTextSaveButton,
          reviewTextShareButton
        );

        reviewTextColum.append(
          reviewTextHeaderStyle,
          reviewArea,
          reviewTextTitle,
          reviewTextContent,
          reviewTextSupport,
          reviewTextBottomMenu
        );
      }

      if (reviewMoreList.length == 10) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("moreButton");

        const createBtn = document.createElement("button");
        createBtn.setAttribute("id", "moreBtn");
        createBtn.setAttribute("type", "button");
        createBtn.classList.add("moreBtn");
        createBtn.innerText = "더 보기";

        rowBoundCount += 10;

        createBtn.addEventListener("click", () => {
          createReviewList();
        });

        createDiv.append(createBtn);

        wrapContainer.append(createDiv);
        // reviewRight.append(reviewTextColum);
      } else {
        rowBoundCount = 0;
      }
    },
  });
};

//신고하기
function insertReport(reviewNo, memberNo, loginMemberNo) {
  // console.log(reviewNo, memberNo, loginMemberNo);
  if (loginMemberNo == "") {
    alert("로그인 후 이용해주세요.");
    return;
  }

  if (memberNo != loginMemberNo) {
    $.ajax({
      url: "/insertReport",
      type: "get",
      data: {
        reviewNo: reviewNo,
        memberNo: memberNo,
        reporter: loginMemberNo,
      },
      success: (result) => {
        if (result == 0) {
          alert("이미 신고한 리뷰입니다.");
          return;
        } else {
          alert("리뷰를 신고 했습니다.");
          location.reload();
        }
      },
      error: (error) => {
        // console.log(error);
        alert("이미 신고한 리뷰입니다");
        location.reload();
      },
    });
  }
}

//좋아요 버튼
//전역 변수 loginMemberNo사용

const likebtn = document.getElementsByClassName("save-button");
const likeCount = document.getElementsByClassName("likeCount");

function reviewLike(reviewNo, memberNo, loginMemberNo, el) {
  // 로그인 상태가 아닌 경우
  if (loginMemberNo == "") {
    alert("로그인 후 이용해주세요.");
    return;
  }

  if (loginMemberNo == memberNo) {
    alert("본인의 리뷰는 좋아요를 누를 수 없습니다.");
    return;
  }

  // 로그인 상태 + 좋아요 상태가 아닌 경우

  if (el.firstElementChild.classList.contains("fa-regular")) {
    //빈하트인 경우

    $.ajax({
      url: "/review/likeUp",
      data: { reviewNo: reviewNo, memberNo: loginMemberNo },
      type: "get",
      success: (result) => {
        if (result > 0) {
          el.firstElementChild.classList.remove("fa-regular"); //빈하트 클래스 제거
          el.firstElementChild.classList.add("fa-solid"); //채워진 하트 클래스 추가
          // console.log(el.lastElementChild);

          el.lastElementChild.innerText =
            Number(el.lastElementChild.innerText) + 1;
        } else {
          // console.log("증가 실패");
        }
      },
      error: () => {
        // console.log("증가 에러");
      },
    });
  }
  // 로그인 상태 + 좋아요 상태인 경우
  else {
    //채워진 하트인 경우
    $.ajax({
      url: "/review/likeDown",
      data: { reviewNo: reviewNo, memberNo: loginMemberNo },
      type: "get",
      success: (result) => {
        if (result > 0) {
          el.firstElementChild.classList.remove("fa-solid"); //빈하트 클래스 제거
          el.firstElementChild.classList.add("fa-regular"); //채워진 하트 클래스 추가
          if (el.lastElementChild.innerText > 0) {
            el.lastElementChild.innerText =
              Number(el.lastElementChild.innerText) - 1;
          }
        } else {
          // console.log("감소 실패");
        }
      },
      error: () => {
        // console.log("감소 에러");
      },
    });
  }
}
