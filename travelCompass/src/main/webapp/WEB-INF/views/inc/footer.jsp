<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<footer>
    <section>
        <div class="footer-logo">
            <img src="/resources/images/common/footer-logo.png" alt="">
        </div>
        <div class="footer-content">
            <span>© 2022 Tripadvisor LLC All rights reserved.</span>
            <ul class="footer-nav">
                <li><a href="이용 약관">이용 약관</a></li>
                <li><a href="개인정보 수집 및 이용약관">개인정보 수집 및 이용 약관</a></li>
                <li><a href="문의하기">문의하기</a></li>
            </ul>
        </div>
    </section>
    <section class="footer-explanation">
        <p>KH 정보교육원 교육과정 중 중간프로젝트 트립어드바이저 클론버전 입니다. </p>
    </section>
</footer>

<c:if test="${not empty message }">
	<script>
		alert("${message}");
	</script>
</c:if>