<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>상세페이지</title>
<!-- <link rel="stylesheet" href="../css/main-style.css"> -->
<link rel="stylesheet" href="/resources/css/inc/header.css">
<link rel="stylesheet" href="/resources/css/place/place.css">
<link rel="stylesheet" href="/resources/css/inc/footer.css">
<script src="https://kit.fontawesome.com/72842759a7.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
</head>

<body>
	<jsp:include page="/WEB-INF/views/inc/header.jsp" />
	<main>

		<section>
			<div class="gallery">
				<div class="swiper-container gallery-slider">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample010.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample005.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample012.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample007.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample008.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample009.jpg" alt="">
						</div>
					</div>
					<!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
				</div>

				<div class="swiper-container gallery-thumbs">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample010.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample005.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample012.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample007.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample008.jpg" alt="">
						</div>
						<div class="swiper-slide">
							<img src="//into-the-program.com/demo/images/sample009.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>


		<section>
			<div id="title-area">
				<span>${place.title}</span>
				<button type="button" id="scrap">
					<i class="fa-regular fa-heart" id="placeHeart"></i>
				</button>
			</div>
			<div id="rating-area">
				<span><a href="#<!--상세페이지-리뷰-->"> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle"
						style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i>
				</a></span> <span><a href="#<!--상세페이지-리뷰-->"> 267건의 리뷰</a></span>
			</div>
			<div id="info-area">
				<span class="infoHead">주소 : </span><span>강원 춘천시 남산면 남이섬길 1</span> <span class="infoHead">이용 시간 : </span><span>AM7:30 ~ PM 9:45</span> <span class="infoHead">전화 번호 : </span><span>0507-1311-8114</span>
				<span class="infoHead">쉬는날 : </span><span>월요일</span>
			</div>
			<div id="intro-area">
				<p>※ 남이섬은 [동화나라, 노래의섬]을 컨셉으로 다양한 문화행사, 콘서트 및 전시를 꾸준히 개최해 오고 있으며, 어린이들에게는 꿈과 희망을, 연인들에게는 사랑과 추억을, 문화계 인사들에게는 창작의 터전과 기반을 마련해 주고 있는 자연생태 문화공간입니다. 주요시설로는 노래박물관, 그림책놀이터, MICE센터, 아트숍, 유니세프라운지 등의
					문화시설과 투개더파크, 나눔열차, 스토리투어버스 등의 유기시설이 갖춰져있고 다양한 메뉴를 즐길 수 있는 식음시설, 다양한 테마로 꾸며진 객실과 강변의 독립적인 공간을 가진 별관으로 이루어진 숙박시설 호텔정관루가 있습니다.</p>
			</div>
		</section>

		<!-- 주변장소 / 지도 -->
		<section>
			<div id="map-area" style="border: 3px solid red">
				<div class="around-area" style="border: 3px solid blue">
					<div class="row">
						<div class="col">
							<div class="around-list">
								<span>음식점</span> <span>5km 내 13개</span>
								<!-- 주변 장소 리스트로 받아 출력 -->
								<li class="aroundPlace">
									<div class="imgPlace">
										<img src="" alt="">
									</div>
									<div class="infoPlace">
										<ul>
											<li>남문</li>
											<li><i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i
												class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i></li>
											<li>0.1km</li>
										</ul>
									</div>
								</li>
								<!-- 반복 출력 -->
							</div>
						</div>
						<div class="col">
							<div class="around-list">
								<span>관광명소</span> <span>8km 내 10개</span>
								<li class="aroundPlace">
									<div class="imgPlace">
										<img src="" alt="">
									</div>
									<div class="infoPlace">
										<ul>
											<li>공원</li>
											<li><i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i
												class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i></li>
											<li>2.1km</li>
										</ul>
									</div>
								</li>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="around-list">
								<span>문화재</span> <span>8km 내 22개</span>
								<li class="aroundPlace">
									<div class="imgPlace">
										<img src="" alt="">
									</div>
									<div class="infoPlace">
										<ul>
											<li>남문</li>
											<li><i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i
												class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i></li>
											<li>0.1km</li>
										</ul>
									</div>
								</li>
							</div>
						</div>
						<div class="col">
							<div class="around-list">
								<span>레포츠</span> <span>5km 내 3개</span>
								<li class="aroundPlace">
									<div class="imgPlace">
										<img src="" alt="">
									</div>
									<div class="infoPlace">
										<ul>
											<li>남문</li>
											<li><i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i
												class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i></li>
											<li>0.1km</li>
										</ul>
									</div>
								</li>
							</div>
						</div>
					</div>
				</div>
				<div id="map"></div>
		</section>

		<!-- 리뷰 -->
		<div id="boardList" style="border: 2px solid green">
			<ul id="boardNav">
				<span class="boardNav"><a href="">리뷰</a></span>
				<span class="boardNav"><a href="">QNA</a></span>
			</ul>
		</div>
		<section style="border: 3px solid hotpink">
			<div id="board">
				<div id="board-area">
					<div id="rating">
						<span><a href="#<!--상세페이지-리뷰-->"> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle"
								style="color: #00AA6C"></i> <i class="fa-solid fa-circle" style="color: #00AA6C"></i> <i class="fa-solid fa-circle-half-stroke" style="color: #00AA6C"></i>
						</a></span> <span><a href="#<!--상세페이지-리뷰-->"> 267건의 리뷰</a></span>
						<div>
							<li>훌륭함</li>
							<li>매우좋음</li>
							<li>보통</li>
							<li>형편없음</li>
							<li>최악</li>
						</div>
					</div>
					<div id="boardContent">
						<div id="search1">
							<label for="search2"> <i class="fa-solid fa-magnifying-glass"></i>
							</label> <input type="text" id="search2" />
						</div>
						<div id="reviewList">
							<div id="review">

								<div class="wrap">
									<h1>리뷰</h1>
									<form name="reviewform" class="reviewform" method="post" action="/save">
										<input type="hidden" name="rate" id="rate" value="0" />
										<p class="title_star">별점과 리뷰를 남겨주세요.</p>

										<div class="review_rating">
											<div class="warning_msg">별점을 선택해 주세요.</div>
											<div class="rating">
												<!-- 해당 별점을 클릭하면 해당 별과 그 왼쪽의 모든 별의 체크박스에 checked 적용 -->
												<input type="checkbox" name="rating" id="rating1" value="1" class="rate_radio" title="1점"> <label for="rating1"></label> <input type="checkbox" name="rating" id="rating2" value="2"
													class="rate_radio" title="2점"> <label for="rating2"></label> <input type="checkbox" name="rating" id="rating3" value="3" class="rate_radio" title="3점"> <label
													for="rating3"></label> <input type="checkbox" name="rating" id="rating4" value="4" class="rate_radio" title="4점"> <label for="rating4"></label> <input type="checkbox"
													name="rating" id="rating5" value="5" class="rate_radio" title="5점"> <label for="rating5"></label>
											</div>
										</div>
										<div class="review_contents">
											<div class="warning_msg">5자 이상으로 작성해 주세요.</div>
											<textarea rows="10" class="review_textarea"></textarea>
										</div>
										<div class="cmd">
											<input type="button" name="save" id="save" value="등록">
										</div>
									</form>
								</div>

							</div>

							<div id="profile"></div>
							<div>
								<div id="reveiw-head">
									<div class="review-head1">
										<div id="profileImg">
											<a href="#"></a>
										</div>
										<div>닉네임</div>
										<br>
										<br> <span class="circle"> ○○○○○ <span>●●●●●</span> <input type="range" oninput="drawCircle(this)" value="5" step="1" min="1" max="5">
										</span>
									</div>


									<div class="review-head2">
										<div>
											<a href="#"><i class="fa-solid fa-heart"></i></a>

										</div>
										<div>
											<a href=""><i class="fa-sharp fa-solid fa-flag"></i></a>
										</div>
									</div>
								</div>
								<div id="userRate"></div>
								<div class="review-title">
									<span>남이섬에서 행복한 추억을</span>
								</div>
								<div class="review-content">
									<p>자연친화적으로 다람쥐나 청설모들을 가까이서 쉽게 볼 수 있고 나무들이 쭉 펼쳐진 거리에서 사진을 찍기에도 좋다 돗자리를 가져가서 피크닉을 즐길 수 도 있다 커플여행의 최고의 여행지</p>
								</div>
								<div>2022년 11월 7일 작성</div>
							</div>

							<div class="page-select">
								<button class="page-select-before">이전</button>
								<div>
									<a href="#" class="page-select-btn">1</a> <a href="#" class="page-select-btn">2</a> <a href="#" class="page-select-btn">3</a> <a href="#" class="page-select-btn">4</a> <a href="#"
										class="page-select-btn">5</a> <span class="page-select-btn">...</span> <a href="#" class="page-select-btn">6</a>
								</div>
								<button class="page-select-next">다음</button>
							</div>


						</div>
					</div>
				</div>
			</div>
			</div>
		</section>
		</div>
		<!-- QnA -->
		<section></section>
	</main>


	<jsp:include page="/WEB-INF/views/inc/footer.jsp" />


	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d960da26337b79bb7d208d7a89db4003"></script>
	<script src="/resources/js/place/place.js"></script>
	<script src="/resources/js/place/swiper.js"></script>
</body>
</html>