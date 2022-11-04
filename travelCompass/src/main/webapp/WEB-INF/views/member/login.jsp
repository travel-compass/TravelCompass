<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
        <form action="로그인" method="post" name="login-frm" method="post">
            <span class="login-title">Sign in</span>
            <span>or <a href="/member/signUp">Create an account</a></span>
            <div class="input-area">
                <input type="email" name="memberEmail" maxlength="20" autocomplete="off" placeholder="ID-Email">
                <input type="password" maxlength="20" placeholder="Password">
            </div>

            <div class="saveId-area">
                <input name="saveId" type="checkbox" id="saveId"> 
                <label for="saveId"><i class="fa-solid fa-check"></i></label> Remember me
            </div>

            <button class="login-btn">Sign in</button>
            <div class="find-area">
                Forgotten your <a href="/member/findAccount">ID<span>|</span>Password</a>
            </div>
        </form>
    </main>

    <!-- header ---------------------------------------------------------------------->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
</body>
</html>