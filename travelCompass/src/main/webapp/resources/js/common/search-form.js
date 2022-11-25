document.addEventListener("DOMContentLoaded", ()=>{
    const blurBox = document.querySelector(".blur-box");
    const searchForm = document.querySelector(".search-form");
    const searchKeywordArea = document.querySelector(".search-keyword-area");
    const searchInput = searchForm.querySelector("#search-input");
    const popularKeywordList = searchForm.querySelector(".popular-keyword-list");
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


    const keywordSearchForm = document.querySelector(".search-form");
    keywordSearchForm.addEventListener("click", e=>{
        createPopularKeyword();
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
    let exampleData = ['라스베이거스', '서울', '동대문', '부산 해운대'];
    function createPopularKeyword() {
        popularKeywordList.innerHTML = "";
        for(let i = 0; i<exampleData.length; i++) {
            aNode = document.createElement("a");
            iNode = document.createElement("i");
            iNode.className = "fa-solid fa-location-dot";
            spanNode = document.createElement("span");
            spanNode.textContent = exampleData[i];
            
            aNode.append(iNode);
            aNode.append(spanNode);
            popularKeywordList.append(aNode);
            
            if(i != exampleData.length - 1) {
                let hr = document.createElement("hr");
                popularKeywordList.append(hr);
            }
        }
    }
});