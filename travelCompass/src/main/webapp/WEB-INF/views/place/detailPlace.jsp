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
  <link rel="stylesheet" href="/resources/css/inc/footer.css">
  <script src="https://kit.fontawesome.com/72842759a7.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
</head>

<body>
  <script>
    const mapx=${place.mapx};
    const mapy=${place.mapy};
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
        <span class="place-scrap">
          <!-- 빈 하트 모양 -->
          <i class="fa-regular fa-heart" id="boardLike"></i>
          <!-- 채워진 모양 -->
          <!-- <i class="fa-solid fa-heart" id="boardLike"></i>  -->
        </span>
      </div>

      <div class="avg-rating">
        <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
        <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
        <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
        <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
        <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
      </div>

      <div class="info-content">
        <span class="info-detail-content"><i class="fa-solid fa-location-dot"> </i> 주소: </span><span>${place.addr1}
          1</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="info-detail-content"><i class="fa-solid fa-phone"></i> 전화번호 : </span>
        <span>${place.tel}</span><br>
        <span class="info-detail-content"><i class="fa-solid fa-clock"></i> 이용 시간 : </span>
        <span>${place.usetime}</span>&nbsp;&nbsp;&nbsp;&nbsp;
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

                      <div class="search-result-item-grade">
                        <span><a href="#<!--상세페이지-리뷰-->">
                            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                            <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i>
                          </a></span>
                        <span><a href="#">267건의 리뷰</a></span>
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

                    <div class="search-result-item-grade">
                      <span><a href="#<!--상세페이지-리뷰-->">
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i>
                        </a></span>
                      <span><a href="#">267건의 리뷰</a></span>
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

                    <div class="search-result-item-grade">
                      <span><a href="#<!--상세페이지-리뷰-->">
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i>
                        </a></span>
                      <span><a href="#"></a></span>
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

                    <div class="search-result-item-grade">
                      <span><a href="#">
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
                          <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i>
                        </a></span>
                      <span><a href="#">267건의 리뷰</a></span>
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

    <!-- 리뷰섹션 -->
    <section>
      <div class="review-container">
        <div class="review-left">
          <ul>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <span>훌륭함 100</span>
          </ul>
          <ul>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <span>매우좋음 70</span>
          </ul>
          <ul>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <span>보통 50</span>
          </ul>
          <ul>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <span>형편없음 20</span>
          </ul>
          <ul>
            <i class="fa-solid fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <i class="fa-regular fa-circle" style="color: #00AA6C"></i>
            <span>최악 10</span>
          </ul>

        </div>
        <div class="review-right">

          <div>
            <div class="wrap">
              <h4>별점과 리뷰를 남겨주세요</h4>
              <form name="reviewform" class="reviewform" method="post" action="/save">
                <input type="hidden" name="rate" id="rate" value="0" />
                <!-- <span class="review_id">포댕이김영현</span> -->

                <div class="review_rating">
                  <div class="warning_msg">별점을 선택해 주세요.</div>
                  <div class="rating">
                    <!-- 해당 별점을 클릭하면 해당 별과 그 왼쪽의 모든 별의 체크박스에 checked 적용 -->
                    <input type="checkbox" name="rating" id="rating1" value="1" class="rate_radio" title="1점">
                    <label for="rating1"></label>
                    <input type="checkbox" name="rating" id="rating2" value="2" class="rate_radio" title="2점">
                    <label for="rating2"></label>
                    <input type="checkbox" name="rating" id="rating3" value="3" class="rate_radio" title="3점">
                    <label for="rating3"></label>
                    <input type="checkbox" name="rating" id="rating4" value="4" class="rate_radio" title="4점">
                    <label for="rating4"></label>
                    <input type="checkbox" name="rating" id="rating5" value="5" class="rate_radio" title="5점">
                    <label for="rating5"></label>
                  </div>
                </div>
                <div class="review_contents">
                  <div class="warning_msg">5자 이상으로 작성해 주세요.</div>
                  <textarea rows="1" class="review_titlearea"></textarea>
                  <textarea rows="10" class="review_textarea"></textarea>
                </div>
                <div class="cmd">
                  <button>등록</button>
                </div>
              </form>
            </div>

            <ul class="review-list">
            <c:choose>
              <%-- 게시글 목록이 있으면서 사진이 없을 경우 --%>
                <c:when test="${(map.listCount > 0) && (empty map.reviewList[0].reviewImagePath)}">
                  <!-- 첫번째 리뷰 테이블 -->
                  <li class="user-page-review-colums2">
                    <div class="user-page-review-header-style">
                      <div class="user-page-review-header-layout">
                        <a href="#" class="review-user-image"><img src="${map.reviewList[0].profileImage}"
                            alt="프로필 이미지"></a>
                        <div class="review-user-info-layout">
                          <span class="review-user-nickname"><a href="#">${map.reviewList[0].memberNickname}</a>님의
                            리뷰</span>
                          <a href="#" class="review-user-dday">
                            0000년 0월
                          </a>
                        </div>
                      </div>
                      <div class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i></div>
                      <div class="user-page-review-dot-down-menu">
                        <ul class="down-menu">
                          <li><a href="#">수정</a></li>
                          <li><a href="#">삭제</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="review-data-table-style">
                      <div class="review-point">
                        <span><i class="fa-solid fa-circle"></i></span>
                        <span><i class="fa-solid fa-circle"></i></span>
                        <span><i class="fa-solid fa-circle"></i></span>
                        <span><i class="fa-solid fa-circle"></i></span>
                        <span><i class="fa-solid fa-circle"></i></span>
                      </div>
                      <div class="review-title">리뷰 제목</div>
                      <div class="review-content">"좌석수가 많지 않은지 잘 모르겠으나 대기시간이 엄청 났고
                        느끼기에 종업원들이 대기손님을 대하는 태도가 별로였다.
                        손님을 잡으려기는 커녕 오히려 그냥 가세요 하는 태도.
                        그외에 카페는 분위기와 위치 뛰어났다"</div>
                      <div class="review-date">
                        <span class="rdt">방문 날짜 :</span>
                        2019년 12월
                      </div>
                    </div>
                    <div class="review-navi-style">
                      <div class="review-navi-layout">
                        <a href="#" class="review-navi-left">
                          <div>
                            <img src="/resources/images/profile/venis.webp">
                          </div>
                          <div class="review-navi-title">
                            <div>배니스</div>
                            <div class="review-navi-deep">
                              <div class="review-navi-deep-point">
                                <span><i class="fa-solid fa-circle"></i></span>
                                <span><i class="fa-solid fa-circle"></i></span>
                                <span><i class="fa-solid fa-circle"></i></span>
                                <span><i class="fa-solid fa-circle"></i></span>
                                <span><i class="fa-solid fa-circle"></i></span>
                              </div>
                              <div>00건의 리뷰</div>
                            </div>
                            <div>배니스, 이탈리아</div>
                          </div>
                        </a>
                        <div class="review-navi-right">
                          <i class="fa-solid fa-heart"></i>
                        </div>
                      </div>
                    </div>
                    <div class="review-support"></div>
                    <div class="review-bottom-menu-style">
                      <div class="suport-button">
                        <i class="fa-regular fa-thumbs-up"></i>도움이 됨
                      </div>
                      <div class="save-button">
                        <i class="fa-solid fa-heart"></i>저장
                      </div>
                      <div class="share-button">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>공유
                      </div>
                    </div>
                  </li>
                </c:when>


                <%-- 리뷰도 있고 사진도 있을 경우 --%>
                  <c:otherwise>
                    <!-- 두번째 리뷰 테이블 (사진 슬라이드 넣어보기) -->
                    <li class="user-page-review-colums2">
                      <div class="user-page-review-header-style">
                        <div class="user-page-review-header-layout">
                          <a href="#" class="review-user-image"><img src="${map.reviewList[0].profileImage}"
                              alt="프로필 이미지"></a>
                          <div class="review-user-info-layout">
                            <span class="review-user-nickname"><a href="#">${map.reviewList[0].memberNickname}</a>님의
                              리뷰</span>
                            <a href="#" class="review-user-dday">
                              0000년 0월
                            </a>
                          </div>
                        </div>
                        <div class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i></div>
                        <div class="user-page-review-dot-down-menu">
                          <ul class="down-menu">
                            <li><a href="#">수정</a></li>
                            <li><a href="#">삭제</a></li>
                          </ul>
                        </div>
                      </div>


                      <div class="review-data-table-style">
                        <div class="review-point">
                          <span><i class="fa-solid fa-circle"></i></span>
                          <span><i class="fa-solid fa-circle"></i></span>
                          <span><i class="fa-solid fa-circle"></i></span>
                          <span><i class="fa-solid fa-circle"></i></span>
                          <span><i class="fa-solid fa-circle"></i></span>
                        </div>
                        <div class="review-title">리뷰 제목</div>
                        <div class="review-content">"좌석수가 많지 않은지 잘 모르겠으나 대기시간이 엄청 났고
                          느끼기에 종업원들이 대기손님을 대하는 태도가 별로였다.
                          손님을 잡으려기는 커녕 오히려 그냥 가세요 하는 태도.
                          그외에 카페는 분위기와 위치 뛰어났다"</div>
                        <div class="review-date">
                          <span class="rdt">방문 날짜 :</span>
                          2019년 12월
                        </div>
                      </div>
                      <div class="review-navi-style">
                        <div class="review-navi-layout">
                          <a href="#" class="review-navi-left">
                            <div>
                              <img src="/resources/images/profile/venis.webp">
                            </div>
                            <div class="review-navi-title">
                              <div>배니스</div>
                              <div class="review-navi-deep">
                                <div class="review-navi-deep-point">
                                  <span><i class="fa-solid fa-circle"></i></span>
                                  <span><i class="fa-solid fa-circle"></i></span>
                                  <span><i class="fa-solid fa-circle"></i></span>
                                  <span><i class="fa-solid fa-circle"></i></span>
                                  <span><i class="fa-solid fa-circle"></i></span>
                                </div>
                                <div>00건의 리뷰</div>
                              </div>
                              <div>배니스, 이탈리아</div>
                            </div>
                          </a>
                          <div class="review-navi-right">
                            <i class="fa-solid fa-heart"></i>
                          </div>
                        </div>
                      </div>
                      <div class="review-support">n개의 도움이 되는 리뷰</div>
                      <div class="review-bottom-menu-style">
                        <div class="suport-button">
                          <i class="fa-regular fa-thumbs-up"></i>도움이 됨
                        </div>
                        <div class="save-button">
                          <i class="fa-solid fa-heart"></i>저장
                        </div>
                        <div class="share-button">
                          <i class="fa-solid fa-arrow-up-from-bracket"></i>공유
                        </div>
                      </div>
                    </li>
                  </c:otherwise>
                  </c:choose>

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
          </div>
          </ul>
        </div>
      </div>
      <!-- QnA 게시판 -->
      <div id="comment-area" style="border: 3px solid hotpink;">
        <!-- 댓글 목록 -->
        <div class="comment-container">
          <div class="comment-list-area">

            <ul id="comment-list">

              <c:forEach var="comment" items="${board.commentList}">
                <li class="comment-row  <c:if test=" ${comment.parentNo !=0}>"> 메인 댓글제목 </c:if>">
                  <p class="comment-writer">

                    <c:if test="${empty review.profileImage}">
                      <!-- 프로필 이미지가 없을 경우 -->
                      <img src="/resources/images/user.png">
                    </c:if>

                    <c:if test="${!empty review.profileImage}">
                      <!-- 프로필 이미지가 있을 경우 -->
                      <img src="${comment.profileImage}">
                    </c:if>

                    <span>${review.memberNo}</span>
                    <span class="comment-date">2022-12-25</span>
                  </p>

                  <p class="comment-content">${review.reviewContent}</p>

                  <!-- <%-- 로그인 상태일 경우에 답글 버튼 노출 --%> -->
                  <c:if test="${!empty loginMember}">
                    <div class="comment-btn-area">
                      <!-- <%-- this==클릭된 답글 버튼 --%> -->
                      <button onclick="showInsertComment(${comment.commentNo},this)">답글</button>

                      <!-- <%-- 로그인회원==댓글 작성자 같으면 수정/삭제 버튼 노출 --%> -->
                      <c:if test="${loginMember.memberNo == comment.memberNo}">
                        <button onclick="showUpdateComment(${comment.commentNo},this)">수정</button>
                        <button onclick="deleteComment(${comment.commentNo})">삭제</button>
                      </c:if>

                    </div>
                  </c:if>

                </li>
              </c:forEach>

            </ul>
          </div>

          <!-- 댓글 작성 부분 -->
          <div class="comment-write-area">
            <textarea id="commentContent" rows="5"></textarea>
            <button id="addComment">
              댓글<br>
              등록
            </button>
          </div>

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

  </main>

  <!-- footer:include -->
  <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>

  <!-- 카카오지도 api script -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d960da26337b79bb7d208d7a89db4003"></script>

  <script src="/resources/js/place/detailPlace.js"></script>
	<script src="/resources/js/place/swiper.js"></script>
</body>

</html>