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
    const mapx=${place.mapx};
    const mapy=${place.mapy};
    const memberNo="${loginMember.memberNo}";
    const memberNickname="${loginMember.memberNickname}"
    const contentid="${place.contentid}";
    const firstimage="${place.firstimage}";
    const addr1="${place.addr1}";
    const contenttypeid="${place.contenttypeid}";
    const title="${place.title}"
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
        <div class="review-area">
          <div class="rating">
            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
            <span class="fill" style="width:${92*(place.averageRating*20)/100}px;">
            &#9679;&#9679;&#9679;&#9679;&#9679;</span>
          </div>
        <span class="review-count">${place.reviewCount}</span>
      </div>

      <div class="info-content">
        <span class="info-detail-content"><i class="fa-solid fa-location-dot"> </i> 주소: </span><span>${place.addr1}
          1</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="info-detail-content"><i class="fa-solid fa-phone"></i> 전화번호 : </span>
        <span>${place.tel}</span><br>
        <span class="info-detail-content"><i class="fa-solid fa-clock"></i> 이용 시간 : </span>
        <span>${place.usetime}</span><br>
        <span class="info-detail-content"><i class="fa-solid fa-calendar-days"></i> 쉬는날 : </span><span>${place.restdate}</span>
      </div>

      <div class="info-overview">
        <p>
          ${place.overview}
        </p>
      </div>
    </section>

    <!-- 지도 섹션 -->
    <section class="map-section">
      <div 주변장소>
        <div class="around-container">
          <div class="around-list">
            <div>관광지
              <c:forEach var="tourPlace" items="${aroundPlaceList.tourPlace}">
                
                  <div class="search-result-item">
                    <div class="search-result-item-img">
                      <a href="/place/detail/${tourPlace.contenttypeid}/${tourPlace.contentid}">
                        <img class="aitem-image" src="${tourPlace.firstimage}" alt=""></a>
                    </div>

                    <div class="search-result-item-content">
                      <div class="search-result-item-title">
                        <span><a
                            href="#">${tourPlace.title}</a></span>
                      </div>

                      <div class="review-area">
                        <div class="review-area">
                          <div class="rating">
                            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                            <span class="fill" style="width:${92*(tourPlace.averageRating*20)/100}px;">
                            &#9679;&#9679;&#9679;&#9679;&#9679;</span>
                          </div>
                        <span class="review-count">${tourPlace.reviewCount}</span>
                      </div>

                      <div class="search-result-item-dist">
                        <span><a href="#">${tourPlace.dist}</a></span>
                      </div>
                    </div>
                  </div>
                 
              </c:forEach>        
            </div>

            <!--  -->
            <div>문화
              <c:forEach var="culturePlace" items="${aroundPlaceList.culturePlace}">
                <div class="search-result-item">
                  <div class="search-result-item-img">
                    <a href="#">
                      <img class="aitem-image" src="${culturePlace.firstimage}" alt=""></a>
                  </div>

                  <div class="search-result-item-content">
                    <div class="search-result-item-title">
                      <span><a href="#">${culturePlace.title}</a></span>
                    </div>

                    <div class="review-area">
                        <div class="review-area">
                          <div class="rating">
                            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                            <span class="fill" style="width:${92*(culturePlace.averageRating*20)/100}px;">
                            &#9679;&#9679;&#9679;&#9679;&#9679;</span>
                          </div>
                        <span class="review-count">${culturePlace.reviewCount}</span>
                      </div>

                    <div class="search-result-item-dist">
                      <span><a href="#">${culturePlace.dist}</a></span>
                    </div>
                  </div>
                </div>
              </c:forEach>
            </div>
            <!--  -->

          </div>
          <div class="around-list">
            <div>음식점
              <c:forEach var="foodPlace" items="${aroundPlaceList.foodPlace}">
                <div class="search-result-item">
                  <div class="search-result-item-img">
                    <a href="#">
                      <img class="aitem-image" src="${foodPlace.firstimage}"></a>
                  </div>

                  <div class="search-result-item-content">
                    <div class="search-result-item-title">
                      <span><a
                          href="#">${foodPlace.title}</a></span>
                    </div>

                    <div class="review-area">
                        <div class="review-area">
                          <div class="rating">
                            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                            <span class="fill" style="width:${92*(foodPlace.averageRating*20)/100}px;">
                            &#9679;&#9679;&#9679;&#9679;&#9679;</span>
                          </div>
                        <span class="review-count">${foodPlace.reviewCount}</span>
                      </div>

                    <div class="search-result-item-dist">
                      <span><a href="#">${foodPlace.dist}</a></span>
                    </div>
                  </div>
                </div>
              </c:forEach>
            </div>
            <div>레포츠
              <c:forEach var="leisurePlace" items="${aroundPlaceList.leisurePlace}">
                <div class="search-result-item">
                  <div class="search-result-item-img">
                    <a href="#">
                      <img class="aitem-image" src="${leisurePlace.firstimage}" alt=""></a>
                  </div>

                  <div class="search-result-item-content">
                    <div class="search-result-item-title">
                      <span><a
                          href="#">${leisurePlace.title}</a></span>
                    </div>

                    <div class="review-area">
                        <div class="review-area">
                          <div class="rating">
                            <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                            <span class="fill" style="width:${92*(leisurePlace.averageRating*20)/100}px;">
                            &#9679;&#9679;&#9679;&#9679;&#9679;</span>
                          </div>
                        <span class="review-count">${leisurePlace.reviewCount}</span>
                      </div>

                    <div class="search-result-item-dist">
                      <span><a href="#">${leisurePlace.dist}</a></span>
                    </div>
                  </div>
                </div>
              </c:forEach>
            </div>
          </div>
        </div>
      </div>

      <div class="map">
        <span><i class="fa-solid fa-map-location-dot">지도</i></span>
        <div id="map" style="border: 1px solid black"></div>
      </div>
    </section>

    <nav review>
      <ul class="list-group">
        <li><a href="">리뷰</a></li>
        <li><a href="">QnA</a></li>
      </ul>
    </nav>

    <%-- 리뷰 섹션 --%>
    <jsp:include page="/WEB-INF/views/place/review.jsp"></jsp:include>

    <%-- QnA 섹션 --%>
    <jsp:include page="/WEB-INF/views/place/QnA.jsp"></jsp:include>
  

  </main>

  <!-- footer:include -->
  <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>

  <!-- 카카오지도 api script -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d960da26337b79bb7d208d7a89db4003"></script>
  <script src="/resources/js/common/jQuery-core.js"></script>
  <script src="/resources/js/place/detailPlace.js"></script>
  <script src="/resources/js/place/review.js"></script>
  <script src="/resources/js/place/QnA.js"></script>
	<script src="/resources/js/place/swiper.js"></script>
</body>

</html>