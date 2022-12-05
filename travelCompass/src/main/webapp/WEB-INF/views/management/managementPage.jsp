<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 페이지</title>
    <link rel="stylesheet" href="../resources/css/inc/header.css">
    <link rel="stylesheet" href="../resources/css/management/management.css">
    <link rel="stylesheet" href="../resources/css/inc/footer.css">

    <script src="https://kit.fontawesome.com/72842759a7.js" crossorigin="anonymous"></script>
    <script src="/resources/js/common/jQuery-core.js"></script>

</head>
<body>
    <jsp:include page="/WEB-INF/views/inc/header.jsp" />
    <main>
        <div class="management-content">
            <div class="left-side">
                <ul class="management-list">
                    <li>
                        <input type="radio" name="managementType" value="1" id="managementType1" checked >
                        <label for="managementType1"><a class="managementType1">신고 리뷰 조회</a></label>
                    </li>
                    <li>
                        <input type="radio" name="managementType" value="2" id="managementType2" >
                        <label for="managementType2"><a class="managementType2">블라인드 리뷰 리스트</a></label>
                    </li>
                    <li>
                        <input type="radio" name="managementType" value="3" id="managementType3" >
                        <label for="managementType3"><a class="managementType3">강퇴 회원 조회</a></label>
                    </li>
                </ul>
            </div>

            <div class="right-side">
                <ul>
                    <li >
                        <div class="management-detail">

                            <div class="member-no">
                                회원번호
                            </div>
                            
                            <div class="review-content">
                                대충 광고내용이 작성된 리뷰
                            </div>
                        </div>
                    </li>  
                </ul>
            </div>
        </div>

    <jsp:include page="/WEB-INF/views/inc/footer.jsp" />
    </main>
    <script src="/resources/js/management/management.js"></script>
</body>
</html>