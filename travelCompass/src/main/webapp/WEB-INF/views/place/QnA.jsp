<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<div id="comment-area">
    <!-- 질문 목록 -->
    <div class="comment-list-area">
        
        <ul id="comment-list">

            <c:forEach var="question" items="${questionMap.questionList}">
                <li class="comment-row  <c:if test="${question.parentNo != 0 }"> child-comment </c:if>">
                    <p class="comment-writer">

                        <c:if test="${empty question.profileImage}">
                            <!-- 프로필 이미지가 없을 경우 -->
                            <img src="/resources/images/user.png">
                        </c:if>

                        <c:if test="${!empty question.profileImage}">
                            <!-- 프로필 이미지가 있을 경우 -->
                            <img src="${question.profileImage}">
                        </c:if>

                        <span>${question.memberNickname}</span>
                        <span class="comment-date">(${question.questionDate})</span>
                    </p>
                    
                    <p class="comment-content">${question.questionContent}</p>

                    <%-- 로그인 상태일 경우에 답글 버튼 노출 --%>
                    <c:if test="${!empty loginMember}">
                        <div class="comment-btn-area">
                            <%-- this==클릭된 답글 버튼 --%>
                            <button onclick="showInsertComment(${question.questionNo},this)">답글</button>   

                          <%-- 로그인회원==댓글 작성자 같으면 수정/삭제 버튼 노출 --%>   
                          <c:if test="${loginMember.memberNo == question.memberNo}">
                                  <button onclick="showUpdateComment(${question.questionNo},this)">수정</button>
                                  <button onclick="deleteComment(${question.questionNo})">삭제</button>
                          </c:if>
                          
                        </div>
                    </c:if>

                </li>
            </c:forEach>
            
        </ul>
    </div>
    

    <!-- 답변 작성 부분 -->
    <div class="comment-write-area">
        <textarea id="commentContent"></textarea>
        <button id="addComment">
            답변<br>
            등록
        </button>

    </div>

</div>