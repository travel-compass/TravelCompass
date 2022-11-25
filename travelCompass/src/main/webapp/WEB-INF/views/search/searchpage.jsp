<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>searchpage</title>
    <!-- <link rel="stylesheet" href="../css/main-style.css"> -->
    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/search/search.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/72842759a7.js" crossorigin="anonymous"></script>
</head>

<body>
    <jsp:include page="/WEB-INF/views/inc/header.jsp" />
        <main>
            <div class="search">
                
                    <div class="search-input-form">
                        <form action="/place/searchPlaceKeyword" class="search-form" >
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
                    </div>	
                    
                    <div class="search-filter">
                        <ul>
                            <li><input type="radio" name="contentTypeId" value="12" id="searchType1" checked>
                                <label for="searchType1">관광지</label></li>
                            <li><input type="radio" name="contentTypeId" value="14" id="searchType2">
                                <label for="searchType2">문화시설</label></li>
                            <li><input type="radio" name="contentTypeId" value="28" id="searchType3">
                                <label for="searchType3">레포츠</label></li>
                            <li><input type="radio" name="contentTypeId" value="39" id="searchType4">
                                <label for="searchType4">음식점</label></li>
                        </ul>
                    </div>
		        </div>
            </div>
            <div class="container-main-wrap">
                <div class="container-main">
                    <section class="search-result">
                        <div class="search-result-title">
                            <span id="title-match">"<span id="title-query">${param.keyword}</span>" 과(와) 일치하는 검색결과 </span>
                        </div>
                        <div class="search-result-list">
                            
                            <ul class="search-result-list">
                                <c:choose>
                                    <c:when test="${empty placeList}">
                                        <li class="search-result-item">
                                            <div class="search-result-item-content">
                                                <div class="search-result-item-title">
                                                    <span>검색 결과가 없습니다.</span>
                                                </div>
                                            </div>
                                        </li>
                                    </c:when>
                                    <c:otherwise>
                                        
                                        <c:forEach items="${placeList}" var="place">
                                            <li>
                                                <div class="search-result-item">

                                                    <div class="search-result-item-img">
                                                        <a href="#<!--상세페이지 최상단-->">
                                                            <img src="${place.firstimage}" alt="" width="177px" height="140px">
                                                        </a>
                                                    </div>
                                                        
                                                    <div class="search-result-item-content">

                                                        <div class="search-result-item-title">
                                                            <span><a href="#<!--상세페이지-최상단-->">${place.title}</a></span>
                                                        </div>

                                                        <div class="search-result-item-grade">
                                                            <span><a href="#<!--상세페이지-리뷰-->">
                                                                <i class="fa-solid fa-circle" style = "color: #00AA6C"></i>
                                                                <i class="fa-solid fa-circle" style = "color: #00AA6C"></i>
                                                                <i class="fa-solid fa-circle" style = "color: #00AA6C"></i>
                                                                <i class="fa-solid fa-circle" style = "color: #00AA6C"></i>
                                                                <i class="fa-solid fa-circle-half-stroke" style = "color: #00AA6C"></i>
                                                                </a></span>
                                                            <span><a href="#<!--상세페이지-리뷰-->">267건의 리뷰</a></span>
                                                        </div>
                                                            
                                                        <div class="search-result-item-address">
                                                            <span><a href="#<!--상세페이지-최상단-->">${place.addr1}</a></span>
                                                        </div>
                                                            
                                                        <div class="search-result-item-review">
                                                            <span><a href="#<!--상세페이지-리뷰-->">"서울사당에서 지하철타면 15분이면 도착하는 과천에 자리잡은 서울대공원은 놀이공원,동물원,식물원등이 있고 호수를 가로지르는 리프트를 타거나 셔틀이 있어서 편하게 이용할수 있고 입장료또한 인터넷으로 예매하면 아주 저렴하게 이용할수 있어서 데이트를 하거나 휴식을 하러가기 아주 좋은곳이고 남녀노소 가족 누구나가 이용하기 좋은 곳이네요
                                                                "</a>
                                                            </span>
                                                        </div>
                                                    
                                                    </div>
                                                    
                                                </div>
                                            </li> 
                                        </c:forEach>
                                    </c:otherwise>
                                </c:choose>
                            </ul>
                        </div>
                        <div class="show-more">
                            <span><a href="#<!--검색 페이지(리스트 아이템30개)-->" class="show-more-text">더보기</a></span>
                            <span ><i class="fa-solid fa-caret-down"></i></span>
                        </div>
                        <div class="page-select">
                            <button class="page-select-before">이전</button>
                            <div>
                                <a href="#" class="page-select-btn">1</a>
                                <a href="#" class="page-select-btn">2</a>
                                <a href="#" class="page-select-btn">3</a>
                                <a href="#" class="page-select-btn">4</a>
                                <a href="#" class="page-select-btn">5</a>
                                <span class="page-select-btn">...</span>
                                <a href="#" class="page-select-btn">6</a>
                            </div>
                            <button class="page-select-next">다음</button>
                        </div>
                    </section>
                    
                    <div class="side-bar">
                        <div class="search-rank">
                            <div class="search-rank-title">
                                <span>검색어 순위</span>
                            </div>
                            <div class="search-rank-content">
                                <ul>
                                    <li><a href="#">1.  '검색어'</a></li>
                                    <li><a href="#">2.  '검색어'</a></li>
                                    <li><a href="#">3.  '검색어'</a></li>
                                    <li><a href="#">4.  '검색어'</a></li>
                                    <li><a href="#">5.  '검색어'</a></li>
                                    <li><a href="#">6.  '검색어'</a></li>
                                    <li><a href="#">7.  '검색어'</a></li>
                                    <li><a href="#">8.  '검색어'</a></li>
                                    <li><a href="#">9.  '검색어'</a></li>
                                    <li><a href="#">10. '검색어'</a></li>
                                </ul>
                            </div>
                    </div>
                </div> 
            
            </div>
        </div>
        <jsp:include page="/WEB-INF/views/inc/footer.jsp" />
        
    </main>    
    <div class="blur-box" id="blurBox"></div>

    <script src="/resources/js/common/search-form.js"></script>
</body>
</html>