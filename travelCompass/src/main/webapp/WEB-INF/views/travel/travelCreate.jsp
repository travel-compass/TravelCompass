<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>여행 만들기</title>
    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/travel/travel-create.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>

    <main>
        <section class="travel-create-side">
            <div class="travel-info">
                <div class="travel-info-header">
                    <a class="profile-image" href="">
                        <img src="https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg" alt="">
                    </a>
                
                    <button class="fa-solid fa-ellipsis drop-down">
                        <ul class="drop-down_box">
                            <li>변경사항 저장</li>
                            <li>여행 삭제</li>
                        </ul>
                    </button>
                </div>
                <div class="input-row">
                    <input type="text" class="travel-title read-only" maxlength="10" id="travelTitle" name="travelTitle" readonly value="여행 이름">
                    <button class="fa-solid fa-pen-to-square update-btn" type="button"><!-- 수정버튼 --></button>
                    <button class="fa-solid fa-xmark cancel-btn"><!-- 취소 --></button>
                </div>
                <span class="travel-writer">작성자: <a href="작성자 프로필 페이지"> 예비군김영현</a></span>
                <div class="input-row">
                    <textarea name="travelContent" id="travelContent" maxlength="33" placeholder="여행 설명을 입력하세요." class="travel-content read-only" readonly></textarea>
                    <button class="fa-solid fa-pen-to-square update-btn" type="button"><!-- 수정버튼 --></button>
                    <button class="fa-solid fa-xmark cancel-btn" type="button"><!-- 취소 --></button>
                </div>
                <span class="last-update-date">2021년 11월 12일</span>
                <button id="share" type="button"><i class="fa-solid fa-arrow-up-from-bracket"></i><span>공유</span></button>
            </div>
            <ul class="travel-list" id="travelList">
                <li class="empty-item">
                    <div class="empty-image">
                        <img src="https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg" alt="">
                    </div>
                    <h1>방금 여행을 만들었습니다!</h1>
                    <p>원하는 장소를 저장한 다음 계획을 정리하고 지도에서 볼 수 있습니다.</p>
                </li>

                <li class="travel-item">
                    <a href="#" class="travel-first-image">
                        <img src="https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="">
                    </a>
                    <div class="place-info">
                        <div class="place-title-area">
                            <a href="<!-- 장소 상세페이지로 -->">장소 이름</a>
                            <button class="fa-solid fa-ellipsis drop-down">
                                <ul class="drop-down_box">
                                    <li>여행에서 제외</li>
                                </ul>
                            </button>
                        </div>
                        <div class="review-area">
                            <span>평균 리뷰</span>
                            <span>모든 리뷰 수</span>
                        </div>
                        <span class="place-addr">장소 주소</span>
                    </div>
                </li>
                <li class="travel-item">
                    <div class="travel-first-image">
                        <img src="https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="">
                    </div>
                    <div class="place-info">
                        <div class="place-title-area">
                            <a href="<!-- 장소 상세페이지로 -->">장소 이름</a>
                            <span class="fa-solid fa-ellipsis drop-down"></span>
                        </div>
                        <div class="review-area">
                            <span>평균 리뷰</span>
                            <span>모든 리뷰 수</span>
                        </div>
                        <span class>장소 주소</span>
                    </div>
                </li>
            </ul>
        </section>
        <section class="travel-create-content">
            <form action="" class="scrap-place-search">
                <input type="text" placeholder="검색" class="scrap-place-search-input">
                <button type="button" class="fa-solid fa-sort" id="sortBtn"></button>
            </form>
            <ul id="scrapPlaceList">
                <li class="scrap-place-item">
                    <a class="place-first-image">
                        <img src="https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="">
                    </a>
                    <div class="scrap-place-info">
                        <div class="place-title-area">
                            <a href="해당 장소 상세페이지">스크렙 장소 이름</a>
                            <button class="fa-solid fa-ellipsis drop-down">
                                <ul class="drop-down_box">
                                    <li>여행에 추가</li>
                                    <li>스크랩 삭제</li>
                                </ul>
                            </button>
                        </div>
                        <div class="review-area">
                            <span>평균 리뷰</span>
                            <span>모든 리뷰 수</span>
                        </div>
                        <span class="place-addr">장소 주소</span>
                        <span class="scrap-date">스크랩 날짜</span>
                    </div>
                </li>  
                <li class="scrap-place-item">
                    <a class="place-first-image">
                        <img src="https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="">
                    </a>
                    <div class="scrap-place-info">
                        <div class="place-title-area">
                            <a href="해당 장소 상세페이지">스크렙 장소 이름</a>
                            <span class="fa-solid fa-ellipsis drop-down"></span>
                        </div>
                        
                        <div class="review-area">
                            <span>평균 리뷰</span>
                            <span>모든 리뷰 수</span>
                        </div>
                        <span class="place-addr">장소 주소</span>
                        <span class="scrap-date">스크랩 날짜</span>
                    </div>
                </li>
                <li class="scrap-place-item">
                    <a class="place-first-image">
                        <img src="https://a.cdn-hotels.com/gdcs/production97/d1351/a274bc26-9643-4bae-a91f-cebaf7f9fa56.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="">
                    </a>
                    <div class="scrap-place-info">
                        <div class="place-title-area">
                            <a href="해당 장소 상세페이지">스크렙 장소 이름</a>
                            <span class="fa-solid fa-ellipsis drop-down"></span>
                        </div>
                        
                        <div class="review-area">
                            <span>평균 리뷰</span>
                            <span>모든 리뷰 수</span>
                        </div>
                        <span class="place-addr">장소 주소</span>
                        <span class="scrap-date">스크랩 날짜</span>
                    </div>
                </li> 
                <div class="empty-scrap">
                    텅...
                </div>
            </ul>
        </section>
    </main>

    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    <script src="/resources/js/travel/travel-create.js"></script>
</body>
</html>