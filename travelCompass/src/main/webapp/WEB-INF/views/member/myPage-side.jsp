<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<section class="myInfo-side">
    <div class="side-profile">
        <div class="profile-image">
            <img src="${loginMember.profileImage}" alt="프로필 이미지">
        </div>
        <div class="member-nickname">${loginMember.memberNickname}</div>
    </div>
    <ul class="side-menu">
        <li id="info"><a href="/member/info">내 계정</a></li>
        <li id="secession"><a href="/member/secession">회원 탈퇴</a></li>
    </ul>
</section>