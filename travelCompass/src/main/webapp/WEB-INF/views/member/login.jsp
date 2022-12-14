<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 페이지</title>
    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/member/login.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>
    
    <!-- header ---------------------------------------------------------------------->
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    
    <main>
        <form action="/member/login" method="post" name="login-frm" method="post">
            <span class="login-title">Sign in</span>
            <span>or <a href="/member/signUp">Create an account</a></span>
            <div class="input-area">
                <input type="email" name="memberEmail" maxlength="30" autocomplete="off" placeholder="ID-Email" value="${cookie.saveId.value}">
                <input type="password" name="memberPw" maxlength="20" placeholder="Password">
            </div>

            <c:if test="${not empty cookie.saveId.value }">
            	<c:set var="checked" value="checked"/>
            </c:if>
            <div class="saveId-area">
                <input name="saveId" type="checkbox" id="saveId" ${checked }> 
                <label for="saveId"><i class="fa-solid fa-check"></i></label> Remember me
            </div>

            <button class="login-btn">Sign in</button>
            <div class="find-area">
                Forgotten your <a href="/member/findEmail">ID</a><span>|</span><a href="/member/findPw">Password</a>
            </div>
        </form>
    </main>

    <!-- header ---------------------------------------------------------------------->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
</body>
</html>