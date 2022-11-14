<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/member/change-pw.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
    <title>비밀번호 찾기 - 비밀번호 변경</title>
</head>
<body>

    <%-- header:include --%>
    <jsp:include page="/WEB-INF/views/inc/header.jsp" />


    <main>
        <h1>비밀번호 변경</h1>

        <form action="/member/changePw" id="changePwForm">

            <label for="currentMemberPw">
                현재 비밀번호 확인
            </label>
            <div class="input-row">
                <input type="password" name="currentMemberPw" id="currentMemberPw">
                <span id="currentMemberPwCheck">비밀번호 확인</span>
            </div>
            <span id="currentMemberPwMessage">영어, 숫자, 특수문자(!,@,#,-,_) 6 ~ 20 글자 사이로 입력해주세요.</span>


            <label for="memberPw">
                새 비밀번호
            </label>
            <div class="input-row">
                <input type="password" name="memberPw" id="memberPw">
                <button type="button" id="memberPwBtn" class="fa-solid fa-eye visiable-btn"></button>
            </div>
            <span id="memberPwMessage">영어, 숫자, 특수문자(!,@,#,-,_) 6 ~ 20 글자 사이로 입력해주세요.</span>

            <label for="memberPwConfirm">
                새 비밀번호 확인
            </label>
            <div class="input-row">
                <input type="password" name="memberPwConfirm" id="memberPwConfirm">
                <button type="button" id="memberPwConfirmBtn" class="fa-solid fa-eye visiable-btn"></button>
            </div>
            <span id="memberPwConfirmMessage"></span>

            <button id="changePwBtn">비밀번호 변경</button>
        </form>
    </main>


    <%-- footer:include --%>
    <jsp:include page="/WEB-INF/views/inc/footer.jsp" />

    <script src="/resources/js/common/jQuery-core.js"></script>
    <script src="/resources/js/member/changePw.js"></script>
</body>
</html>