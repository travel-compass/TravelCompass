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
                </div>
                <div class="input-row">
                    <input type="text" class="travel-title read-only travel-input" maxlength="10" id="travelTitle" name="travelTitle" readonly value="${travel.travelTitle}">
                </div>
                <span class="travel-writer">작성자: <a href="/profile/${travel.memberNo}">${travel.memberNickname}</a></span>
                <div class="input-row">
                    <textarea name="travelContent" id="travelContent" maxlength="33" placeholder="여행 설명을 입력하세요." class="travel-content read-only travel-input" readonly>${travel.travelContent}</textarea>
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
                                    <img src="${travelPlace.firstimage}" alt="썸네일">
                                </a>
                                <div class="place-info">
                                    <div class="place-title-area">
                                        <a href="/place/detail/${travelPlace.contenttypeid}/${travelPlace.contentid}" target="_blank">${travelPlace.title}</a>
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
        <section class="travel-create-content">
            <div id="travelMap">
                
            </div>
        </section>
    </main>
    <div id="roadViewModal">
        <div id="roadView">
            
        </div>
    </div>
    <script>
        let scrapList = '${jsonScrapPlaceList}';
        let travel = '${jsonTravel}';
        const memberNo = '${loginMember.memberNo}';
        
    </script>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    <script src="/resources/js/common/jQuery-core.js"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ab8d18a2840806f79cff0f4f1542dde4"></script>
    <script src="/resources/js/travel/travel-map.js"></script>
    <%-- <script src="/resources/js/travel/travel-create.js"></script> --%>
</body>
</html>