let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
} 

const dotmenu = document.getElementsByClassName("user-page-review-dot-style");

for(let item of dotmenu){
    item.addEventListener("click", function(){
        item.nextElementSibling.style.display = "inline-block";
    });
    item.nextElementSibling.addEventListener("click", function(){
        item.nextElementSibling.style.display = "none";
    });
}

const suportButton = document.getElementsByClassName("suport-button");

for(let item of suportButton){
    let count = 0;
    let flag = false;
    
    item.addEventListener("click", function(){

        if(flag == false){
            item.firstElementChild.style.color = "black";
            item.style.textDecoration = "underline";
            count++;
            flag = true;
        } else {
            item.firstElementChild.style.color = "#757575";
            item.style.textDecoration = "none";
            count--;
            flag = false;
        }

        if (count == 0){
            item.parentElement.previousElementSibling.style.display = "none";
            // item.parentElement.previousElementSibling.style.visibility = "hidden";

            // item.parentElement.previousElementSibling.style.maxHeight= "0px";
        } else {
            // item.parentElement.previousElementSibling.style.visibility = "visible";
            // item.parentElement.previousElementSibling.style.maxHeight= "300px";
            item.parentElement.previousElementSibling.style.display = "flex";
            item.parentElement.previousElementSibling.innerHTML = count + "개의 도움이 되는 리뷰";


            
        }
    });

}

// 비동기 리뷰 테이블 작성

const reviewTextColum = document.createElement("div");
reviewTextColum.classList.add("user-page-review-colums2");

    const reviewTextHeaderStyle = document.createElement("div");
    reviewTextHeaderStyle.classList.add("user-page-review-header-style");

        const reviewTextHeaderLayout = document.createElement("div");
        reviewTextHeaderLayout.classList.add("user-page-review-header-layout");

            const reviewTextImage = document.createElement("a");
            reviewTextImage.classList.add("review-user-image");

            reviewTextImage.innerHTML = "<img src='${loginMember.profileImage}'>";

            const reviewInfoLayout = document.createElement("div");
            reviewInfoLayout.classList.add("review-user-info-layout");

                const reviewInfoNickname = document.createElement("span");
                reviewInfoNickname.classList.add("review-user-nickname");

                reviewInfoNickname.innerHTML = "<a href='#'>유저닉네임</a>님이 리뷰를 작성했습니다."

                    const reviewInfoDateLink = document.createElement("a");
                    reviewInfoDateLink.classList.add("review-user-dday");

                    reviewInfoDateLink.innerText = "0000년 0월";
                    
        const reviewTextDotStyle = document.createElement("div");
        reviewTextDotStyle.classList.add("user-page-review-dot-style");

        const reivewTextDotDownMenu = document.createElement("div");
        reivewTextDotDownMenu.classList.add("user-page-review-dot-down-menu");

            const downMenu = document.createElement("ul");
            downMenu.classList.add("down-menu");

                const downMenu_li1 = document.createElement("li");
                    
                    const  downMenu_li1_a = document.createElement("a");

                    downMenu_li1_a.innerText = "수정";
                    
                const downMenu_li2 = document.createElement("li");
                    
                    const  downMenu_li2_a = document.createElement("a");

                    downMenu_li2_a.innerText = "삭제";
                    
        const reviewTextDataTableStyle = document.createElement("div");
        reviewTextDataTableStyle.classList.add("review-date-table-style");

            const reviewTextPoint = document.createElement("div");

                const reviewText_span1 = document.createElement("span");
                reviewText_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";

                const reviewText_span2 = document.createElement("span");
                reviewText_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const reviewText_span3 = document.createElement("span");
                reviewText_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const reviewText_span4 = document.createElement("span");
                reviewText_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const reviewText_span5 = document.createElement("span");
                reviewText_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

            const reviewTextTitle = document.createElement("div");
            reviewTextTitle.classList.add("review-title");

            reviewTextTitle.innerText = "리뷰 제목";

            const reviewTextContent = document.createElement("div");
            reviewTextContent.classList.add("review-content");

            reviewTextContent.innerText = "내용";

            const reviewTextDte = document.createElement("div");
            reviewTextDte.classList.add("review-date");

                const reviewText_RDT = document.createElement("span");
                reviewText_RDT.classList.add("rdt");

                reviewText_RDT.innerText = "방문날짜 :";

            reviewTextDte.innerText = "0000년 00월";

        const reviewTextNaviStyle = document.createElement("div");
        reviewTextNaviStyle.classList.add("review-navi-style");

            const reviewTextNaviLayout = document.createElement("div");
            reviewTextNaviLayout.classList.add("review-navi-layout");

                const reviewTextNaviImage = document.createElement("a");
                reviewTextNaviImage.classList.add("review_navi_left");
                reviewTextNaviImage.innerHTML = "<div><img src='/resources/images/profile/venis.webp'></div>";
                
                    const reviewTextNaviTitle = document.createElement("div");
                    reviewTextNaviTitle.classList.add("review_navi_title");
                    reviewTextNaviTitle.innerHTML = "<div>위치정보 제목</div>";

                        const reviewTextNaviDeep = document.createElement("div");
                        reviewTextNaviDeep.classList.add("review-navi-deep");

                            const reviewTextNaviDeepPoint = document.createElement("div");
                            reviewTextNaviDeepPoint.classList.add("review-navi-deep-point");

                                const reviewTextNavi_span1 = document.createElement("span");
                                reviewTextNavi_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                                const reviewTextNavi_span2 = document.createElement("span");
                                reviewTextNavi_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                                
                                const reviewTextNavi_span3 = document.createElement("span");
                                reviewTextNavi_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                                
                                const reviewTextNavi_span4 = document.createElement("span");
                                reviewTextNavi_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                                
                                const reviewTextNavi_span5 = document.createElement("span");
                                reviewTextNavi_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";

                            const reviewTextNaviCount = document.createElement("div");
                            reviewTextNaviCount.innerText = "00건의 리뷰";
                        
                        const reviewTextNavi = document.createElement("div");
                        reviewTextNavi.innerText = "배니스, 이탈리아";

                const reviewTextNaviLike = document.createElement("div");
                reviewTextNaviLike.classList.add("review-navi-right");
                reviewTextNaviLike.innerHTML = "<i class='fa-solid fa-heart'></i>";

        const reviewTextSupport = document.createElement("div");
        reviewTextSupport.classList.add("review-support");

        const reviewTextBottomMenu = document.createElement("div");
        reviewTextBottomMenu.classList.add("review-bottom-menu-style");

            const suportTextButton = document.createElement("div");
            suportTextButton.classList.add("suport-button");
            suportTextButton.innerHTML = "<i class='fa-regular fa-thumbs-up'></i>도움이 됨"
// --------------------------------------------------------------------------------------------