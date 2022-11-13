<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
        <p class="result-message"><span id="memberName">${memberName }</span>님의 회원 아이디</p>
        
        <c:choose>
        	<c:when test="${not empty result }">
        		<div class="result-box">
            		"${result}"
        		</div>
        		
        		<div class="btn-box">
		            <a href="/member/login">로그인</a>
		            <a href="/member/findPw">비밀번호 찾기</a>
		        </div>
        	</c:when>
        	<c:otherwise>
        		<div class="result-box">
            		"일치하는 회원정보가 존재하지않습니다."
        		</div>
        	
        		<div class="btn-box">
		            <a href="/">메인페이지</a>
		            <a href="/member/findEmail">아이디 찾기</a>
		        </div>
        	</c:otherwise>
        </c:choose>

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