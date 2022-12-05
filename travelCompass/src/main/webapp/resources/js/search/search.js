//keyword, contentTypeId, areaCode URL에서 가져오기
let splitURL1 = window.location.href.split("?");
let splitURL2 = splitURL1[1].split("&");
let splitURL3 = splitURL2[0].split("=");
let splitURL4 = splitURL2[1].split("=");
let splitURL5 = splitURL2[2].split("=");

var keyword = splitURL3[1];
var contentTypeId = splitURL4[1];
var areaCode = splitURL5[1];

console.log(keyword, contentTypeId, areaCode);

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
                //search-result-list의 내용을 지운다
                const searchResultList = document.getElementsByClassName("search-result-list");
                searchResultList[0].innerHTML = "";
                console.log(result);
                
                //for(let i=0; i<result.placeList.length; i++){
                for(let place of result.placeList){
                    console.log(place);
                    //li만들고 ul하위요소로 넣기
                    const searchResultItemList = document.createElement("li");
                    searchResultList[0].appendChild(searchResultItemList);
        
                    //div class="search-result-item"
                    //div만들고 li하위요소로 넣기
                    const searchResultItemDiv = document.createElement("div");
                    searchResultItemDiv.classList.add("search-result-item");
                    searchResultItemList.appendChild(searchResultItemDiv);
        
                    //div class="search-result-item-img"
                    //img-div를 만들고 div하위요소로 넣기
                    const searchResultItemImgDiv= document.createElement("div");
                    searchResultItemImgDiv.classList.add("search-result-item-img");
                    searchResultItemDiv.appendChild(searchResultItemImgDiv);
        
                    //a를 만들고 img-div하위요소로 넣기
                    const searchResultItemImgDivA = document.createElement("a");
                    searchResultItemImgDivA.href = "/place/detail/"+ place.contenttypeid + "/" + place.contentid;
                    // 최근에 본 장소 onclick 이벤트 세팅
                    searchResultItemImgDivA.setAttribute("onclick", `return addRecentViewPlace("${place.title}", "${place.firstimage}", "${place.contentid}", "${place.contenttypeid}", "${place.averageRating}", "${place.reviewCount}", "${place.addr1}")`);
                    searchResultItemImgDiv.appendChild(searchResultItemImgDivA);
        
                    //img를 만들고 a하위요소로 넣기
                    const searchResultItemImgDivAImg = document.createElement("img");
                    searchResultItemImgDivA.appendChild(searchResultItemImgDivAImg);
                    //src 추가-이미지가 없을 경우 기본 이미지로 대체
                    if(place.firstimage != ''){
                        searchResultItemImgDivAImg.setAttribute("src", place.firstimage);
                        searchResultItemImgDivAImg.setAttribute("width", "177px");
                        searchResultItemImgDivAImg.setAttribute("height", "140px" );
                    } else {
                        searchResultItemImgDivAImg.src="/resources/images/common/"+ place.contenttypeid +".png";
                        searchResultItemImgDivAImg.setAttribute("width", "177px");
                        searchResultItemImgDivAImg.setAttribute("height", "140px" );
                    }
                    
                    //--------------------
        
                    //div class="search-result-item-content"
                    //content-div를 만들고 div하위요소로 넣기
                    const searchResultItemContentDiv = document.createElement("div");
                    searchResultItemContentDiv.classList.add("search-result-item-content");
                    searchResultItemDiv.appendChild(searchResultItemContentDiv);
                    
                    //div class="search-result-item-title"
                    //title-div를 만들고 content-div하위요소로 넣기
                    const searchResultItemTitleDiv = document.createElement("div");
                    searchResultItemTitleDiv.classList.add("search-result-item-title");
                    searchResultItemContentDiv.appendChild(searchResultItemTitleDiv);
        
                    //span만들고 title-div하위요소로 넣기
                    const searchResultItemTitleDivSpan = document.createElement("span");
                    searchResultItemTitleDiv.appendChild(searchResultItemTitleDivSpan);
                    

                    //a만들고 span하위요소로 넣기
                    const searchResultItemTitleDivSpanA = document.createElement("a");
                    searchResultItemTitleDivSpanA.setAttribute("href","/place/detail/"+place.contenttypeid+"/"+place.contentid);

                    // 최근에 본 장소 onclick 세팅
                    searchResultItemTitleDivSpanA.setAttribute("onclick", `return addRecentViewPlace("${place.title}", "${place.firstimage}", "${place.contentid}", "${place.contenttypeid}", "${place.averageRating}", "${place.reviewCount}", "${place.addr1}")`);

                    searchResultItemTitleDivSpanA.innerText = place.title;
                    searchResultItemTitleDivSpan.appendChild(searchResultItemTitleDivSpanA);
        
                    //div class="search-result-item-grade"
                    //grade-div를 만들고 content-div하위요소로 넣기
                    const searchResultItemGradeDiv = document.createElement("div");
                    searchResultItemGradeDiv.classList.add("search-result-item-grade");
                    searchResultItemContentDiv.appendChild(searchResultItemGradeDiv);
        
                    //div class="rating"
                    //rating-div를 만들고 grade-div하위요소로 넣기
                    const searchResultItemGradeDivRating = document.createElement("div");
                    searchResultItemGradeDivRating.classList.add("rating");
                    searchResultItemGradeDiv.appendChild(searchResultItemGradeDivRating);
        
                    //span만들고 rating-div하위요소로 넣기
                    const searchResultItemGradeDivRatingSpan1 = document.createElement("span");
                    searchResultItemGradeDivRatingSpan1.classList.add("empty");
                    searchResultItemGradeDivRatingSpan1.innerHTML="&#9679;&#9679;&#9679;&#9679;&#9679;";
                    searchResultItemGradeDivRating.appendChild(searchResultItemGradeDivRatingSpan1);
                    
                    //span만들고 rating-div하위요소로 넣기
                    const searchResultItemGradeDivRatingSpan2 = document.createElement("span");
                    searchResultItemGradeDivRatingSpan2.classList.add("fill");
                    searchResultItemGradeDivRatingSpan2.innerHTML="&#9679;&#9679;&#9679;&#9679;&#9679;";
                    searchResultItemGradeDivRating.appendChild(searchResultItemGradeDivRatingSpan2);
        
                    //span만들고 grade-div하위요소로 넣기
                    const searchResultItemGradeDivSpan = document.createElement("span");
                    searchResultItemGradeDiv.appendChild(searchResultItemGradeDivSpan);
                    
                    //a만들고 span하위요소로 넣기
                    const searchResultItemGradeDivSpanA = document.createElement("a");
                    searchResultItemGradeDivSpan.appendChild(searchResultItemGradeDivSpanA);
                    searchResultItemGradeDivSpanA.setAttribute("href","/place/detail/"+place.contenttypeid+"/"+place.contentid);

                    // 최근에 본 장소 onclick 세팅
                    searchResultItemGradeDivSpanA.setAttribute("onclick", `return addRecentViewPlace("${place.title}", "${place.firstimage}", "${place.contentid}", "${place.contenttypeid}", "${place.averageRating}", "${place.reviewCount}", "${place.addr1}")`);

                    searchResultItemGradeDivSpanA.innerText = "267건의 리뷰";
        
                    //div class="search-result-item-address"
                    //address-div 만들고 content-div하위요소로 넣기
                    const searchResultItemAddressDiv = document.createElement("div");
                    searchResultItemAddressDiv.classList.add("search-result-item-address");
                    searchResultItemContentDiv.appendChild(searchResultItemAddressDiv);
        
                    //span만들고 address-div하위요소로 넣기
                    const searchResultItemAddressDivSpan = document.createElement("span");
                    searchResultItemAddressDiv.appendChild(searchResultItemAddressDivSpan);
        
                    //a만들고 span하위요소로 넣기
                    const searchResultItemAddressDivSpanA = document.createElement("a");
                    searchResultItemAddressDivSpanA.href = "/place/detail/"+place.contenttypeid+"/"+place.contentid;

                    // 최근에 본 장소 onclick 세팅
                    searchResultItemAddressDivSpanA.setAttribute("onclick", `return addRecentViewPlace("${place.title}", "${place.firstimage}", "${place.contentid}", "${place.contenttypeid}", "${place.averageRating}", "${place.reviewCount}", "${place.addr1}")`);

                    searchResultItemAddressDivSpanA.innerText = place.addr1;
                    searchResultItemAddressDivSpan.appendChild(searchResultItemAddressDivSpanA);
                
                    //review-div 만들고 content-div하위요소로 넣기
                    const searchResultItemReviewDiv = document.createElement("div");
                    searchResultItemReviewDiv.classList.add("search-result-item-review");
                    searchResultItemContentDiv.appendChild(searchResultItemReviewDiv);
        
                    //a만들고 review-div하위요소로 넣기
                    const searchResultItemReviewDivA = document.createElement("a");
                    searchResultItemReviewDiv.appendChild(searchResultItemReviewDivA);
                    searchResultItemReviewDivA.href = "place/detail/"+place.contenttypeid+"/"+place.contentid;

                    // 최근에 본 장소 onclick 세팅
                    searchResultItemReviewDivA.setAttribute("onclick", `return addRecentViewPlace("${place.title}", "${place.firstimage}", "${place.contentid}", "${place.contenttypeid}", "${place.averageRating}", "${place.reviewCount}", "${place.addr1}")`);

                    searchResultItemReviewDivA.innerText = "서울사당에서 지하철타면 15분이면 도착하는 과천에 자리잡은 서울대공원은 놀이공원,동물원,식물원등이 있고 호수를 가로지르는 리프트를 타거나 셔틀이 있어서 편하게 이용할수 있고 입장료또한 인터넷으로 예매하면 아주 저렴하게 이용할수 있어서 데이트를 하거나 휴식을 하러가기 아주 좋은곳이고 남녀노소 가족 누구나가 이용하기 좋은 곳이네요.";
                }


                    //pagination-------------------------------------------------------------------

                    const pagination = document.querySelector(".pagination");
                    pagination.innerHTML = "";

                    //<<만들기
                    const lipprev = document.createElement("li");
                    pagination.appendChild(lipprev);
                    const pprev = document.createElement("a");
                    lipprev.appendChild(pprev);
                    pprev.setAttribute("href","/search?keyword="+keyword+"&contentTypeId="+result.placeList[0].contenttypeid+"&areaCode="+areaCode+"&pageNo=1");
                    pprev.innerText = "<<";

                    //<만들기
                    const liprev = document.createElement("li");
                    pagination.appendChild(liprev);
                    const prev = document.createElement("a");
                    liprev.appendChild(prev);
                    prev.setAttribute("href","/search?keyword="+keyword+"&contentTypeId="+result.placeList[0].contenttypeid+"&areaCode="+areaCode+"&pageNo="+result.pagination.prevPage);
                    prev.innerText = "<";

                    //페이지번호 만들기
                    for(let i = result.pagination.startPage; i <= result.pagination.endPage; i++){
                        const li=document.createElement("li");
                        pagination.appendChild(li);
                        const a=document.createElement("a");
                        li.appendChild(a);
                        a.setAttribute("href","/search?keyword="+keyword+"&contentTypeId="+result.placeList[0].contenttypeid+"&areaCode="+areaCode+"&pageNo="+i);
                        a.innerText = i;
                        if(i==result.pagination.pageNo){
                            a.classList.add("current");
                        }
                    }

                    //>만들기
                    const linext = document.createElement("li");
                    pagination.appendChild(linext);
                    const next = document.createElement("a");
                    linext.appendChild(next);
                    next.setAttribute("href","/search?keyword="+keyword+"&contentTypeId="+result.placeList[0].contenttypeid+"&areaCode="+areaCode+"&pageNo="+result.pagination.nextPage);
                    next.innerText = ">";

                    //>>만들기
                    const linnext = document.createElement("li");
                    pagination.appendChild(linnext);
                    const nnext = document.createElement("a");
                    linnext.appendChild(nnext);
                    nnext.setAttribute("href","/search?keyword="+keyword+"&contentTypeId="+result.placeList[0].contenttypeid+"&areaCode="+areaCode+"&pageNo="+result.pagination.maxPage);
                    nnext.innerText = ">>";


                },
            error: () =>{
                console.log("error");
            }
        });
    });
}

