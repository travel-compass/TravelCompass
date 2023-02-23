# 2022-Spring-Project_Travelcompass

### **프로젝트 이름 : Travelcompass(여행 나침반)**

### **프로젝트 진행 기간 : 2022.10.07 ~ 2022.12**

### **클론/밴치마크 사이트 : [Tripadvisor](https://www.tripadvisor.co.kr/)**
<br>

## ⭐프로젝트 개요
여행 정보 제공 사이트 개발  
한국관광공사 TourAPI4.0을 사용하여 관광지 정보를 열람하고  
리뷰를 통해 정보를 교환  
마음에 드는 여행지를 스크랩해 자신만의 여행코스를 구성

## 📌프로젝트 주안점
- 여행 정보를 제공하는 사이트 "트립어드바이저(Tripadvisor)"를 벤치마킹하여 사이트 방향성 참고

- 한국관광공사 TourAPI에서 제공하는 데이터들과 프로젝트DB(Oracle)의 테이블 연결을 중심으로 설정

- 기능 API 이외의 REST API(한국관광공사 TourAPI 4.0) 경험

- 팀원이 담당하는 페이지마다 MVC패턴을 기반으로 데이터 처리 후 DB에 접근하여 CRUD를 경험

## 📌주요 기능
### 메인페이지
- 회원 로그인
- 장소 키워드 검색(검색창 내 카테고리(테마, 지역분류, 인기 검색어)
- 최근 검색목록
- 내 주변 장소 찾기

### 회원페이지
- 회원가입
- 내 정보 조회 및 변경
- 회원 아이디/비밀번호 찾기
- 비밀번호 변경
- 회원탈퇴

### 검색페이지 
- 키워드 검색 기능
- 카테고리 검색 기능
- 검색어 순위

### 장소조회 상세페이지
- 조회한 장소 정보(이름,주소,전화번호, 이용시간, 쉬는날, 이용료, 대표메뉴, 홈페이지, 평균평점, 리뷰개수 등) 제공
- 조회장소 주변 장소리스트 정보제공
- 지도
- 리뷰 등록 및 삭제
- 리뷰 좋아요

### 여행페이지 
- 공개범위별 여행목록 조회
- 스크랩한 여행목록 조회
- 여행 생성
- 여행 수정(이름, 설명, 장소 목록)
- 스크랩 장소 검색/정렬
- 스크랩 장소 삭제
- KakaoMap API 지도 조회/로드 뷰

### 프로필 페이지
- 활동피드 목록 확인 및 삭제
- 회원이 쓴 리뷰 목록 확인 및 삭제
- 팔로잉 추가 및 삭제
- 팔로워 추가 및 삭제
- 프로필 이미지 변경

### 관리자 페이지
- 신고 게시글 조회
- 게시글 블라인드
- 회원 정지 및 취소

<br><br>

<div align=center><h1>📚 STACKS</h1></div>
<div align=center>
  <h3>Platforms&Languge</h3>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"><br>
  <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/maven-red?style=for-the-badge&logo=Apache&logoColor=white">

  <br><br>
  <h3>Tools</h3>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=Eclipse-IDE&logoColor=white">
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white">
  <img src="https://img.shields.io/badge/Apache Tomcat-F8DC75?style=for-the-badge&logo=ApacheTomcat&logoColor=white">

  <br><br><br><br>
  <div align="center">
    <h1>👨‍💻 팀원 소개</h1>

  <table>
    <tr>
      <th><a href="https://github.com/2-Sungho">이성호(팀장)<br>https://github.com/2-Sungho</a></th>
      <th><a href="https://github.com/use-da">이용하<br>https://github.com/use-da</a></th>
    </tr>
    <tr>
      <td width="300px">
        회의록 작성<br>
        협업툴 담당(google sheets, figma)<br>
        발표/제출 스토리보드 편집<br><br>
        [장소조회 상세페이지]<br>
        - 장소이미지 슬라이드<br> 
        - API 정보 요청조회 화면출력<br>
        - 비동기화 장소 스크랩 기능<br>
        - 총 평점 평균과 개수 조회 출력 및 동적 레이팅 화면출력 <br>
        - 주변 장소 리스트 추가 조회 및 평점연결 <br> 
        - 카카오맵 api이용 지도 기능 <br> 
        - 평점 별 개수 조회 <br> 
        - 평점을 포함한 리뷰 비동기화 등록 <br>
        - 리뷰 비동기화 삭제 <br> 
        - 리뷰 추가 목록 비동기화 더보기 기능
      </td>
      <td width="300px">
        [검색 페이지]<br>
        - 키워드 검색 기능 구현<br> 
        - 검색어 유지 기능 구현<br> 
        - 카테고리 비동기 검색 기능 구현 Pagination기능<br><br>
        [관리자 페이지]<br>
        - 관리자 페이지 필터처리<br> 
        - 신고 게시글 비동기 조회<br>
        -  게시글 블라인드 기능 구현<br>
        -  회원의 블라인드 게시글 등록 횟수 조회<br>
        -  회원 기능 정지 구현<br>
        -  회원 정지 취소 기능 구현<br><br>
        에러페이지 설정<br>
        게시글 신고
      </td>
    </tr>
    <tr>
      <th><a href="https://github.com/dudgus197493">김영현<br>https://github.com/dudgus197493</a></th>
      <th><a href="https://github.com/hsh9588">황석현<br>https://github.com/hsh9588</a></th>
    </tr>
    <tr>
      <td width="300px">
        협업툴(Git) 관리<br>
        프로젝트 전반의 유틸 클래스 구현<br><br>
        [메인페이지]<br>
        - 배너 이미지 자동슬라이드 <br>
        - 좌표기반 API 정보조회<br>
        - localStorage를 사용 최근검색어<br>
        - 최근 본 장소 기능<br>
        - API데이터와 프로젝트DB(Oracle)의 관계생성<br>
        - geolocation접속좌표 조회<br>
        - 인터셉터/스케줄러/쿠키 사용 인기검색어 기능<br><br>
        [회원기능]<br>
        - 로그인,로그아웃<br>
        - 쿠키 사용 아이디 저장 기능<br>
        - 이메일 인증 기능<br>
        - daum 주소 API, bcrypt 사용 비밀번호 암호화<br>
        - 비동기 유효성 검사<br><br>
        [여행페이지]<br>
        - 비동기CRUD<br>
        - 클립보드 복사 기능<br>
        - KakaoMap API 활용 좌표 마커 찍기/로드 뷰
      </td>
      <td width="300px">
        [프로필페이지]<br>
        - 활동피드<br>
        - 리뷰<br>
        - 사진 목록 비동기 조회<br>
        - 프로필 회원 정보 출력<br>
        - 프로필 이미지 변경<br> 
        - 팔로워<br> 
        - 팔로잉<br> 
        - 팔로잉 목록 모달 팝업 비동기 조회<br>
        - 리뷰 이미지 슬라이드 구현
      </td>
    </tr>
  </table>
</div>
<br><br><br><br>

# ERDCloud
https://www.erdcloud.com/d/e5nkJo2ZpFXCtiFP9

![erd](/readme/erd.png)

<br>

# Figma
https://www.figma.com/file/J2luA0zqgFtaIHjIBcOrsA/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0%3A1&t=Hzz4d0kgLMb1U9Ds-1

<br>

# Google Sheets
