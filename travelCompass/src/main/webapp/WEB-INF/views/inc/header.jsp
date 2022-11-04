<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<header>
    <section class="left-column">
    <a href="/">
        <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="" width="200px">
    </a>
        <!-- <span>Tripadvisor</span> -->
    </section>
    <section class="right-column">
        <ul class="header-nav">
            <li><a href="프로필페이지/리뷰"><i class="fa-solid fa-pen"></i>리뷰</a></li>
            <li><a href="여행 만들기 페이지"><i class="fa-solid fa-bell"></i>여행</a></li>
        </ul>

        <!-- 로그아웃 상태라면 -->
        <a href="/member/login" class="header-login">로그인</a>
        <a href="/member/signUp" class="header-signUp">가입</a>
        <!-- 로그인 상태라면 -->
        <!-- <div class="profile-img">
            <label for="header-menu-toggle">
                <img src="/resources/images/ben__song2.jpg" alt="프로필 이미지">
            </label>
            <input type="checkbox" id="header-menu-toggle">
            <div class="top-down-menu">
                <ul>
                    <li><a href="내정보 확인 이동">내 정보</a></li>
                    <li><a href="프로필 페이지 이동">마이 프로필</a></li>
                    <li><a href="로그아웃페이지 이동">로그아웃</a></li>
                </ul>
            </div>
        </div> -->
    </section>
</header>