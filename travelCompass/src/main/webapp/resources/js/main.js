document.addEventListener("DOMContentLoaded", function(){
    let body = document.querySelector("body");
    let blurBox = document.querySelector(".blur-box");
    let searchForm = document.querySelector(".search-form");
    let searchKeywordArea = document.querySelector(".search-keyword-area");
    let searchInput = searchForm.querySelector("#search-input");
    let popularKeywordList = searchForm.querySelector(".popular-keyword-list");
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
    searchInput.addEventListener("focus", createPopularKeyword); 
    searchInput.addEventListener("focusout", function(){
        searchKeywordArea.classList.remove("js-visiable");
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
        searchKeywordArea.classList.add("js-visiable");
        blurBox.classList.add("js-blur");
    }

    // ------------------------------------ 슬라이드 기능 ---------------------------------------------------
    let placeListArea = document.querySelector(".place-list-area");

    placeListArea.addEventListener("click", function (e) {
        // if(e.target.nodeName != "SPAN") {                   // 클릭한것이 span이 아니면 리턴
        //     console.log("스팬 아님");
        //     return;
        // } else {                                            // span이면
        //     if(e.target.className == "prev-arrow") {             // 클래스명이 prev-arrow면
        //         prevMove(e);                                     // prevMove호출
        //     } else {
        //         nextMove(e);
        //     }
        // }

        currentNode = e.target;
        if (e.target.nodeName == "I") {
            currentNode = currentNode.parentElement;
        }

        // console.log(currentNode);
        if (currentNode.className == "prev-arrow") {
            prevMove(currentNode);
        } else if(currentNode.className == "next-arrow") {
            nextMove(currentNode);
        } else {
            return;
        }
    })


    // 공통 
    let offset = document.querySelector(".slide-container").clientWidth + 20;
    // let placeListWidth = document.querySelector(".place-list").clientWidth;
    let placeItemWidth = 305;

    function prevMove(currentNode) {
        let prevBtn = currentNode;
        let nextBtn = prevBtn.nextElementSibling;
        let placeList = nextBtn.nextElementSibling;
        let placeListWidth = placeList.clientWidth;
        // console.log(prevBtn);
        // console.log(nextBtn);
        nextBtn.style.display = "flex";
        let currentLeft = placeList.offsetLeft;
        // let newOffset = currentLeft - offset;
        // let nextOffset = placeListWidth + currentLeft;

        // if (nextOffset <= newOffset) {
        //     placeList.style.left = placeList.offsetLeft + offset + "px";
        // } else if (-currentLeft < offset) {
        //     placeList.style.left = 0 + "px";
        //     prevBtn.style.display = "none";
        // }

        // 더많이 남았을 때
        if(offset + currentLeft < 0) {
            placeList.style.left = placeList.offsetLeft + offset + "px";
        } else {
            placeList.style.left = 0 + "px";
            prevBtn.style.display = "none";
        }
    }

    function nextMove(currentNode) {
        let nextBtn = currentNode;

        let prevBtn = nextBtn.previousElementSibling;
        let placeList = nextBtn.nextElementSibling;
        let placeListWidth = placeList.clientWidth;

        prevBtn.style.display = "flex";
        let currentLeft = placeList.offsetLeft;
        let newOffset = offset + -currentLeft;
        let nextOffset = placeListWidth - newOffset;

        if (nextOffset > offset) {
            placeList.style.left = placeList.offsetLeft - offset + "px";
        } else if (nextOffset <= offset) {
            placeList.style.left = placeList.offsetLeft - nextOffset + "px";
            nextBtn.style.display = "none";
        }
    }

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true
    });
})