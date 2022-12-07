(()=>{
    // travel 초기화
    travel = JSON.parse(travel);

    // 화면 로드 시
    // travel.placeList 간의 거리 출력
    const distanceList = document.getElementsByClassName("distance-km");
    for(let i=0; i<distanceList.length; i++) {
        console.log(`${i}번째 초기화`);
        // 여행 장소 리스트의 i + 1번째가 null이 아니면
        if(travel.placeList[i+1] != null) {
            let distance = computeDistance(
                new Location(travel.placeList[i].mapy, travel.placeList[i].mapx),
                new Location(travel.placeList[i+1].mapy, travel.placeList[i+1].mapx)
            )
            distanceList[i].innerText = `${Math.round(distance * 10) / 10}km`;
        }
    }

    // 모달 이벤트
    const roadViewModal = document.getElementById("roadViewModal");
    roadViewModal.addEventListener("click", e=>{
        console.log("클릭");
        if(e.target.getAttribute("id") == "roadViewModal") {
            roadViewModal.classList.remove("show");
        }
    });

    // 공유 버튼 이벤트 달기
    document.getElementById("share").addEventListener("click", ()=>{
        let url = "";
        const temp = document.createElement("textarea");
        document.body.appendChild(temp);
        url = location.href;
        temp.value = url;
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        alert("클립보드에 저장되었습니다.");
    });
})();

// 스크랩 버튼
(()=>{
    // <i class="fa-regular fa-bookmark"></i> 안색칠
    const travelScrapBtn = document.getElementById("travelScrapBtn");
    travelScrapBtn.addEventListener("click", ()=>{
        if(memberNo == "") {     // 로그인 상태가 아닐 때
            if(confirm("로그인 후 이용 가능합니다.\n로그인 하시겠습니까?")) {
                location.href = "/member/login";
            }
            return;
        }
        if(travelScrapBtn.classList.contains("fa-regular")) {   // 스크랩을 안했다면
            $.ajax({
                url:"/travel/insertTravelScrap",
                data: {
                    "travelNo" : travel.travelNo,
                    "memberNo" : memberNo
                },
                success: (result)=>{
                    if(result > 0) {
                        console.log("성공");
                        travelScrapBtn.classList.remove("fa-regular");
                        travelScrapBtn.classList.add("fa-solid");
                    } else {
                        console.log("실패");
                    }
                },
                error:()=>{
                    console.log("여행 스크랩 에러");
                }
            });
        } else {                                                 // 스크랩을 했다면
            $.ajax({
                url:"/travel/deleteTravelScrap",
                data:{
                    "travelNo": travel.travelNo,
                    "memberNo": memberNo
                },
                success: (result)=>{
                    if(result > 0) {
                        console.log("성공");
                        travelScrapBtn.classList.remove("fa-solid");
                        travelScrapBtn.classList.add("fa-regular");
                    } else {
                        console.log("실패");
                    }
                },
                error:()=>{
                    console.log("여행 스크랩 에러");
                }
            })
        }
    });
})();

// 좋아요 버튼
(()=>{
    const travelLikeBtn = document.getElementById("travelLikeBtn")
    travelLikeBtn.addEventListener("click", ()=>{
        if(memberNo == "") {     // 로그인 상태가 아닐 때
            if(confirm("로그인 후 이용 가능합니다.\n로그인 하시겠습니까?")) {
                location.href = "/member/login";
            }
            return;
        }
        if(travelLikeBtn.classList.contains("fa-regular")) {   // 스크랩을 안했다면
            $.ajax({
                url:"/travel/insertTravelLike",
                data: {
                    "travelNo" : travel.travelNo,
                    "memberNo" : memberNo
                },
                success: (result)=>{
                    if(result > 0) {
                        console.log("성공");
                        travelLikeBtn.classList.remove("fa-regular");
                        travelLikeBtn.classList.add("fa-solid");
                    } else {
                        console.log("실패");
                    }
                },
                error:()=>{
                    console.log("여행 스크랩 에러");
                }
            });
        } else {                                                 // 스크랩을 했다면
            $.ajax({
                url:"/travel/deleteTravelLike",
                data:{
                    "travelNo": travel.travelNo,
                    "memberNo": memberNo
                },
                success: (result)=>{
                    if(result > 0) {
                        console.log("성공");
                        travelLikeBtn.classList.remove("fa-solid");
                        travelLikeBtn.classList.add("fa-regular");
                    } else {
                        console.log("실패");
                    }
                },
                error:()=>{
                    console.log("여행 스크랩 에러");
                }
            })
        }
    });
})();

let bounds;
let map
// 여행에 등록된 장소가 비어있지 않을 때만
if(travel.placeList.length != 0) {


    // 지도 초기화 버튼
    // 버튼 생성 후 prepend
    const mapInitBtn = document.createElement("button");
    mapInitBtn.setAttribute("id", "mapInit");
    mapInitBtn.addEventListener("click", ()=>{
        setBounds(map, bounds)
    });
    mapInitBtn.innerText = "초기화";
    document.getElementsByClassName("travel-create-content")[0].prepend(mapInitBtn);
    
    const mapContainer = document.getElementById("travelMap");
    let mapOption = {
        center: new kakao.maps.LatLng(Number(travel.placeList[0].mapy), Number(travel.placeList[0].mapx)),
        level: 3
    };
    
    map = new kakao.maps.Map(mapContainer, mapOption);
    
    bounds = new kakao.maps.LatLngBounds();
    for(let place of travel.placeList) {
        // 마커찍을 위치객체 생성
        let markerPosition = new kakao.maps.LatLng(Number(place.mapy), Number(place.mapx));
    
        // 마커 생성
        let marker = new kakao.maps.Marker({
            "position" : markerPosition
        });
    
        // 인포 윈도우 생성
        // 커스텀 오버레이 생성
        let content = `<div class='marker-content' onclick='showRoadView(${place.mapy}, ${place.mapx})'>` +
            `<span class='marker-title'>${place.title}</span>`
        "</div>";
    
        let customOverlay = new kakao.maps.CustomOverlay({
            "map":map,
            "position": markerPosition,
            "content": content,
            "yAnchor": 1
        });
    
        // 마커 세팅
        marker.setMap(map);
    
        // 인포윈도우 세팅
    
        // 바운드에 마커 세팅
        bounds.extend(markerPosition);
    }
    // 마커의 위치를 기준으로 지도 레벨 조정
    setBounds();
} else {
    const mapContainer = document.getElementById("travelMap");
    const mapEmptyArea = document.createElement("div");
    mapEmptyArea.classList.add("map-empty-area");

    const icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-map");

    mapEmptyArea.append(icon);

    mapContainer.append(mapEmptyArea);
}


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

    roadviewClient.getNearestPanoId(position, 100, panoId=>{
        console.log(panoId);
        roadView.setPanoId(panoId, position);
    });
}

function setBounds() {
    console.log("초기화");
    map.setBounds(bounds);
}

// 위도,경도 생성자
function Location(latitude, longitude) {    // latitude : mapy, longitude : mapx
    this.latitude = latitude,
    this.longitude = longitude
};

// 두 위도,경도 사이의 거리 구하기
function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371; //지구의 반경(km)
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
    Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}