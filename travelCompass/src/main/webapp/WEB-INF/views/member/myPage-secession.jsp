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
                <h1 class="main-title">회원 탈퇴</h1>
                <p class="main-sub-title">비밀번호 확인 후 회원 탈퇴를 진행할 수 있습니다.</p>
            </div>

            <form action="/member/secession" method="post">
                <div class="input-row current-member-pw">
                    <label for="currentMemberPw">비밀번호 확인</label>
                    <input type="password" id="currentMemberPw">
                    <span id="currentMemberPwMessage"></span>
                </div>

                <p class="warning-message"><strong>탈퇴한 계정은 복구가 불가능합니다.</strong></p>
                <button class="secession-btn">회원 탈퇴</button>
            </form>
        </section>
        
       
    </main>
    <%-- footer:include --%>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp" />
    <script src="/resources/js/common/jQuery-core.js"></script>
    <script src="/resources/js/member/validate.js"></script>
    <script src="/resources/js/member/myPage.js"></script>
</body>
</html>