<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


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
        <form name="reviewform" class="reviewform" method="post" action="/insert">
          <input type="hidden" name="rate" id="rate" value="0" />
          <!-- <span class="review_id">포댕이김영현</span> -->

          <div class="star-rating">
            <input type="radio" id="5-stars" name="rating" value="5" />
            <label for="5-stars" class="star">&#9679;</label>
            <input type="radio" id="4-stars" name="rating" value="4" />
            <label for="4-stars" class="star">&#9679;</label>
            <input type="radio" id="3-stars" name="rating" value="3" />
            <label for="3-stars" class="star">&#9679;</label>
            <input type="radio" id="2-stars" name="rating" value="2" />
            <label for="2-stars" class="star">&#9679;</label>
            <input type="radio" id="1-star" name="rating" value="1" checked/>
            <label for="1-star" class="star">&#9679;</label>
          </div>

          <div class="review_contents">
            <textarea name="reviewTitle" rows="1" class="review_titlearea" id="reviewTitle"></textarea>
            <textarea name="reviewContent" rows="10" class="review_textarea" id="reviewContent"></textarea>
          </div>
          <div class="cmd" id="addReview">
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

