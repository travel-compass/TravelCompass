<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<header>
    <section class="left-column">
    <a href="/">
        <img src="/resources/images/common/logo.png" alt="로고 이미지" width="300px">
    </a>
        <!-- <span>Tripadvisor</span> -->
    </section>
    <section class="right-column">
        <ul class="header-nav">
            <li><a href="프로필페이지/리뷰"><i class="fa-solid fa-pen"></i>리뷰</a></li>
            <li><a href="/travel/main"><i class="fa-solid fa-bell"></i>여행</a></li>
        </ul>

		<c:choose>
			<%-- 로그인 상태라면--%>
			<c:when test="${not empty loginMember}">
				<div class="profile-img">
		            <label for="header-menu-toggle">
		                <img src="${loginMember.profileImage}" alt="프로필 이미지">
		            </label>
		            <input type="checkbox" id="header-menu-toggle">
		            <div class="top-down-menu">
		                <ul>
		                    <li><a href="내정보 확인 이동">내 정보</a></li>
		                    <li><a href="프로필 페이지 이동">마이 프로필</a></li>
		                    <li><a href="/member/logout">로그아웃</a></li>
		                </ul>
		            </div>
		        </div>
			</c:when>
			<%-- 로그인 상태가 아니라면 --%>
			<c:otherwise>		        
		        <a href="/member/login" class="header-login">로그인</a>
        		<a href="/member/signUp" class="header-signUp">가입</a>		
			</c:otherwise>
		</c:choose>      
    </section>
</header>