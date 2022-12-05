<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/main-style.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <link rel="stylesheet" href="/resources/css/swiper.min.css">

    <title>Travelcompass</title>
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
    <script src="/resources/js/common/jQuery-core.js"></script>
</head>
<body>
    <!-- header:include -->
	<jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    <main>
        <div class="search-area" id="searchArea">
            <%-- <form action="/search" class="search-form" id="searchForm">
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
                    <label class="search-keyword-title">인기 검색어</label>
                    <ol class="popular-keyword-list">
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
                    </ol>
                
                </div>
            </form> --%>
            <%-- search-form.jsp include --%>
            <jsp:include page="/WEB-INF/views/inc/search-form.jsp"></jsp:include>

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="/resources/images/main-image1.png" alt="메인 이미지"></div>
                    <div class="swiper-slide"><img src="/resources/images/main-image2.png" alt="메인 이미지"></div>
                    <div class="swiper-slide"><img src="/resources/images/main-image3.png" alt="메인 이미지"></div>
                    <div class="swiper-slide"><img src="/resources/images/main-image4.png" alt="메인 이미지"></div>
                    <div class="swiper-slide"><img src="/resources/images/main-image5.png" alt="메인 이미지"></div>
                </div>
            </div>

        </div>
        
        <%-- <div class="resent-keyword-area">
            <span class="resent-keyword-title">최근 검색어</span>
            <ul class="resent-keyword-list" id="resentKeywordList">
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>라스베이거스</a>

                </li>
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>서울</a></li>
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>동대문</a></li>
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>부산 해운대</a></li>
            </ul>
        </div> --%>
        <section class="place-list-area">
            <div class="place-area" id="placeArea">
                <script src="/resources/js/main-place.js"></script>
                <%-- <span class="place-area-title">최근에 본 장소</span>
                <div class="slide-container">
                    <span class="prev-arrow"><i class="fa-solid fa-arrow-left"></i></span>
                    <span class="next-arrow"><i class="fa-solid fa-arrow-right"></i></span>
                    <ul class="place-list">
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소1</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소2</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소3</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소4</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소5</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소6</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소7</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소8</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소9</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">최근에 본 장소10</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div> --%>
            </div>
        </section>
    </main>
    <!-- footer:include -->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    

    <div class="blur-box" id="blurBox"></div>
    <script src="/resources/js/main.js"></script>
    <script src="/resources/js/common/search-form.js"></script>
    <script src="/resources/js/swiper.min.js"></script>
</body>
</html>