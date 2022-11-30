<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원페이지</title>

    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <%-- <link rel="stylesheet" href="/resources/css/main-style.css"> --%>
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <%-- <link rel="stylesheet" href="/resources/css/swiper.min.css"> --%>
    <link rel="stylesheet" href="/resources/css/profile/MemberPage.css">

    
    <script src="https://kit.fontawesome.com/313744e228.js" crossorigin="anonymous"></script>
    
</head>
<body>
    <%-- header:include --%>
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    
    <div class="blur-box"></div>
    
    <main>
        <%-- <div class="user-header-bottom-style">
            <nav class="user-header-bottom-layout">
                <a href="#">호텔</a>
                <a href="#">즐길거리</a>
                <a href="#">음식점</a>
                <a href="#">항공권</a>
                <a href="#">항공+호텔 패키지</a>
                <a href="#">크루즈</a>
                <a href="#"><i class="fa-solid fa-ellipsis"></i></a>
            </nav>
        </div> --%>

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
                                    <img src="${member.profileImage}" alt="프로필 이미지">
                                </span>
                            </div>
                            <div class="user-nickname">
                                ${member.memberNickname}
                            </div>
                            <div class="user-container-PFF">
                                <div>
                                    포스팅
                                    <br>
                                    <a href="#">${member.totalPosting}</a>
                                </div>
                                <div>
                                    팔로워
                                    <br>
                                    <a href="#">${member.totalFollower}</a>
                                </div>
                                <div>
                                    팔로잉
                                    <br>
                                    <a href="#">${member.totalFollowing}</a>
                                </div>
                            </div>
                        </div>
                        <c:if test="${loginMember.memberNo == member.memberNo}">
                            <!-- 본인 회원 프로필 메뉴 -->
                            <div class="my-info-right-part">
                                    <label for="image-input">프로필 사진 변경</label>
                                    <input type="file" id="image-input" accept="image/*">
                            </div>
                        </c:if>

                        <c:if test="${loginMember.memberNo != member.memberNo}">
                        <!-- 다른 회원 프로필 메뉴 -->
                            <div class="user-info-right-part">
                                <button class="follow-button">
                                    <i class="fa-regular fa-user"></i> 팔로우
                                </button>
                                <button class="comment-button">
                                    <i class="fa-regular fa-comments"></i>
                                </button>
                                <button class="vesides-button">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </c:if>
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
                                <span id="Scrap">스크랩</span>
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
                                
                            <c:forEach var="reviewList" items="${reviewList}" begin="0" end="9">

                                <c:if test="${reviewList == null}">
                                    <!-- 리뷰가 아무것도 없을 때 나오는 테이블 -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-none-content">
                                            <div class="none-content-titel">
                                                프로필 작성
                                            </div>
                                            <div class="none-content">
                                                사람들이 회원님을 쉽게 찾고 더 알아갈 수 있도록 하려면 사진과 정보를 프로필에 추가하세요!
                                            </div>
                                            <div class="none-content-review-create">
                                                <a href="#"><i class="fa-solid fa-pen-to-square"></i>리뷰 작성하러 가기</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </c:if>
                                
                                <%-- 사진이 없을 때 reivewImgList에 담겨있는게 없어서 size가 0 --%>
                                <c:if test="${(reviewList != null) && (fn:length(reviewList.reviewImgList) == 0)}">
                                    <!-- 첫번째 리뷰 테이블 -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-header-style">
                                            <div class="user-page-review-header-layout">
                                                <a href="#" class="review-user-image"><img src="${member.profileImage}" alt="프로필 이미지"></a>
                                                <div class="review-user-info-layout">
                                                    <span class="review-user-nickname"><a href="#">${member.memberNickname}</a>님이 리뷰를 작성했습니다.</span>
                                                    <a href="#" class="review-user-dday">
                                                        ${reviewList.reviewDate}
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i></div>
                                            <div class="user-page-review-dot-down-menu">
                                                <ul class="down-menu">
                                                    <li><a href="#">수정</a></li>
                                                    <li><a href="#">삭제</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="review-data-table-style">
                                            <div class="review-point">
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                            </div>
                                            <div class="review-title">${reviewList.reviewTitle}</div>
                                            <div class="review-content">"${reviewList.reviewContent}"</div>
                                            <div class="review-date">
                                                <span class="rdt">방문 날짜 :</span>
                                                2019년 12월
                                            </div>
                                        </div>
                                        <div class="review-navi-style">
                                            <div class="review-navi-layout">
                                                <a href="#" class="review-navi-left">
                                                    <div>
                                                        <img src="/resources/images/profile/venis.webp">
                                                    </div>
                                                    <div class="review-navi-title">
                                                        <div>배니스</div>
                                                        <div class="review-navi-deep">
                                                            <div class="review-navi-deep-point">
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                            </div>
                                                            <div>00건의 리뷰</div>
                                                        </div>
                                                        <div>배니스, 이탈리아</div>
                                                    </div>
                                                </a>
                                                <div class="review-navi-right">
                                                    <i class="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-support"></div>
                                        <div class="review-bottom-menu-style">
                                            <div class="suport-button">
                                                <i class="fa-regular fa-thumbs-up"></i>도움이 됨
                                            </div>
                                            <div class="save-button">
                                                <i class="fa-solid fa-heart"></i>저장
                                            </div>
                                            <div class="share-button">
                                                <i class="fa-solid fa-arrow-up-from-bracket"></i>공유
                                            </div>
                                        </div>
                                    </div>
                                </c:if>

                                <%-- 이미지가 있어서 reivewImgList의 size가 0이 아닐 때 --%>
                                <c:if test="${(reviewList != null) && (fn:length(reviewList.reviewImgList) != 0)}">
                                    <%-- 리뷰도 있고 사진도 있을 경우 --%>
                                    <!-- 두번째 리뷰 테이블 (사진 슬라이드 넣어보기) -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-header-style">
                                            <div class="user-page-review-header-layout">
                                                <a href="#" class="review-user-image"><img src="${member.profileImage}" alt="프로필 이미지"></a>
                                                <div class="review-user-info-layout">
                                                    <span class="review-user-nickname"><a href="#">${member.memberNickname}</a>님이 리뷰를 작성했습니다.</span>
                                                    <a href="#" class="review-user-dday">
                                                        ${reviewList.reviewDate}
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis" ></i></div>
                                            <div class="user-page-review-dot-down-menu">
                                                <ul class="down-menu">
                                                    <li><a href="#">수정</a></li>
                                                    <li><a href="#">삭제</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- 사진 슬라이드 div태그 시작 -->
                                        <div class="slide-container-style">
                                            <c:forEach var="i" begin="0" end="${fn:length(reviewList.reviewImgList) - 1}">
                                                    <div class="slide fade">
                                                        <div class="numbertext">${i+1} / ${fn:length(reviewList.reviewImgList)}</div>
                                                        <img src="${reviewList.reviewImgList[i].reviewImgPath}${reviewList.reviewImgList[i].reviewImgOriginal}">
                                                    </div>
                                            </c:forEach>
                                            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                            <a class="next" onclick="plusSlides(1)">&#10095;</a>
                                        </div>
                                        <br>

                                        <div class="review-data-table-style">
                                            <div class="review-point">
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                                <span><i class="fa-solid fa-circle"></i></span>
                                            </div>
                                            <div class="review-title">${reviewList.reviewTitle}</div>
                                            <div class="review-content">"${reviewList.reviewContent}"</div>
                                            <div class="review-date">
                                                <span class="rdt">방문 날짜 :</span>
                                                2019년 12월
                                            </div>
                                        </div>
                                        <div class="review-navi-style">
                                            <div class="review-navi-layout">
                                                <a href="#" class="review-navi-left">
                                                    <div>
                                                        <img src="/resources/images/profile/venis.webp">
                                                    </div>
                                                    <div class="review-navi-title">
                                                        <div>배니스</div>
                                                        <div class="review-navi-deep">
                                                            <div class="review-navi-deep-point">
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                                <span><i class="fa-solid fa-circle"></i></span>
                                                            </div>
                                                            <div>00건의 리뷰</div>
                                                        </div>
                                                        <div>배니스, 이탈리아</div>
                                                    </div>
                                                </a>
                                                <div class="review-navi-right">
                                                    <i class="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="review-support">n개의 도움이 되는 리뷰</div>
                                        <div class="review-bottom-menu-style">
                                            <div class="suport-button">
                                                <i class="fa-regular fa-thumbs-up"></i>도움이 됨
                                            </div>
                                            <div class="save-button">
                                                <i class="fa-solid fa-heart"></i>저장
                                            </div>
                                            <div class="share-button">
                                                <i class="fa-solid fa-arrow-up-from-bracket"></i>공유
                                            </div>
                                        </div>
                                    </div>
                                </c:if>
                            </c:forEach>
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
        const memberNo = "${memberNo}";
    </script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" 
    integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" 
    crossorigin="anonymous"></script>
    <%-- <script src="/resources/js/main.js"></script>
    <script src="/resources/js/swiper.min.js"></script> --%>
    <script src="/resources/js/profile/MemberPage.js"></script>
</body>
</html>

