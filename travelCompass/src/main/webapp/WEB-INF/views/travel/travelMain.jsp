<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>여행</title>

    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/travel/travel-main.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- header:include -->
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    
    <!-- main -->
    <main>
        <h1 class="main-title">여행</h1>
        <div class="travel-container">
            <ul class="travel-nav">
                <li>
                    <input type="radio" id="totalTravel" name="travelCategory" checked>
                    <label for="totalTravel">
                        <span>모든 여행</span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="privateTravel" name="travelCategory">
                    <label for="privateTravel">
                        <span>여행(비공개)</span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="publicTravel" name="travelCategory">
                    <label for="publicTravel">
                        <span>여행(공개)</span>
                    </label>
                </li>
            </ul>
            <ul id="travel-list">
                <!-- 첫번째 요소 무조건 고정 -->
                <c:if test="${loginMember.memberNo eq memberNo }">
                    <li id="plusTravel">
                        <div>
                            <i class="fa-solid fa-circle-plus"></i>
                            <span>여행 만들기</span>
                        </div>
                    </li>
                </c:if>

                <c:forEach var="travel" items="${travelList}">
                <li class="travel-item">
                    <div>
                        <a href="/travel/detail/${travel.travelNo}">
                            <!-- position absolute 화면 전체 덮기 -->
                        </a>
                        <!-- 썸네일 이미지 -->
                        <div class="travel-first-image">
                            <c:choose>
                                <c:when test="${empty travel.travelFirstImage}">
                                    <img src="/resources/images/common/compass.png" art="" />
                                </c:when>
                                <c:otherwise>
                                    <img src="${travel.travelFirstImage}" alt="">
                                </c:otherwise>
                            </c:choose>
                        </div>
    
                        <!-- 여행 제목, 작성자 -->
                        <div class="travel-description">
                            <div>
                                <span class="travel-title">${travel.travelTitle}</span>
                            </div>
                            <div>
                                작성자: <a href="/profile/${memberNo}" class="travel-writer">${travel.memberNickname}</a>
                            </div>
                        </div>
    
                        <!-- 여행의 장소 갯수 -->
                        <div class="travel-place-count">
                            포함: <span class="">${travel.travelPlaceCount}개의 장소</span>
                        </div>

                        <!-- 접근범위 -->
                        <div class="access-scope-area">
                            <div class="access-profile-image">
                                <a href="/profile/${memberNo}">
                                    <img src="${travel.profileImage}" alt="">
                                </a>
                            </div>
                            <c:choose>
                                <c:when test="${travel.privateFlag eq 'N'}">
                                    <div class="access-scope-public">
                                        <span><i class="fa-solid fa-lock-open"></i></span>
                                    </div>
                                </c:when>
                                <c:otherwise>
                                    <div class="access-scope-private">
                                        <span class="private"><i class="fa-solid fa-lock"></i></span>
                                    </div>
                                </c:otherwise>
                            </c:choose>
                            <!-- 비공개 일경우 -->
                        </div>
                    </div>
                </li>    
                </c:forEach>
                <!-- 데이터갯수에 따라 동적으로 생성되는 리스트 아이템 --> 
            </ul>
        </div>
    </main>

    <div class="modal-container" id="travelModal">
        <div class="modal-create-travel">
            <div class="modal-header">
                <div class="modal-title">
                    <i class="fa-solid fa-plane"></i>
                    <span>여행 만들기</span>
                </div>
                <div class="modal-close" id="modalClose">&times;</div>
            </div>
            <form action="" method="get" name="createTravelForm" id="createTravelForm">
                <label for="travelTitle" class="travel-title">여행 이름</label>
                <input type="text" id="travelTitle" name="travelTitle" maxlength="9">
                <span class="max-length"><span id="maxLength">0</span>/10자</span>

                <label class="scope-label">여행 공개 범위 선택하기</label>
                <label for="privateScope" class="scope-radio-label">
                    <input type="radio" name="scope" id="privateScope" checked value="Y">
                    <i class="fa-solid fa-lock"></i>
                    <div class="scope-description">
                        <span>비공개</span>
                        <span>다른 사용자 및 회원에게 표시되지 않습니다.</span>
                    </div>
                </label>
                <label for="publicScope" class="scope-radio-label">
                    <input type="radio" name="scope" id="publicScope" value="N">
                    <i class="fa-solid fa-unlock"></i>
                    <div class="scope-description">
                        <span>공개</span>
                        <span>트립어드바이저 사용자 및 회원에게 표시되지 않습니다.</span>
                    </div>
                </label>
                
                <button id="travelBtn">만들기</button>
            </form>
        </div>
    </div>
    <!-- footer:include -->
    <script>
        const memberNo = '${loginMember.memberNo}'
        const hostNo = ${memberNo}

        console.log(memberNo);
        console.log(hostNo);
    </script>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    <script src="/resources/js/common/jQuery-core.js"></script>
    <script src="/resources/js/travel/travel-main.js"></script>
</body>
</html>