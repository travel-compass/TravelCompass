/* ------------------------------ 스크랩 --------------------------------- */
const placeScrap = document.getElementById("placeScrap");
placeScrap.addEventListener("click", (e) => {
  if (memberNo == "") {
    alert("로그인 후 이용해주세요");
    return;
  }
  // 로그인 상태이면서 스크랩 상태가 아닌 경우
  if (e.target.classList.contains("fa-regular")) {
    // 빈 모양일때
    $.ajax({
      url: "/place/scrap",
      data: {
        contentid: contentid,
        contenttypeid: contenttypeid,
        memberNo: memberNo,
        firstimage: firstimage,
        addr1: addr1,
        mapx: mapx,
        mapy: mapy,
        title: title,
      },
      type: "GET",
      success: (result) => {
        if (result > 0) {
          // 성공
          e.target.classList.remove("fa-regular"); // 빈 스크랩 클래스 삭제
          e.target.classList.add("fa-solid"); // 꽉 찬 스크랩 클래스 추가
        } else {
          // 실패
          console.log("스크랩 실패");
        }
      },
      error: () => {
        console.log("스크랩 에러");
      },
    });
  } else {
    // 로그인 상태이면서 스크랩 상태인 경우
    if (confirm("정말 스크랩을 취소할까요?")) {
      $.ajax({
        url: "/place/scrapCancel",
        data: { contentid: contentid, memberNo: memberNo },
        type: "GET",
        success: (result) => {
          if (result > 0) {
            // 성공
            e.target.classList.remove("fa-solid");
            e.target.classList.add("fa-regular");
          } else {
            // 실패
            console.log("스크랩 취소 실패");
          }
        },
        error: () => {
          console.log("스크랩 취소 에러");
        },
      });
    }
  }
});

/* ------------------------------- 지도 -----------------------------------*/
// 카카오 지도 api js
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(mapy, mapx), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(mapy, mapx);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});
let content =
  `<div class='marker-content' onclick='showRoadView(${mapy}, ${mapx})'>` +
  `<span class='marker-title'>${title}</span>`;
("</div>");

let customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  position: markerPosition,
  content: content,
  yAnchor: 1,
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
// map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
// 로드뷰 모달 이벤트 달기
(() => {
  const roadViewModal = document.getElementById("roadViewModal");
  roadViewModal.addEventListener("click", (e) => {
    console.log("클릭");
    if (e.target.getAttribute("id") == "roadViewModal") {
      roadViewModal.classList.remove("show");
    }
  });
})();

// 로드뷰 보여주기
function showRoadView(mapy, mapx) {
  document.getElementById("roadViewModal").classList.add("show");

  // 로드뷰 보여줄 컨테이너
  const roadViewContainer = document.getElementById("roadView");
  roadViewContainer.innerHTML = "";
  // 로드뷰 객체
  const roadView = new kakao.maps.Roadview(roadViewContainer);
  const roadviewClient = new kakao.maps.RoadviewClient();

  const position = new kakao.maps.LatLng(Number(mapy), Number(mapx));

  roadviewClient.getNearestPanoId(position, 100, (panoId) => {
    if (panoId == null) {
      alert("로드뷰를 지원하지 않습니다.");
    }
    console.log(panoId);
    roadView.setPanoId(panoId, position);
  });
}

// // 주변 장소 거리 초기화
(() => {
  const distList = document.getElementsByClassName("search-result-item-review");

  for (let dist of distList) {
    dist.innerText = Math.round(Number(dist.innerText) / 100) / 10 + "km";
  }
})();
