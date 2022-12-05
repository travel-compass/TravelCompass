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
        <form name="reviewform" class="reviewform" id="reviewform">
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
            <button type="button">등록</button>
          </div>
        </form>
      </div>


      
        <ul class="review-list" id="review-list">
          <c:forEach var="review" items="${reviewMap.reviewList}">
            <li class="user-page-review-colums2">
              <div class="user-page-review-header-style">
                
                <div class="user-page-review-header-layout">
                  <a href="#" class="review-user-image"><img src="${review.profileImage}" alt="프로필 이미지"></a>
                  <div class="review-user-info-layout">
                    <span class="review-user-nickname"><a href="#">${review.memberNickname}</a></span>
                    <a href="#" class="review-user-dday">
                        ${review.reviewDate}
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
                <div class="review-title">${review.reviewTitle}</div>
                <div class="review-content">${review.reviewContent}</div>
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
        </ul>
      </c:forEach>


            <div class="page-select">
              <button class="page-select-before">이전</button>
              <div class="pageNumber">
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

