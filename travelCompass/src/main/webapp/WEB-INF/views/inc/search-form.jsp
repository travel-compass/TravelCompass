<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<form action="/search" class="search-form" id="searchForm">
    <div class="search-input-box">
        <button id="search-btn" class="fa-solid fa-magnifying-glass"></button>
        <input id="search-input" type="search" placeholder="어디로 가시나요?" name="keyword" autocomplete="off">
    </div>

    <div class="search-keyword-area">
        <div class="search-option-area">
            <input type="radio" name="contentTypeId" value="12" id="12" checked>
            <label for="12">관광지</label>
            
            <input type="radio" name="contentTypeId" value="14" id="14">
            <label for="14">문화시설</label>
            
            <input type="radio" name="contentTypeId" value="28" id="28">
            <label for="28">레포츠</label>
            
            <input type="radio" name="contentTypeId" value="39" id="39">
            <label for="39">음식점</label>

            <select name="areaCode" id="areaCode">
                <option value="-1">지역(전체)</option>
                <option value="1">서울</option>
                <option value="2">인천</option>
                <option value="3">대전</option>
                <option value="4">대구</option>
                <option value="5">광주</option>
                <option value="6">부산</option>
                <option value="7">울산</option>
                <option value="8">세종특별자치시</option>
                <option value="31">경기도</option>
                <option value="32">강원도</option>
                <option value="33">충청북도</option>
                <option value="34">충청남도</option>
                <option value="35">경상북도</option>
                <option value="36">경상남도</option>
                <option value="37">전라북도</option>
                <option value="38">전라남도</option>
                <option value="39">제주도</option>
            </select>
        </div>
        <a href="/location/aroundSearch?" id="aroundSearch">
            <i class="fa-solid fa-location-arrow"></i>
            <span>주변</span>
        </a>
        <c:if test="${not empty popularKeyword}">
            <label class="search-keyword-title">인기 검색어</label>
            <ul class="popular-keyword-list">
                <c:forEach var="keyword" items="${popularKeyword}" varStatus="vs">
                    <a href="/search?keyword=${keyword}&contentTypeId=12&areaCode=-1">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${keyword}</span>
                    </a>
                    <c:if test="${!vs.last}">
                        <hr>
                    </c:if>
                </c:forEach>
                <!-- <a href="">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>라스베이거스</span>
                </a>
                <hr>
                <a href="">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>서울</span>
                </a>
                <hr>
                <a href="">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>동대문</span>
                </a>
                <hr>
                <a href="">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>부산 해운대</span>
                </a> -->
            </ul>
        </c:if>
        
    
    </div>
</form>