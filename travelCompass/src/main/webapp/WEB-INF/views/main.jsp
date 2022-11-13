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
</head>
<body>
    <!-- header:include -->
	<jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    <main>
        <div class="search-area ">
            <form action="#" class="search-form">
                <div class="search-input-box">
                    <button id="search-btn" class="fa-solid fa-magnifying-glass"></button>
                    <input id="search-input" type="search" placeholder="어디로 가시나요?" name="searchKeyword" autocomplete="off">
                </div>
                <div class="search-keyword-area">
                    <a href="#">
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
            </form>
            
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
        
        <div class="resent-keyword-area">
            <span class="resent-keyword-title">최근 검색어</span>
            <ul class="resent-keyword-list">
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>라스베이거스</a>

                </li>
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>서울</a></li>
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>동대문</a></li>
                <li class="item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>부산 해운대</a></li>
            </ul>
        </div>
        <section class="place-list-area">
            <div class="place-area">
                <span class="place-area-title">최근에 본 장소</span>
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

                </div>
            </div>
    
            <div class="place-area">
                <span class="place-area-title">주변을 둘러보세요</span>
                <div class="slide-container">
                    <span class="prev-arrow"><i class="fa-solid fa-arrow-left"></i></span>
                    <span class="next-arrow"><i class="fa-solid fa-arrow-right"></i></span>
                    <ul class="place-list">
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소1</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소2</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소3</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소4</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소5</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <%-- <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소6</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소7</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소8</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소9</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li>
                        <li class="place-item">
                            <a href="해당 장소에 대한 상세페이지(자바스크립트로 queryString 생성)">
                                <img src="/resources/images/main-sample.jpg">
                                <span class="place-title">주변 장소10</span>
                                <div class="grade">
                                    <span>평점</span>
                                    <span>리뷰 갯수</span>
                                </div>
                            </a>
                        </li> --%>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <!-- footer:include -->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
    

    <div class="blur-box"></div>
    
    <script src="/resources/js/main.js"></script>
    <script src="/resources/js/swiper.min.js"></script>
</body>
</html>