<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="pagination" value="${placeMap.pagination}"/>


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
    <script src="/resources/js/common/jQuery-core.js"></script>
</head>

<body>
    <jsp:include page="/WEB-INF/views/inc/header.jsp" />
        <main>
            <div class="search">
                
                    <div class="search-input-form">
                        <jsp:include page="/WEB-INF/views/inc/search-form.jsp" />
                        <!--참조용
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
                                    </ul>
                                </c:if> -->
                    </div>
                    
                    <div class="search-filter">
                        <ul>
                            <li>
                                <input type="radio" name="contentTypeId" value="12" id="searchType1" checked class="category">
                                <label for="searchType1"><a id="search-filter">관광지</a></label>
                            </li>
                            <li>
                                <input type="radio" name="contentTypeId" value="14" id="searchType2" class="category">
                                <label for="searchType2"><a id="search-filter">문화시설</a></label>
                            </li>
                            <li>
                                <input type="radio" name="contentTypeId" value="28" id="searchType3" class="category">
                                <label for="searchType3"><a id="search-filter">레포츠</a></label>
                            </li>
                            <li>
                                <input type="radio" name="contentTypeId" value="39" id="searchType4" class="category">
                                <label for="searchType4"><a id="search-filter">음식점</a></label>
                            </li>
                        </ul>
                    </div>
		        </div>
            </div>
            <div class="container-main-wrap">
                <div class="container-main">
                    <section class="search-result">
                        <!--검색 결과가 없을 때 -->
                        <c:choose>
                            <c:when test="${pagination.totalCount == 0}">
                                <div class="search-result-title">
                                    <span id="title-match search-fail">"<span id="title-query">${param.keyword}</span>" 과(와) 일치하는 검색결과가 없습니다 </span>
                                </div>
                            </c:when>
                            <c:when test="${pagination.totalCount != 0}">
                                <div class="search-result-title">
                                    <span id="title-match">"<span id="title-query">${param.keyword}</span>" 과(와) 일치하는 검색결과 </span>
                                </div>
                            </c:when>
                        </c:choose>
                        <div class="search-result-list">
                    
                            <ul class="search-result-list">
                                <!-- <c:choose>
                                    <c:when test="${empty placeMap}">
                                    </c:when>
                                    <c:otherwise>  -->
                                        <!--items의 배열을 place에 저장한다-->
                                        <c:forEach items="${placeMap.placeList}" var="place">
                                            <li>
                                                <div class="search-result-item">

                                                    <div class="search-result-item-img">
                                                        <a href="/place/detail/${place.contentid}/${place.contenttypeid}">
                                                            <c:choose>
                                                                <c:when test="${!empty place.firstimage}">
                                                                    <img src="${place.firstimage}" alt="" width="177px" height="140px">
                                                                </c:when>
                                                                <c:when test="${empty place.firstimage}">
                                                                    <img src="/resources/images/common/${place.contenttypeid}.png" alt="" width="177px" height="140px">
                                                                </c:when>
                                                            </c:choose>
                                                        </a>
                                                    </div>
                                                        
                                                    <div class="search-result-item-content">

                                                        <div class="search-result-item-title">
                                                            <span><a href="/place/detail/${place.contentid}/${place.contenttypeid}">${place.title}</a></span>
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
                                                            <span><a href="/place/detail/${place.contentid}/${place.contenttypeid}">${place.addr1}</a></span>
                                                        </div>
                                                            
                                                        <div class="search-result-item-review">
                                                            <a href="#<!--상세페이지-리뷰-->">"서울사당에서 지하철타면 15분이면 도착하는 과천에 자리잡은 서울대공원은 놀이공원,동물원,식물원등이 있고 호수를 가로지르는 리프트를 타거나 셔틀이 있어서 편하게 이용할수 있고 입장료또한 인터넷으로 예매하면 아주 저렴하게 이용할수 있어서 데이트를 하거나 휴식을 하러가기 아주 좋은곳이고 남녀노소 가족 누구나가 이용하기 좋은 곳이네요
                                                                "</a>
                                                            
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </li> 
                                        </c:forEach>
                                    <!-- </c:otherwise>
                                </c:choose> -->
                            </ul>
                        </div>
                    
                        <div class="pagination-area">
                            <ul class="pagination">
                                
                                <!-- 첫 페이지로 이동 -->
                                <li><a href="/search?keyword=${param.keyword}&contentTypeId=${param.contentTypeId}&areaCode=${param.areaCode}&pageNo=1"
                                    class="arrow pprev">&lt;&lt;</a></li>
                                <!-- 이전 목록 마지막 번호로 이동 -->
                                <li><a href="/search?keyword=${param.keyword}&contentTypeId=${param.contentTypeId}&areaCode=${param.areaCode}&pageNo=${pagination.prevPage}"
                                    class="arrow prev">&lt;</a></li>
                    
                                <c:forEach var="i" begin="${pagination.startPage}" end="${pagination.endPage}" step="1">
                                    <c:choose>
                                        <c:when test="${i==pagination.pageNo}">
                                            <!-- 현재 보고있는 페이지 -->
                                            <li><a class="current">${i}</a></li>
                                        </c:when>
                    
                                        <c:otherwise>
                                            <!-- 현재 페이지를 제외한 나머지 -->
                                            <li><a href="/search?keyword=${param.keyword}&contentTypeId=${param.contentTypeId}&areaCode=${param.areaCode}&pageNo=${i}">${i}</a></li>
                                        </c:otherwise>
                                    </c:choose>
                                </c:forEach>
                    
                                <!-- 다음 목록 시작 번호로 이동 -->
                                <li><a href="/search?keyword=${param.keyword}&contentTypeId=${param.contentTypeId}&areaCode=${param.areaCode}&pageNo=${pagination.nextPage}"
                                    class="arrow next">&gt;</a></li>
                    
                                <!-- 끝 페이지로 이동 -->
                                <li><a href="/search?keyword=${param.keyword}&contentTypeId=${param.contentTypeId}&areaCode=${param.areaCode}&pageNo=${pagination.maxPage}"
                                    class="arrow nnext">&gt;&gt;</a></li>
                    
                            </ul>
                            </div>
                    </section>
                    
                    <div class="side-bar">
                        <div class="search-rank">
                            <div class="search-rank-title">
                                <span>검색어 순위</span>
                            </div>
                            <div class="search-rank-content">
                                <ul>
                                    <c:forEach var="keyword" items="${popularKeyword}" begin="0" end="9" step="1"
                                    varStatus="status">
                                        <li>
                                            <a href="/search?keyword=${keyword}&contentTypeId=12&areaCode=-1">
                                                ${status.index+1}. ${keyword}
                                            </a>
                                        </li>
                                        <!-- <c:if test="${!vs.last}">
                                            <hr>
                                        </c:if> -->
                                    </c:forEach>
                                <!--<li><a href="#">1. ${placeMap.totalCount}</a></li>
                                    <li><a href="#">2. ${placeMap.numOfRows}</a></li>
                                    <li><a href="#">3. ${placeMap.pageNo}</a></li>
                                    <li><a href="#">4.  '검색어'</a></li>
                                    <li><a href="#">5.  '검색어'</a></li>
                                    <li><a href="#">6.  '검색어'</a></li>
                                    <li><a href="#">7.  '검색어'</a></li>
                                    <li><a href="#">8.  '검색어'</a></li>
                                    <li><a href="#">9.  '검색어'</a></li>
                                    <li><a href="#">10. '검색어'</a></li> -->
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
    <script src="/resources/js/search/search.js"></script>
</body>
</html>