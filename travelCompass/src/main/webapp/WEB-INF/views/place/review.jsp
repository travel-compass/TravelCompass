<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<div class="review-container">
  <div class="review-left">
    <ul>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <span>${place.countRating[4]} 건</span>
    </ul>
    <ul>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <span>${place.countRating[3]} 건</span>
    </ul>
    <ul>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <span>${place.countRating[2]} 건</span>
    </ul>
    <ul>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <span>${place.countRating[1]} 건</span>
    </ul>
    <ul>
      <i class="fa-solid fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <i class="fa-regular fa-circle" style="color: #34E0A1"></i>
      <span>${place.countRating[0]} 건</span>
    </ul>

  </div>
  <div class="review-right" id="review-right">

    <div id=wrapContainer>
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
                  <a href="/profile/${review.memberNo}" class="review-user-image"><img src="${review.profileImage}" alt="프로필 이미지"></a>
                  <div class="review-user-info-layout">
                    <span class="review-user-nickname"><a href="/profile/${review.memberNo}">${review.memberNickname}</a></span>
                    <a href="/profile/${review.memberNo}" class="review-user-dday">
                        ${review.reviewDate}
                    </a>
                  </div>
                </div>

                <c:if test="${loginMember.memberNo eq review.memberNo}">
                  <button class="user-page-review-dot-style"><i class="fa-solid fa-ellipsis"></i></button>
                  <div class="user-page-review-dot-down-menu">
                      <ul class="down-menu">
                          <li>수정</li>
                          <li onclick="deleteReview(${review.reviewNo})">삭제</li>
                      </ul>
                  </div>
                </c:if>

              </div>

              <div class="review-area">
                <div class="review-container">
                  <div class="rating">
                    <span class="empty">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                    <span class="fill" style="width:${69*(review.rating*20)/100}px;">
                    &#9679;&#9679;&#9679;&#9679;&#9679;</span>
                  </div>
                </div>  
              </div>

              <div class="review-title">${review.reviewTitle}</div>
              <div class="review-content">${review.reviewContent}</div>
              <%-- <div class="review-title"><textarea name="updateReivewTitle" id="updateReivewTitle" class=updateReview rows="1"></textarea></div>
              <div class="review-content"><textarea name="updateReviewContent" id="updateReviewContent" class=updateReview rows="10"></textarea></div> --%>
              
              <div class="review-support"></div>
              <div class="review-bottom-menu-style">
                <div class="save-button" onclick="reviewLike(${review.reviewNo}, ${review.memberNo}, loginMemberNo)">
                  <c:if test="${empty review.likeCheck}">
                    <i class="fa-regular fa-heart"></i>좋아요<span class="likeCount">${review.reviewLike}</span>
                  </c:if>                  
                  <c:if test="${not empty review.likeCheck}">
                    <i class="fa-solid fa-heart"></i>좋아요 <span class="likeCount">${review.reviewLike}</span>
                  </c:if>
                </div>

                <div class="share-button" onclick="insertReport(${review.reviewNo}, ${review.memberNo}, loginMemberNo )">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>신고
                </div>
              </div>
            </li>
      </c:forEach>
        </ul>


            <%-- <div class="page-select">
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
            </div> --%>
      <div class=moreButton>
        <button type="button" class="moreBtn" id="moreBtn">더 보기</button>    
      </div>
    </div>
   
  </div>

</div>

