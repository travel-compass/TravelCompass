<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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
                                    <img src="${loginMember.profileImage}" alt="프로필 이미지">
                                </span>
                            </div>
                            <div class="user-nickname">
                                닉네임
                            </div>
                            <div class="user-container-PFF">
                                <div>
                                    포스팅
                                    <br>
                                    <a href="#">1,926</a>
                                </div>
                                <div>
                                    팔로워
                                    <br>
                                    <a href="#">10</a>
                                </div>
                                <div>
                                    팔로잉
                                    <br>
                                    <a href="#">10</a>
                                </div>
                            </div>
                        </div>

                        <!-- 본인 회원 프로필 메뉴 -->
                        <div class="my-info-right-part">
                                <label for="image-input">프로필 사진 변경</label>
                                <input type="file" id="image-input" accept="image/*">
                        </div>


                        <!-- 다른 회원 프로필 메뉴 -->
                        <!-- <div class="user-info-right-part">
                            <button class="follow-button">
                                <i class="fa-regular fa-user"></i> 팔로우
                            </button>
                            <button class="comment-button">
                                <i class="fa-regular fa-comments"></i>
                            </button>
                            <button class="vesides-button">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                        </div> -->
                    </div>
                </div>
        
                <!-- 회원 페이지 세부 내용 하단 메뉴 시작 부분 -->
                <div class="user-page-content-bottom-style">
                    <div class="user-page-content-bottom-layout">
                        <a href="/profile/MemberPage/Feed">활동 피드</a>
                        <a href="/profile/MemberPage/Review">리뷰</a>
                        <a href="/profile/MemberPage/Image">사진</a>
                        <a href="/profile/MemberPage/Scrap">스크랩</a>
                        <a href="/profile/MemberPage/5"></a>
                    </div>
                </div>
        
                <!-- 회원 페이지 소개글과 리뷰 시작 부분 -->
        
                <div class="user-page-review-colums-style">
                    <div class="user-page-review-colums-layout">
                        <div class="user-page-review-colums1">
                            <div>소개</div>
                            <span><i class="fa-solid fa-location-dot"></i> 위치</span>
                            <span><i class="fa-regular fa-calendar-days"></i> 가입일</span>
                            <span><i class="fa-regular fa-envelope"></i> 이메일</span>
                        </div>

                        <ul class="review-list">
                            <%-- 리뷰 목록 조회 --%>
                            <c:choose>
                                <%-- ${empty list} 목록 조회가 비어있다면  --%>
                                <c:when test="${map.listCount == 0}">
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
                                    
                                </c:when>

                                <%-- 게시글 목록이 있으면서 사진이 없을 경우 --%>
                                <c:when test="${(listCount > 0) && (empty map.firstImage)}">
                                    <!-- 첫번째 리뷰 테이블 -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-header-style">
                                            <div class="user-page-review-header-layout">
                                                <a href="#" class="review-user-image"><img src="${loginMember.profileImage}" alt="프로필 이미지"></a>
                                                <div class="review-user-info-layout">
                                                    <span class="review-user-nickname"><a href="#">유저닉네임</a>님이 리뷰를 작성했습니다.</span>
                                                    <a href="#" class="review-user-dday">
                                                        0000년 0월
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
                                            <div class="review-title">리뷰 제목</div>
                                            <div class="review-content">"좌석수가 많지 않은지 잘 모르겠으나 대기시간이 엄청 났고 
                                                느끼기에 종업원들이 대기손님을 대하는 태도가 별로였다.
                                                손님을 잡으려기는 커녕 오히려 그냥 가세요 하는 태도.
                                                그외에 카페는 분위기와 위치 뛰어났다"</div>
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
                                </c:when>

                                
                                <%-- 리뷰도 있고 사진도 있을 경우 --%>
                                <c:otherwise>
                                    <!-- 두번째 리뷰 테이블 (사진 슬라이드 넣어보기) -->
                                    <div class="user-page-review-colums2">
                                        <div class="user-page-review-header-style">
                                            <div class="user-page-review-header-layout">
                                                <a href="#" class="review-user-image"><img src="${loginMember.profileImage}" alt="프로필 이미지"></a>
                                                <div class="review-user-info-layout">
                                                    <span class="review-user-nickname"><a href="#">유저닉네임</a>님이 리뷰를 작성했습니다.</span>
                                                    <a href="#" class="review-user-dday">
                                                        0000년 0월
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
                                            <div class="slide fade">
                                                <div class="numbertext">1 / 3</div>
                                                <img src="/resources/images/profile/flower.jpg">
                                            </div>
                                            
                                            <div class="slide fade">
                                                <div class="numbertext">2 / 3</div>
                                                <img src="/resources/images/profile/fox.jpg">
                                            </div>

                                            <div class="slide fade">
                                                <div class="numbertext">3 / 3</div>
                                                <img src="/resources/images/profile/lightning.jpg">
                                            </div>

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
                                            <div class="review-title">리뷰 제목</div>
                                            <div class="review-content">"좌석수가 많지 않은지 잘 모르겠으나 대기시간이 엄청 났고 
                                                느끼기에 종업원들이 대기손님을 대하는 태도가 별로였다.
                                                손님을 잡으려기는 커녕 오히려 그냥 가세요 하는 태도.
                                                그외에 카페는 분위기와 위치 뛰어났다"</div>
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
                                </c:otherwise>
                            </c:choose>
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

    <%-- <script src="/resources/js/main.js"></script>
    <script src="/resources/js/swiper.min.js"></script> --%>
    <script src="/resources/js/profile/MemberPage.js"></script>
</body>
</html>

