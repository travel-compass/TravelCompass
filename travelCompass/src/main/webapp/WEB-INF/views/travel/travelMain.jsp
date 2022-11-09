<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>여행</title>

    <link rel="stylesheet" href="/resources/css/inc/header.css">
    <link rel="stylesheet" href="/resources/css/travel/travel-main.css">
    <link rel="stylesheet" href="/resources/css/inc/footer.css">
    <script src="https://kit.fontawesome.com/3fe30a9b47.js" crossorigin="anonymous"></script>
</head>
<body>

    <!-- header:include -->
    <jsp:include page="/WEB-INF/views/inc/header.jsp"></jsp:include>
    
    <!-- main -->
    <main>
        <h1 class="main-title">여행</h1>
        <div class="travel-container">
            <ul class="travel-nav">
                <li>
                    <input type="radio" id="totalTravel" name="travelCategory" checked>
                    <label for="totalTravel">
                        <span>모든 여행</span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="privateTravel" name="travelCategory">
                    <label for="privateTravel">
                        <span>여행(비공개)</span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="publicTravel" name="travelCategory">
                    <label for="publicTravel">
                        <span>여행(공개)</span>
                    </label>
                </li>
            </ul>
            <ul id="travel-list">
                <!-- 첫번째 요소 무조건 고정 -->
                <li id="plusTravel">
                    <div>
                        <a href="여행 만들기 페이지로">
                            <i class="fa-solid fa-circle-plus"></i>
                            <span>여행 만들기</span>
                        </a>
                    </div>
                </li>

                <!-- 데이터갯수에 따라 동적으로 생성되는 리스트 아이템 -->
                <li class="travel-item">
                    <div>
                        <a href="해당 여행 상세 페이지">
                            <!-- position absolute 화면 전체 덮기 -->
                        </a>
                        <!-- 썸네일 이미지 -->
                        <div class="travel-first-image">
                            <img src="http://tong.visitkorea.or.kr/cms/resource/39/2680839_image2_1.jpg" alt="">
                        </div>
    
                        <!-- 여행 제목, 작성자 -->
                        <div class="travel-description">
                            <div>
                                <span class="travel-title">테스트 여행</span>
                            </div>
                            <div>
                                작성자: <a href="프로필 페이지로" class="travel-writer">Tonic</a>
                            </div>
                        </div>
    
                        <!-- 여행의 장소 갯수 -->
                        <div class="travel-place-count">
                            포함: <span class="">1개의 항목</span>
                        </div>

                        <!-- 접근범위 -->
                        <div class="access-scope-area">
                            <div class="access-profile-image">
                                <a href="작성자 프로필 페이지로">
                                    <img src="https://cdn.pixabay.com/photo/2022/02/23/17/08/planets-7031048__480.jpg" alt="">
                                </a>
                            </div>
                            <!-- 비공개 일경우 -->
                            <div class="access-scope-private">
                                <span class="private"><i class="fa-solid fa-lock"></i></span>
                            </div>
                        </div>
                    </div>
                </li>                

                <li class="travel-item">
                    <div>
                        <a href="해당 여행 상세 페이지">
                            <!-- position absolute 화면 전체 덮기 -->
                        </a>
                        <!-- 썸네일 이미지 -->
                        <div class="travel-first-image">
                            <img src="http://tong.visitkorea.or.kr/cms/resource/39/2680839_image2_1.jpg" alt="">
                        </div>
    
                        <!-- 여행 제목, 작성자 -->
                        <div class="travel-description">
                            <div>
                                <span class="travel-title">테스트 여행</span>
                            </div>
                            <div>
                                작성자: <a href="프로필 페이지로" class="travel-writer">Tonic</a>
                            </div>
                        </div>
    
                        <!-- 여행의 장소 갯수 -->
                        <div class="travel-place-count">
                            포함: <span class="">1개의 항목</span>
                        </div>

                        <%-- 접근 범위 --%>
                        <div class="access-scope-area">
                            <div class="access-profile-image">
                                <a href="작성자 프로필 페이지로">
                                    <img src="https://cdn.pixabay.com/photo/2022/02/23/17/08/planets-7031048__480.jpg" alt="">
                                </a>
                            </div>
                            <!-- 공개일 경우 -->
                            <div class="access-scope-public">
                                <span><i class="fa-solid fa-lock-open"></i></span>
                            </div>
                        </div>
                    </div>
                </li>      
            </ul>
        </div>
    </main>

    <!-- footer:include -->
    <jsp:include page="/WEB-INF/views/inc/footer.jsp"></jsp:include>
</body>
</html>