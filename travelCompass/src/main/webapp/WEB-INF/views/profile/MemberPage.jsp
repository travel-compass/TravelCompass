<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>프로필</title>

    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <link rel="stylesheet" href="/resources/css/profile/MemberPage.css">

    
    <script src="https://kit.fontawesome.com/313744e228.js" crossorigin="anonymous"></script>
    
</head>
<body>
    <%-- header:include --%>
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    
    <div class="blur-box"></div>
    
    <main>

        <!-- 회원 정보 페이지 검색창 하단 메뉴 시작 부분 -->
        <div class="temp-web">
            
            <!-- 회원 페이지 세부 내용들 시작 부분 중 스타일 -->
            <div class="user-page-content-style">
                <!-- 
                    회원 페이지 유저 정보 상단 부분 중 스타일
                    로그인 아이디에 따라 화면 변경 부분 만들기
                -->
                <div class="user-info-container-style">
                    <div class="user-info-container-layout">
                        <div class="user-info-left-part">
                            <div class="user-container-image">
                                <span class="user-info-image">
                                    <img id="profile-image" src="${member.profileImage}">
                                </span>
                            </div>
                            <div class="user-nickname">
                                ${member.memberNickname}
                            </div>
                            <div id="PFFColor" class="user-container-PFF">
                                <div class="posting PFFCount">
                                    포스팅
                                    <br>
                                    <button>${member.totalPosting}</button>
                                </div>
                                <div class="follower PFFCount">
                                    팔로워
                                    <br>
                                    <button id="follow-button-list">${member.totalFollower}</button>
                                </div>
                                <div class="following PFFCount">
                                    팔로잉
                                    <br>
                                    <button id="following-button-list">${member.totalFollowing}</button>
                                </div>
                            </div>
                        </div>
                        <c:if test="${loginMember.memberNo == member.memberNo}">
                            <!-- 본인 회원 프로필 메뉴 -->
                            <form action="/profile/${member.memberNo}" method="POST" class="my-info-right-part"
                            id="profileForm" enctype="multipart/form-data" onsubmit="return true">
                                <label for="image-input">프로필 사진 변경</label>
                                <input type="file" id="image-input" name="profileImage" accept="image/*">
                            </form>
                        </c:if>

                        <c:if test="${loginMember.memberNo != member.memberNo}">
                        <!-- 다른 회원 프로필 메뉴 -->
                            <div class="user-info-right-part">
                                <c:if test="${empty followCheck}">
                                    <button id="clickFollow" class="follow-button followOff">
                                        <i class="fa-solid fa-user-plus"></i>팔로우
                                    </button>
                                </c:if>
                                <c:if test="${!empty followCheck}">
                                    <button id="clickFollow" class="follow-button followOn">
                                        <i class="fa-solid fa-user-plus"></i>팔로우
                                    </button>
                                </c:if>
                            </div>
                        </c:if>
                    </div>
                </div>

                <div id="follow-modal" class="modal-layout">
                    <div class="modal-bc"></div>
                    <div class="modal-content" id="modalContent">
                        <div class="modal-content-title" id="modal-title"></div>
                        <ul class="follow-user-table" id="follow-table">
                            <li>
                                <a href="">
                                    <div class="follow-user-image"><img src="${member.profileImage}"></div>
                                    <div class="follow-user-info">
                                        <div class="follow-user-nickname">${member.memberNickname}</div>
                                        <div class="follow-user-email">${member.memberEmail}</div>
                                        <div class="follow-user-address">${member.memberAddress}</div>
                                        <div class="follow-user-ea">${member.totalPosting}포스팅 ${member.totalFollower}팔로워</div>
                                    </div>
                                </a>
                                <button class="follow-user-button"><i class="fa-solid fa-user-plus"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
        
                <!-- 회원 페이지 세부 내용 하단 메뉴 시작 부분 -->
                <div class="user-page-content-bottom-style">
                    <ul class="user-page-content-bottom-layout">
                        <li>
                            <input type="radio" id="checkFed" name="profileCategory" checked>
                            <label for="checkFed">
                                <span id="Fed"> 활동피드 </span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="checkReview" name="profileCategory">
                            <label for="checkReview">
                                <span id="Review">리뷰</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="checkImageReview" name="profileCategory">
                            <label for="checkImageReview">
                                <span id="ImageReview">사진</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="checkScrap" name="profileCategory">
                            <label for="checkScrap">
                                <span id="Scrap" OnClick="location.href='/travel/list/${memberNo}'">여행</span>
                            </label>
                        </li>
                    </ul>
                </div>
        
                <!-- 회원 페이지 소개글과 리뷰 시작 부분 -->
        
                <div class="user-page-review-colums-style">
                    <div class="user-page-review-colums-layout">
                        <div class="user-page-review-colums1">
                            <div>소개</div>
                            <span><i class="fa-solid fa-location-dot"></i> ${member.memberAddress}</span>
                            <span><i class="fa-regular fa-calendar-days"></i> ${member.enrollDate}에 가입함</span>
                            <span><i class="fa-regular fa-envelope"></i> ${member.memberEmail}</span>
                        </div>

                        <ul class="review-list" id="reviewContainer">
                                

                            <c:if test="${empty reviewList}">
                                <c:if test="${loginMember.memberNo == member.memberNo}">
                                    <!-- 리뷰가 아무것도 없을 때 나오는 테이블 -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-none-content">
                                            <div class="none-content-title">
                                                리뷰 작성
                                            </div>
                                            <div class="none-content">
                                                사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!
                                            </div>
                                            <div class="none-content-review-create">
                                                <a><i class="fa-solid fa-pen-to-square"></i>리뷰 작성하러 가기</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </c:if>
                                <c:if test="${loginMember.memberNo != member.memberNo}">
                                    <!-- 리뷰가 아무것도 없을 때 나오는 테이블 -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-none-content">
                                            <div class="none-content-title">
                                                리뷰
                                            </div>
                                            <div class="none-content">
                                                회원이 활동한 내역이 없습니다. 다음에 다시 한번 방문해주세요.
                                            </div>
                                        </div>
                                    </div>
                                </c:if>
                            </c:if>

                            <c:forEach var="FedList" items="${reviewList}" begin="0" end="9">
                                
                                <%-- 사진이 없을 때 reivewImgList에 담겨있는게 없어서 size가 0 --%>
                                <c:if test="${(not empty FedList) && (fn:length(FedList.reviewImgList) == 0)}">
                                    <!-- 첫번째 리뷰 테이블 -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-header-style">
                                            <div class="user-page-review-header-layout">
                                                <a class="review-user-image"><img src="${member.profileImage}"></a>
                                                <div class="review-user-info-layout">
                                                    <span class="review-user-nickname"><span>${member.memberNickname}</span> 님이 리뷰를 작성했습니다.</span>
                                                    <a class="review-user-dday">
                                                        ${FedList.reviewDate}
                                                    </a>
                                                </div>
                                            </div>
                                            <button class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i>
                                                <div class="user-page-review-dot-down-menu">
                                                    <ul class="down-menu">
                                                        <li id="reviewDelete" var="${FedList.reviewNo}">삭제</li>
                                                    </ul>
                                                </div>
                                            </button>
                                        </div>

                                        <a href="/place/detail/${FedList.contenttypeid}/${FedList.contentid}">
                                            <span class="review-data-table-style">
                                                <div class="review-point">
                                                    <div class="rating">
                                                        <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                                        <span class="fill" style="width:${84.5 * (FedList.rating * 20) / 100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                                    </div>
                                                </div>
                                                <div class="review-title">${FedList.reviewTitle}</div>
                                                <div class="review-content">"${FedList.reviewContent}"</div>
                                            </span>
                                        </a>
                                    </div>
                                </c:if>

                                <%-- 이미지가 있어서 reivewImgList의 size가 0이 아닐 때 --%>
                                <c:if test="${(not empty FedList) && (fn:length(FedList.reviewImgList) != 0)}">
                                    <%-- 리뷰도 있고 사진도 있을 경우 --%>
                                    <!-- 두번째 리뷰 테이블 (사진 슬라이드 넣어보기) -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-header-style">
                                            <div class="user-page-review-header-layout">
                                                <a class="review-user-image"><img src="${member.profileImage}" alt="프로필 이미지"></a>
                                                <div class="review-user-info-layout">
                                                    <span class="review-user-nickname"><span>${member.memberNickname}</span> 님이 리뷰를 작성했습니다.</span>
                                                    <a class="review-user-dday">
                                                        ${FedList.reviewDate}
                                                    </a>
                                                </div>
                                            </div>
                                            <%-- <button class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i></button>
                                            <div class="user-page-review-dot-down-menu">
                                                <ul class="down-menu">
                                                    <li id="reviewDelete" var="${FedList.reviewNo}">삭제</li>
                                                </ul>
                                            </div> --%>
                                            <button class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i>
                                                <div class="user-page-review-dot-down-menu">
                                                    <ul class="down-menu">
                                                        <li id="reviewDelete" var="${FedList.reviewNo}">삭제</li>
                                                    </ul>
                                                </div>
                                            </button>
                                            
                                        </div>
                                        <!-- 사진 슬라이드 div태그 시작 -->
                                        <div class="slide-container-style">
                                            <c:forEach var="i" begin="0" end="${fn:length(FedList.reviewImgList) - 1}">
                                                    <div class="slide fade">
                                                        <div class="numbertext">${i+1} / ${fn:length(FedList.reviewImgList)}</div>
                                                        <img src="${FedList.reviewImgList[i].reviewImagePath}${FedList.reviewImgList[i].reviewImageOriginal}">
                                                    </div>
                                            </c:forEach>
                                            <a class="prev" onclick="plusSlides(-1, this)">&#10094;</a>
                                            <a class="next" onclick="plusSlides(1, this)">&#10095;</a>
                                        </div>
                                        <br>

                                        <a href="/place/detail/${FedList.contenttypeid}/${FedList.contentid}">
                                            <span class="review-data-table-style">
                                                <div class="review-point">
                                                    <div class="rating">
                                                        <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                                        <span class="fill" style="width:${84.5 * (FedList.rating * 20) / 100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                                    </div>
                                                </div>
                                                <div class="review-title">${FedList.reviewTitle}</div>
                                                <div class="review-content">"${FedList.reviewContent}"</div>
                                            </span>
                                        </a>
                                    </div>
                                </c:if>
                            </c:forEach>
                            <c:if test="${fn:length(reviewList) == 10}">
                                <button class="more-button" id="moreButton">더보기<i class="fa-solid fa-chevron-down"></i></button>
                            </c:if>
                        </ul>

                        <div class="user-page-review-colums3">
                            빈상자
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <%-- footer:include --%>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>

    <script>
        // ajax 페이지를 위한 변수
        const memberNo = "${member.memberNo}";

        // @ReqeustParam
        const reviewMemberNo = "${member.memberNo}";
        const loginMemberNo = "${loginMember.memberNo}"

        // 팔로워 넘버
        const followerNo = "${followMemberList}"

        // 팔로잉 넘버
        const followingNo = "${followingMemberList}"
    </script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" 
    integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" 
    crossorigin="anonymous"></script>
    <%-- <script src="/resources/js/main.js"></script>
    <script src="/resources/js/swiper.min.js"></script> --%>
    <script src="/resources/js/profile/MemberPage.js"></script>
</body>
</html>

