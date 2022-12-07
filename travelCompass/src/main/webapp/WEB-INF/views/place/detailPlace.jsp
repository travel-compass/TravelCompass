<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
  <link rel="stylesheet" href="/resources/css/inc/header.css">
  <link rel="stylesheet" href="/resources/css/place/detailPlace.css">
  <link rel="stylesheet" href="/resources/css/place/review.css">
  <link rel="stylesheet" href="/resources/css/place/QnA.css">
  <link rel="stylesheet" href="/resources/css/inc/footer.css">
  <script src="https://kit.fontawesome.com/72842759a7.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

</head>

<body>
  <script>
    const mapx="${place.mapx}";
    const mapy="${place.mapy}";
    const loginMemberNo="${loginMember.memberNo}";
    const memberNickname="${loginMember.memberNickname}"
    const contentid="${place.contentid}";
    const firstimage="${place.firstimage}";
    const addr1="${place.addr1}";
    const contenttypeid="${place.contenttypeid}";
    const title="${place.title}"
    const avgRating="${place.averageRating}"
    
    const loginMemberNo = "${ loginMember.memberNo }";
  </script>
  <!-- header:include -->
	<jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>

  <main>
    <!-- 이미지 섹션 -->
    <section>
      <div class="gallery">
        <div class="swiper-container gallery-slider">
          <div class="swiper-wrapper">
            <c:forEach items="${place.imageList}" var="img">
              <div class="swiper-slide"><img src="${img}" alt=""></div>        
            </c:forEach>
          </div>
          <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </div>

        <div class="swiper-container gallery-thumbs">
          <div class="swiper-wrapper">
            <c:forEach items="${place.imageList}" var="img">
              <div class="swiper-slide"><img src="${img}" alt=""></div>        
            </c:forEach>
          </div>
        </div>
      </div>
    </section>

    <!-- 정보 섹션 -->
    <section>
      <div class="info-header">
        <h1><span>${place.title}</span></h1>
        <span class="like-area">
          <%-- scrapCheck가 없다면 ==로그인X또는 좋아요X --%>
          <c:if test="${empty scrapCheck}">
              <!-- 빈 스크랩 모양 -->
              <i class="fa-regular fa-bookmark" id=placeScrap></i>                         
          </c:if>
          <%-- scrapCheck가 있다면 == 로그인O, 좋아요O --%>
          <c:if test="${not empty scrapCheck}">
              <!-- 채워진 모양 -->
              <i class="fa-solid fa-bookmark" id=placeScrap></i> 
          </c:if>
        </span>  
      </div>

      <div class="review-area">
        <div class="review-container">
          <div class="rating">
            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
            <span class="fill" style="width:${69*(place.averageRating*20)/100}px;">
            &#9679;&#9679;&#9679;&#9679;&#9679;</span>
          </div>
            <span class="review-count"> ${place.averageRating} / ${place.reviewCount} 건의 리뷰</span>
      </div>

      <hr>

      <div class="info-content">
        <span class="info-detail-content"><i class="fa-solid fa-location-dot"></i></span>
        <span>${place.addr1}</span><br>
        <c:if test="${!empty place.tel}">
          <span class="info-detail-content"><i class="fa-solid fa-phone"></i></span>
          <span>${place.tel}</span><br>
        </c:if>
        <c:if test="${!empty place.treatmenu}">
          <span class="info-detail-content"><i class="fa-solid fa-utensils"></i></span>
          <span>${place.treatmenu}</span><br>
        </c:if>
        <c:if test="${!empty place.usetime}">
          <span class="info-detail-content"><i class="fa-solid fa-clock"></i></span>
          <span>${place.usetime}</span><br>
        </c:if>
        <c:if test="${!empty place.usefee}">
          <span class="info-detail-content"><i class="fa-solid fa-money-check-dollar"></i></span>
          <span>${place.usefee}</span><br>
        </c:if>
        <c:if test="${!empty place.restdate}">
          <span class="info-detail-content"><i class="fa-solid fa-calendar-days"></i></span>
          <span>${place.restdate}</span><br>
        </c:if>
        <c:if test="${!empty place.infocenter}">
          <span class="info-detail-content"><i class="fa-solid fa-phone"></i></span>
          <span>${place.infocenter}</span><br>
        </c:if>
        <c:if test="${!empty place.homepage}">
          <span class="info-detail-content"><i class="fa-solid fa-link"></i></span>
          <span>${place.homepage}</span>
        </c:if>
      </div>

      <hr>

      <div class="info-overview">
        <p>
          ${place.overview}
        </p>
      </div>
    </section>

    <hr>

    <!-- 지도 섹션 -->
    <section class="map-section">
      <div 주변장소>
        <div class="around-container">
          <div class="around-list">
            <div >
              <span class="aCategory">관광지</span>
              <c:forEach var="tourPlace" items="${aroundPlaceList.tourPlace}">
                <li class="around-item">
                  <div class="search-result-item">

                      <div class="search-result-item-img">
                          <a href="/place/detail/${tourPlace.contenttypeid}/${tourPlace.contentid}">
                              <c:choose>
                                  <c:when test="${!empty tourPlace.firstimage}">
                                      <img src="${tourPlace.firstimage}" alt="" width="90px" height="80px">
                                  </c:when>
                                  <c:when test="${empty tourPlace.firstimage}">
                                      <img src="/resources/images/common/${tourPlace.contenttypeid}.png" alt="" width="90px" height="80px">
                                  </c:when>
                              </c:choose>
                          </a>
                      </div>
                      
                      <div class="search-result-item-content">

                          <div class="search-result-item-title">
                              <span><a href="/place/detail/${tourPlace.contenttypeid}/${tourPlace.contentid}">${tourPlace.title}</a></span>
                          </div>

                          <div class="search-result-item-grade">
                              <div class="a-rating">
                                  <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                  <span class="fill" style="width:${69*(tourPlace.averageRating*20)/100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                              </div>
                              <span><a href="/place/detail/${tourPlace.contenttypeid}/${tourPlace.contentid}">${tourPlace.reviewCount}</a></span>
                          </div>
                              
                          <div class="search-result-item-address">
                              <span><a href="/place/detail/${tourPlace.contenttypeid}/${tourPlace.contentid}">${tourPlace.addr1}</a></span>
                          </div>
                              
                          <div class="search-result-item-review">
                              ${tourPlace.dist}
                          </div>
                      </div>
                  </div>
                </li> 
                 
              </c:forEach>        
            </div>

            <!--  -->
            <div>
              <span class="aCategory">문화</span>
              <c:forEach var="culturePlace" items="${aroundPlaceList.culturePlace}">
                 <li class="around-item">
                  <div class="search-result-item">

                      <div class="search-result-item-img">
                          <a href="/place/detail/${culturePlace.contenttypeid}/${culturePlace.contentid}">
                              <c:choose>
                                  <c:when test="${!empty culturePlace.firstimage}">
                                      <img src="${culturePlace.firstimage}" alt="" width="90px" height="80px">
                                  </c:when>
                                  <c:when test="${empty culturePlace.firstimage}">
                                      <img src="/resources/images/common/${culturePlace.contenttypeid}.png" alt="" width="90px" height="80px">
                                  </c:when>
                              </c:choose>
                          </a>
                      </div>
                      
                      <div class="search-result-item-content">

                          <div class="search-result-item-title">
                              <span><a href="/place/detail/${culturePlace.contenttypeid}/${culturePlace.contentid}">${culturePlace.title}</a></span>
                          </div>

                          <div class="search-result-item-grade">
                              <div class="a-rating">
                                  <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                  <span class="fill" style="width:${69*(culturePlace.averageRating*20)/100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                              </div>
                              <span>${culturePlace.reviewCount}</span>
                          </div>
                              
                          <div class="search-result-item-address">
                              <span><a href="/place/detail/${culturePlace.contenttypeid}/${culturePlace.contentid}">${culturePlace.addr1}</a></span>
                          </div>
                              
                          <div class="search-result-item-review">
                              ${culturePlace.dist}
                          </div>
                      </div>
                  </div>
                </li> 
              </c:forEach>
            </div>
            <!--  -->

          </div>
          <div class="around-list">
            <div>
              <span class="aCategory">음식점</span>
              <c:forEach var="foodPlace" items="${aroundPlaceList.foodPlace}">
                <li class="around-item">
                  <div class="search-result-item">

                      <div class="search-result-item-img">
                          <a href="/place/detail/${foodPlace.contenttypeid}/${foodPlace.contentid}">
                              <c:choose>
                                  <c:when test="${!empty foodPlace.firstimage}">
                                      <img src="${foodPlace.firstimage}" alt="" width="90px" height="80px">
                                  </c:when>
                                  <c:when test="${empty foodPlace.firstimage}">
                                      <img src="/resources/images/common/${foodPlace.contenttypeid}.png" alt="" width="90px" height="80px">
                                  </c:when>
                              </c:choose>
                          </a>
                      </div>
                      
                      <div class="search-result-item-content">

                          <div class="search-result-item-title">
                              <span><a href="/place/detail/${foodPlace.contenttypeid}/${foodPlace.contentid}">${foodPlace.title}</a></span>
                          </div>

                          <div class="search-result-item-grade">
                              <div class="a-rating">
                                  <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                  <span class="fill" style="width:${69*(foodPlace.averageRating*20)/100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                              </div>
                              <span><a href="/place/detail/${foodPlace.contenttypeid}/${foodPlace.contentid}">${foodPlace.reviewCount}</a></span>
                          </div>
                              
                          <div class="search-result-item-address">
                              <span><a href="/place/detail/${foodPlace.contenttypeid}/${foodPlace.contentid}">${foodPlace.addr1}</a></span>
                          </div>
                              
                          <div class="search-result-item-review">
                              ${foodPlace.dist}
                          </div>
                      </div>
                  </div>
                </li> 
              </c:forEach>
            </div>
            <div>
              <span class="aCategory">레포츠</span>
              <c:forEach var="leisurePlace" items="${aroundPlaceList.leisurePlace}">
                <li class="around-item">
                  <div class="search-result-item">

                      <div class="search-result-item-img">
                          <a href="/place/detail/${leisurePlace.contenttypeid}/${leisurePlace.contentid}">
                              <c:choose>
                                  <c:when test="${!empty leisurePlace.firstimage}">
                                      <img src="${leisurePlace.firstimage}" alt="" width="90px" height="80px">
                                  </c:when>
                                  <c:when test="${empty leisurePlace.firstimage}">
                                      <img src="/resources/images/common/${leisurePlace.contenttypeid}.png" alt="" width="90px" height="80px">
                                  </c:when>
                              </c:choose>
                          </a>
                      </div>
                      
                      <div class="search-result-item-content">

                          <div class="search-result-item-title">
                              <span><a href="/place/detail/${leisurePlace.contenttypeid}/${leisurePlace.contentid}">${leisurePlace.title}</a></span>
                          </div>

                          <div class="search-result-item-grade">
                              <div class="a-rating">
                                  <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                  <span class="fill" style="width:${69*(leisurePlace.averageRating*20)/100}px;">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                              </div>
                              <span><a href="/place/detail/${leisurePlace.contenttypeid}/${leisurePlace.contentid}">${leisurePlace.reviewCount}</a></span>
                          </div>
                              
                          <div class="search-result-item-address">
                              <span><a href="/place/detail/${leisurePlace.contenttypeid}/${leisurePlace.contentid}">${leisurePlace.addr1}</a></span>
                          </div>
                              
                          <div class="search-result-item-review">
                              ${leisurePlace.dist}
                          </div>
                      </div>
                  </div>
                </li> 
              </c:forEach>
            </div>
          </div>
        </div>
      </div>

      <div class="map">
        <span><i class="fa-solid fa-map-location-dot"></i></span>
        <div id="map"></div>
      </div>
    </section>

    <hr>

    <nav class="boardNav">
      <ul>
        <li>
          <input type="radio" name="boardNav" id="reviewBoard" checked>
          <label for="reviewBoard" id="moveReview"><a id="boardNav1">리뷰</a></label>
        </li>
        <li>
          <input type="radio" name="boardNav" id="qnaBoard">
          <label for="qnaBoard" id="moveQna"><a id="boardNav1">Q&A</a></label>
        </li>
      </ul>
    </nav>

    <%-- 리뷰 섹션 --%>

    <jsp:include page="/WEB-INF/views/place/review.jsp"></jsp:include>

    <%-- <jsp:include page="/WEB-INF/views/place/QnA.jsp"></jsp:include> --%>
  

  </main>
  <div id="roadViewModal">
    <div id="roadView">
        
    </div>
  </div>
  <!-- footer:include -->
  <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>

  <!-- 카카오지도 api script -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d960da26337b79bb7d208d7a89db4003"></script>
  <script src="/resources/js/common/jQuery-core.js"></script>
  <script src="/resources/js/place/detailPlace.js"></script>
  <script src="/resources/js/place/review.js"></script>
  <%-- <script src="/resources/js/place/QnA.js"></script> --%>
	<script src="/resources/js/place/swiper.js"></script>
</body>

</html>