// 최근검색어 생성자
function ResentKeyword(keyword, contentTypeId, areaCode) {
    this.keyword = keyword;
    this.contentTypeId = contentTypeId;
    this.areaCode = areaCode;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const blurBox = document.querySelector(".blur-box");
    const searchForm = document.querySelector(".search-form");
    const searchKeywordArea = document.querySelector(".search-keyword-area");
    const searchInput = searchForm.querySelector("#search-input");
    const popularKeywordList = searchForm.querySelector(".popular-keyword-list");
    if (popularKeywordList != null) {
        popularKeywordList.addEventListener("mouseover", function(e) {
            let targetNode = e.target;
            // console.log(targetNode);
            if(targetNode.nodeName == "A") {       
                let prevNode = targetNode.previousElementSibling;
                let nextNode = targetNode.nextElementSibling;
    
                if(prevNode != null && prevNode.nodeName == "HR") {
                    prevNode.classList.add("js-border-none");
                }
                if(nextNode != null && nextNode.nodeName == "HR") {
                    nextNode.classList.add("js-border-none");
                }
            } else if(targetNode.nodeName == "I" || targetNode.nodeName == "SPAN") {       
                let prevNode = targetNode.parentNode.previousElementSibling;
                let nextNode = targetNode.parentNode.nextElementSibling;
    
                if(prevNode != null && prevNode.nodeName == "HR") {
                    prevNode.classList.add("js-border-none");
                }
                if(nextNode != null && nextNode.nodeName == "HR") {
                    nextNode.classList.add("js-border-none");
                }
            }
        });
        popularKeywordList.addEventListener("mouseout", function(e) {
            let targetNode = e.target;
            // console.log(targetNode);
            if(targetNode.nodeName == "A") {       // a태그가 맞다면
                let prevNode = targetNode.previousElementSibling;
                let nextNode = targetNode.nextElementSibling;
    
                if(prevNode != null && prevNode.nodeName == "HR") {
                    prevNode.classList.remove("js-border-none");
                }
                if(nextNode != null && nextNode.nodeName == "HR") {
                    nextNode.classList.remove("js-border-none");
                }
            }
            // e.stopPropagation();
        });
    }



    const keywordSearchForm = document.querySelector(".search-form");
    keywordSearchForm.addEventListener("click", e=>{
        // createPopularKeyword();
        searchKeywordArea.classList.add("js-visiable");
        keywordSearchForm.classList.add("focus");
        searchInput.classList.add("input-focus");
        blurBox.classList.add("js-blur");
    });
    // keywordSearchForm.addEventListener("mouseout", ()=> {
    //     console.log("블러박스 클릭");
    //     blurBox.classList.remove("js-blur");
    //     searchKeywordArea.classList.remove("js-visiable");
    //     keywordSearchForm.classList.remove("focus");
    // });
    document.getElementById("blurBox").addEventListener("click", e=>{
        searchKeywordArea.classList.remove("js-visiable");
        keywordSearchForm.classList.remove("focus");
        searchInput.classList.remove("input-focus");
        blurBox.classList.remove("js-blur");
    });
    // let exampleData = ['라스베이거스', '서울', '동대문', '부산 해운대'];
    // function createPopularKeyword() {
    //     popularKeywordList.innerHTML = "";
    //     for(let i = 0; i<exampleData.length; i++) {
    //         aNode = document.createElement("a");
    //         iNode = document.createElement("i");
    //         iNode.className = "fa-solid fa-location-dot";
    //         spanNode = document.createElement("span");
    //         spanNode.textContent = exampleData[i];
            
    //         aNode.append(iNode);
    //         aNode.append(spanNode);
    //         popularKeywordList.append(aNode);
            
    //         if(i != exampleData.length - 1) {
    //             let hr = document.createElement("hr");
    //             popularKeywordList.append(hr);
    //         }
    //     }
    // }

    // const contentTypeId = document.querySelectorAll("input[name='contentTypeId']");
    // for(let item of contentTypeId) {
    //     item.addEventListener("click", function(){
    //         const aroundSearch = document.getElementById("aroundSearch");
    //         let newHref = aroundSearch.href;
    //         newHref = newHref.replaceAll(newHref.substring(newHref.lastIndexOf("&")), `&contentTypeId=${item.value}`);
    //         aroundSearch.href = newHref;
    //     })
    // } 


    // 최근 검색
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", e=>{
        const keywordInput = document.getElementById("search-input");
        if(keywordInput.value.trim().length == 0) {     // 검색키워드 입력 x시 무반응
            e.preventDefault();
            return;
        }

        // let recentKeyword = localStorage.getItem("recentKeyword");
        // if(recentKeyword == null) {         // 저장된 최근검색어가 존재하지 않으면ㄴ
        //     const recentKeywordArr = [];          // 최근검색어 객체배열 생성
        //     recentKeywordArr.push(new ResentKeyword(       // 검색어 추가
        //         keywordInput.value.trim(),
        //         document.querySelector("input[name='contentTypeId']:checked").value,
        //         document.getElementById("areaCode").value
        //     ));
        //     localStorage.setItem("recentKeyword", JSON.stringify(recentKeywordArr));
        // } else {                            // 저장된 최근검색어가 존재하면       
        //     recentKeywordArr = JSON.parse(recentKeyword);   // json -> 객체배열 파싱
        //     if(recentKeywordArr.length >= 10) {             // 저장된 최근검색어가 10개보다 많다면
        //         recentKeywordArr.shift();                   // 맨 앞에(0번 인덱스)항목 제거
        //     }
        //     recentKeywordArr.push(new ResentKeyword(       // 검색어 추가
        //             keywordInput.value.trim(),
        //             document.querySelector("input[name='contentTypeId']:checked").value,
        //             document.getElementById("areaCode").value
        //     ));
        //     localStorage.setItem("recentKeyword", JSON.stringify(recentKeywordArr));
        // }
        let recentKeyword = localStorage.getItem("recentKeyword");
        let recentKeywordArr;
        if(recentKeyword == null) {         // 저장된 최근검색어가 존재하지 않으면ㄴ
            recentKeywordArr = [];          // 최근검색어 객체배열 생성
            
        } else {                            // 저장된 최근검색어가 존재하면       
            recentKeywordArr = JSON.parse(recentKeyword);   // json -> 객체배열 파싱
            if(recentKeywordArr.length >= 10) {             // 저장된 최근검색어가 10개보다 많다면
                recentKeywordArr.shift();                   // 맨 앞에(0번 인덱스)항목 제거
            }
        }
        recentKeywordArr.push(new ResentKeyword(       // 검색어 추가
            keywordInput.value.trim(),
            document.querySelector("input[name='contentTypeId']:checked").value,
            document.getElementById("areaCode").value
        ));
        localStorage.setItem("recentKeyword", JSON.stringify(recentKeywordArr));
    });
});

function RecentPlace(title, firstimage, contentid, contenttypeid, averageRating, reviewCount, addr1) {
    this.title = title;
    this.firstimage = firstimage;
    this.contentid = contentid;
    this.contenttypeid = contenttypeid;
    this.averageRating = averageRating;
    this.reviewCount = reviewCount;
    this.addr1 = addr1;
}

function addRecentViewPlace(title, firstimage, contentid, contenttypeid, averageRating, reviewCount, addr1) {
    let recentPlace = localStorage.getItem("recentPlace");
    let recentPlaceArr;
    if (recentPlace == null) {          // 최근 본 장소가 한개도 없다면
        recentPlaceArr = [];
    } else {                            // 있다면
        recentPlaceArr = JSON.parse(recentPlace);
        // contentId가 이미 있는지 확인
        if(recentPlaceArr.find((p)=>p.contentid == contentid) != null) { // 없으면
            return true; 
        }
        if(recentPlaceArr.length >= 10) { // 10개 이상이면
            recentPlaceArr.shift();
        }
    }
    recentPlaceArr.push(new RecentPlace(title, firstimage, contentid, contenttypeid, averageRating, reviewCount, addr1));
    localStorage.setItem("recentPlace", JSON.stringify(recentPlaceArr));

    return true;
}