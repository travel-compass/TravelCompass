<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
                    <a class="profile-image" href="/profile/${travel.memberNo}">
                        <img src="${travel.profileImage}" alt="프로필 이미지">
                    </a>

                    <button type="button" id="mapToggle" class="fa-solid fa-map-location-dot" value="1">
                    </button>

                    <button class="fa-solid fa-ellipsis drop-down">
                        <ul class="drop-down_box">
                            <li id="updateTravel">변경사항 저장</li>
                            <li id="reloadTravel">변경사항 초기화</li>
                            <li id="deleteTravel">여행 삭제</li>
                        </ul>
                    </button>
                </div>
                <div class="input-row">
                    <input type="text" class="travel-title read-only travel-input" maxlength="10" id="travelTitle" name="travelTitle" readonly value="${travel.travelTitle}">
                    <button class="fa-solid fa-pen-to-square update-btn" type="button"><!-- 수정버튼 --></button>
                    <button class="fa-solid fa-xmark cancel-btn"><!-- 취소 --></button>
                </div>
                <span class="travel-writer">작성자: <a href="/profile/${travel.memberNo}">${travel.memberNickname}</a></span>
                <div class="input-row">
                    <textarea name="travelContent" id="travelContent" maxlength="33" placeholder="여행 설명을 입력하세요." class="travel-content read-only travel-input" readonly>${travel.travelContent}</textarea>
                    <button class="fa-solid fa-pen-to-square update-btn" type="button"><!-- 수
                    정버튼 --></button>
                    <button class="fa-solid fa-xmark cancel-btn" type="button"><!-- 취소 --></button>
                </div>
                <span class="last-update-date">${travel.travelDate}</span>
                <button id="share" type="button"><i class="fa-solid fa-arrow-up-from-bracket"></i><span>공유</span></button>
            </div>
            <ul class="travel-list" id="travelList">
                <c:choose>
                    <c:when test="${empty travel.placeList}">   <%-- 여행목록이 비어있으면 --%>
                        <li class="empty-item">
                            <div class="empty-image">
                                <img src="https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg" alt="로고 이미지">
                            </div>
                            <h1>방금 여행을 만들었습니다!</h1>
                            <p>원하는 장소를 저장한 다음 계획을 정리하고 지도에서 볼 수 있습니다.</p>
                        </li>
                    </c:when>
                    <c:otherwise>
                        <c:forEach var="travelPlace" items="${travel.placeList}" varStatus="vs">
                            <li class="travel-item">
                                <a href="/place/detail/${travelPlace.contenttypeid}/${travelPlace.contentid}" target="_blank" class="travel-first-image">
                                <c:choose>
                                    <c:when test="${empty travelPlace.firstimage}">
                                        <img src="/resources/images/common/12.png" alt="장소 썸네일">
                                    </c:when>
                                    <c:otherwise>
                                        <img src="${travelPlace.firstimage}" alt="썸네일">
                                    </c:otherwise>
                                </c:choose>
                                </a>
                                <div class="place-info">
                                    <div class="place-title-area">
                                        <a href="/place/detail/${travelPlace.contenttypeid}/${travelPlace.contentid}" target="_blank">${travelPlace.title}</a>
                                        <button class="fa-solid fa-ellipsis drop-down">
                                            <ul class="drop-down_box">
                                                <li onclick="deleteTravelPlace(${vs.index})" class="deleteTravelPlaceBtn">여행에서 제외</li>
                                            </ul>
                                        </button>
                                    </div>
                                    <div class="review-area">
                                        <div class="rating">
                                            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                            <span class="fill" style="width:${92 * (travelPlace.averageRating * 20) / 100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                        </div>
                                        <span class="review-count">${travelPlace.reviewCount}</span>
                                    </div>
                                    <span class="place-addr">${travelPlace.addr1}</span>
                                </div>
                            </li>
                            <c:if test="${!vs.last}">
                                <div class="distance-area">
                                    <img src="/resources/images/common/distance.png" alt="" class="path">
                                    <div class="distance">
                                        <img src="/resources/images/common/person-walking.png" alt="">
                                        <span class="distance-km">2.1km</span>
                                    </div>
                                </div>
                            </c:if>
                        </c:forEach>
                    </c:otherwise>
                </c:choose>
            </ul>
        </section>
        <section class="travel-create-content" id="toggleArea">
            <form class="scrap-place-search" id="scrapSearch">
                <input type="text" placeholder="검색" class="scrap-place-search-input" id="scrapSearchInput">
                <button type="button" class="fa-solid fa-sort" id="sortBtn" value="1"></button>
                <button hidden></button>
            </form>
            <ul id="scrapPlaceList">
                <c:choose>
                    <c:when test="${empty scrapPlaceList}">
                        <div class="empty-scrap">
                            텅...
                        </div>
                    </c:when>
                    <c:otherwise>
                        <c:forEach var="scrapPlace" items="${scrapPlaceList}" varStatus="vs">
                            <li class="scrap-place-item">
                                <a href="/place/detail/${scrapPlace.contenttypeid}/${scrapPlace.contentid}" class="place-first-image" target="_blank">
                                <%-- 기본이미지 조건문 처리 필요 --%>
                                    <c:choose>
                                        <c:when test="${empty scrapPlace.firstimage}">
                                            <img src="/resources/images/common/12.png" alt="장소 썸네일">
                                        </c:when>
                                        <c:otherwise>
                                            <img src="${scrapPlace.firstimage}" alt="장소 썸네일">
                                        </c:otherwise>
                                    </c:choose>
                                </a>
                                <div class="scrap-place-info">
                                    <div class="place-title-area">
                                        <a href="/place/detail/${scrapPlace.contenttypeid}/${scrapPlace.contentid}" target="_blank">${scrapPlace.title}</a>
                                        <button class="fa-solid fa-ellipsis drop-down">
                                            <ul class="drop-down_box">
                                                <li onclick="addToPlaceTravel(${vs.index})">여행에 추가</li>
                                                <li onclick="deleteScrap(${vs.index})">스크랩 삭제</li>
                                            </ul>
                                        </button>
                                    </div>
                                    <div class="review-area">
                                        <div class="review-area">
                                        <div class="rating">
                                            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                            <span class="fill" style="width:${92 * (scrapPlace.averageRating * 20) / 100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                        </div>
                                        <span class="review-count">${scrapPlace.reviewCount}</span>
                                    </div>
                                    </div>
                                    <span class="place-addr">${scrapPlace.addr1}</span>
                                    <span class="scrap-date">스크랩 날짜: ${scrapPlace.scrapDate}</span>
                                </div>
                            </li>
                        </c:forEach>
                    </c:otherwise>
                </c:choose>
            </ul>
        </section>
    </main>
    <div id="roadViewModal">
        <div id="roadView">
            
        </div>
    </div>
    <script>
        let scrapList = '${jsonScrapPlaceList}';
        let travel = '${jsonTravel}';
        const memberNo = ${loginMember.memberNo};
        
    </script>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ab8d18a2840806f79cff0f4f1542dde4"></script>
    <script src="/resources/js/common/jQuery-core.js"></script>
    <script src="/resources/js/travel/travel-create.js"></script>
</body>
</html>