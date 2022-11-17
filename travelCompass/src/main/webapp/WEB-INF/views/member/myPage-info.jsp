<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내 정보</title>
    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/member/myPage.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>
    <%-- header:include --%>
    <jsp:include page="/WEB-INF/views/inc/header.jsp" />

    <main>
        <%-- myPage-side:include --%>
        <jsp:include page="/WEB-INF/views/member/myPage-side.jsp" />

        <section class="myInfo-main">
            <div class="myInfo-header">
                <h1 class="main-title">내 계정</h1>
                <p class="main-sub-title">개인 정보를 아래에서 추가 및 편집할 수 있습니다.</p>
                <button type="button" id="modifyBtn">편집모드</button>
                <a href="/member/changePw" id="changePwBtn">비밀번호 변경</a>
            </div>
            
            <form action="/member/updateInfo" class="myInfo-form" name="myInfo-form" method="POST">
                <div class="main-left-column">
                    <div class="input-row">
                        <label for="">이름</label>
                        <input type="text" id="memberName" name="memberName" autocomplete="off" readonly class="input-read-only" maxlength="5" value="${loginMember.memberName}">
                        <span class="input-row-message" id="memberNameMessage"></span>
                    </div>
                    <div class="input-row">
                        <label for="">이메일</label>
                        <input type="text" id="memberEmail" name="memberEmail" autocomplete="off" readonly class="input-read-only" maxlength="6" value="${loginMember.memberEmail}">
                        <span class="input-row-message" id="memberEmailMessage"></span>
                    </div>
                    <div class="input-row address-input">
                        <div class="address-row">
                            <label>주소</label>
                            <button type="button" id="addressSearch" class="hide">검색</button>
                        </div>
                        
                        <c:set var="address" value="${fn:split(loginMember.memberAddress, ',,') }"/>

                        <input type="text" id="postCode" name="memberAddress" autocomplete="off" readonly class="input-read-only" value="${address[0] }">
                        
                        <input type="text" id="address" name="memberAddress" autocomplete="off" readonly class="input-read-only" value="${address[1] }">

                        <input type="text" id="detailAddress" name="memberAddress" autocomplete="off" readonly class="writable input-read-only" value="${address[2] }">
                    </div>
                </div>
                <div class="main-right-column">
                    <div class="input-row">
                        <label for="">닉네임</label>
                        <input type="text" class="writable input-read-only" id="memberNickname" name="memberNickname" autocomplete="off" readonly maxlength="6" value="${loginMember.memberNickname}">
                        <span class="input-row-message" id="memberNicknameMessage"></span>
                    </div>
                    <div class="input-row">
                        <label for="">전화번호</label>
                        <input class="writable input-read-only" type="text" id="memberTel" name="memberTel" autocomplete="off" readonly maxlength="11" value="${loginMember.memberTel}">
                        <span class="input-row-message" id="memberTelMessage"></span>
                    </div>
                    <div class="input-row">
                        <label for="">가입일</label>
                        <input type="text" id="enrollDate" name="enrollDate" autocomplete="off" readonly class=input-read-only value="${loginMember.enrollDate}">
                    </div>

                    <button id="submitBtn">변경하기</button>
                </div>
            </form>
        </section>
    </main>
    <%-- footer:include --%>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp" />

    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script src="/resources/js/member/validate.js"></script>
    <script src="/resources/js/member/myPage.js"></script>
</body>
</html>