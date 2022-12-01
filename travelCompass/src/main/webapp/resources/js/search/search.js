//keyword URL에서 가져오기
var splitURL1 = window.location.href.split("?");
var splitURL2 = splitURL1[1].split("&");
var splitURL3 = splitURL2[0].split("=");
//console.log(splitURL3);

var keyword = splitURL3[1];
console.log(keyword);

//keyword를 디코딩해 검색창에 넣기
const searchInput=document.getElementById('search-input');

searchInput.value=decodeUTF8(keyword);

//js 디코딩 함수
function decodeUTF8(str){
    return decodeURI(str);
}

//js 인코딩 함수
function encodeUTF8(str){
    return encodeURI(str);
}
//------------------------------------------------------------------






















// const contentTypeId = document.getElementById("contentTypeId").value;

// const searchFilter = document.getElementById("search-filter");

// // contentTypeId 변경 및 검색
// searchFilter.addEventListener("click", e => {

//     // contentTypeId 변경
//     contentTypeId = e.target.value;

//     // 검색
//     $.ajax({
//         url: "/search",
//         data: { "contentTypeId": contentTypeId},
//         type: "get",
//         success: (result) => {
//             console(result);
//             alert("검색 성공");
//         },
//         error: () => { console.log("검색 에러");}
    
    
//     });

// });

