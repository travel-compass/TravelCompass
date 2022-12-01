//keyword, contentTypeId, areaCode URL에서 가져오기
let splitURL1 = window.location.href.split("?");
let splitURL2 = splitURL1[1].split("&");
let splitURL3 = splitURL2[0].split("=");
let splitURL4 = splitURL2[1].split("=");
let splitURL5 = splitURL2[2].split("=");

var keyword = splitURL3[1];
var contentTypeId = splitURL4[1];
var areaCode = splitURL5[1];

//console.log(keyword, contentTypeId, areaCode);

(() => {
//keyword를 디코딩해 검색창에 넣기
const searchInput=document.getElementById('search-input');

searchInput.value=decodeUTF8(keyword);
})();

//js 디코딩 함수
function decodeUTF8(str){
    return decodeURI(str);
}

//js 인코딩 함수
function encodeUTF8(str){
    return encodeURI(str);
}

//------------------------------------------------------------------

//contentTypeId에 따라 radio 버튼 체크하기
(() => {
    if(contentTypeId == 12){
        document.getElementById("searchType1").checked = true;
    } else if(contentTypeId == 14){
        document.getElementById("searchType2").checked = true;
    } else if(contentTypeId == 28){
        document.getElementById("searchType3").checked = true;
    } else if(contentTypeId == 39){
        document.getElementById("searchType4").checked = true;
    }
})();

const searchResultList = document.getElementsByClassName("search-result-list");
//-------------------------------------------------------------------

//ajax - catecorySearch메서드 호출

const categoryList = document.getElementsByClassName("category");
for(let category of categoryList) {
    category.addEventListener("click", function(){ 
        $.ajax({
            url: "/categorySearch",
            type: "GET",
            data: {
                "keyword": decodeUTF8(keyword),
                "contentTypeId": this.value,
                "areaCode": areaCode
            },
            success: result => {
                //search-result-list의 내용을 지운다(searchResultList[0]==search-result-list)
                const searchResultList = document.getElementsByClassName("search-result-list");
                searchResultList[0].innerHTML = "";
                console.log(result);
                //search-result-list에 결과를 넣는다
                searchResultList[0].innerHTML = result;
                },
            error: () =>{
                console.log("error");
            }
        });
    });
}
