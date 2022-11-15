<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>계정 찾기</title>
    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/member/find-account.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>
    <!--------------------- header:include --------------------->
    <jsp:include page="/WEB-INF/views/inc/header.jsp" />

    <main>
        <%-- 아이디 찾기 --%>
        <form action="/member/findEmail" method="post" name="findId-frm" id="findEmailForm">
            <h1 class="find-area-title">아이디 찾기</h1>
            
            <label for="memberName">
                이름
            </label>
            <div class="find-input-area">
                <input type="text" name="memberName" id="memberName" maxlength="5" autocomplete="off">
            </div>

            <label for="memberRRN">
                주민등록번호
            </label>
            <div class="find-input-area">
                <input type="text" name="memberRRN" maxlength="6" autocomplete="6" id="memberRRN">
                    <span>&minus;</span>
                <input type="password" name="memberRRN" maxlength="7" id="memberRRN2">
            </div>


            <button class="login-btn">아이디 찾기</button>
        </form>
    </main>

    <!--------------------- footer:include --------------------->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp" />

    <script src="/resources/js/member/validate.js"></script>
</body>
</html>