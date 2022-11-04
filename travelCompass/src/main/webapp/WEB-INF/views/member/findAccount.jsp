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
        <form action="아이디 찾기" method="post" name="findId-frm">
            <span class="find-area-title">아이디 찾기</span>
            
            <div class="input-area">
                <label for="memberName">이름</label>
                <input type="text" id="memberName" name="memberName" maxlength="5" autocomplete="off">

                <label for="">주민등록번호</label>
                <div class="input-row rrn-input">    
                    <input type="text" name="rrn" maxlength="6" autocomplete="6" placeholder="주민등록번호 앞자리">
                    <span>&minus;</span>
                    <input type="password" name="rrn" maxlength="7" placeholder="주민등록번호 뒷자리">
                </div>
            </div>

            <button class="login-btn">아이디 찾기</button>
        </form>

        <form action="비밀번호 찾기" method="post" name="findPw-frm">
            <span class="find-area-title">비밀번호 찾기</span>
            
            <div class="input-area">
                <label for="memberEmail">이메일</label>
                <div class="input-row">
                    <input type="text" id="memberEmail" name="memberEmail" maxlength="20" autocomplete="off" placeholder="이메일 형식으로 입력해주세요">
                    <button type="button">인증번호 받기</button>
                </div>
                <span class="confirm-message error">이메일 형식이 아닙니다.</span>

                <label for="confirm-code">인증번호</label>
                <div class="input-row">    
                    <input type="text" id="confirm-code" name="confirm-code" maxlength="5" autocomplete="off" >
                    <button type="button">인증번호 확인</button>
                </div>
                <span class="confirm-message error">인증번호가 일치하지 않습니다.</span>
            </div>

            <button class="login-btn">비밀번호 찾기</button>
        </form>
    </main>

    <!--------------------- footer:include --------------------->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp" />
</body>
</html>