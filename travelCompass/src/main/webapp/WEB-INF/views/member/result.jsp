<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>결과</title>

    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/member/result.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>
    <%-- header:include -------------------------------------------%>
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>

    <main>
        <!-- 이전 요청이 아이디찾기 였다면 -->
        <p class="result-message"><span id="memberName">김영현</span>님의 회원 아이디</p>
        <div class="result-box">
            "kyh991023@gmail.com"
        </div>
        <div class="btn-box">
            <a href="/member/login">로그인</a>
            <a href="/member/findAccount">비밀번호 찾기</a>
        </div>

        <!-- 이전 요청이 비밀번호 찾기 였다면 -->
        <!-- <p class="result-message">비밀번호를 변경하시겠습니까?</p>
        
        <div class="btn-box">
            <a href="/">메인으로</a>
            <a href="/member/changePw">비밀번호 변경</a>
        </div> -->
    </main>









    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    <%-- footer:include -------------------------------------------%>
</body>
</html>