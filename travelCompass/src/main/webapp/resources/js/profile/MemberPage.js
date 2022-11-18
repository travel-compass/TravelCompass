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

const suportbutton = document.getElementsByClassName("suport-button");

for(let item of suportbutton){
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

const review_text_colum = document.createElement("div");
review_text_colum.classList.add("user-page-review-colums2");

    const review_text_header_style = document.createElement("div");
    review_text_header_style.classList.add("user-page-review-header-style");

        const review_text_header_layout = document.createElement("div");
        review_text_header_layout.classList.add("user-page-review-header-layout");

            const review_text_image_fild = document.createElement("a");
            review_text_image_fild.classList.add("review-user-image");

                const review_text_image_data = document.createElement("img");

            const review_info_layout = document.createElement("div");
            review_info_layout.classList.add("review-user-info-layout");

                const review_info_nickname = document.createElement("span");
                review_info_nickname.classList.add("review-user-nickname");

                    const review_info_nickname_link = document.createElement("a");
                    review_info_nickname_link.innerText = "유저닉네임";

                review_info_nickname.innerText = "님이 리뷰를 작성했습니다."

                    const review_info_date_link = document.createElement("a");
                    review_info_date_link.classList.add("review-user-dday");

                    review_info_date_link.innerText = "0000년 0월";
                    
        const review_text_header_dot_style = document.createElement("div");
        review_text_header_dot_style.classList.add("user-page-review-dot-style");

        const reivew_text_header_dot_down_menu = document.createElement("div");
        reivew_text_header_dot_down_menu.classList.add("user-page-review-dot-down-menu");

            const down_menu = document.createElement("ul");
            down_menu.classList.add("down-menu");

                const down_menu_li1 = document.createElement("li");
                    
                    const  down_menu_li1_a = document.createElement("a");

                    down_menu_li1_a.innerText = "수정";
                    
                const down_menu_li2 = document.createElement("li");
                    
                    const  down_menu_li2_a = document.createElement("a");

                    down_menu_li2_a.innerText = "삭제";
                    
        const review_text_data_table_style = document.createElement("div");
        review_text_data_table_style.classList.add("review-date-table-style");

            const review_text_point = document.createElement("div");

                const review_text_span1 = document.createElement("span");
                review_text_span1.innerHTML = "<i class='fa-solid fa-circle'></i>";

                const review_text_span2 = document.createElement("span");
                review_text_span2.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const review_text_span3 = document.createElement("span");
                review_text_span3.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const review_text_span4 = document.createElement("span");
                review_text_span4.innerHTML = "<i class='fa-solid fa-circle'></i>";
                
                const review_text_span5 = document.createElement("span");
                review_text_span5.innerHTML = "<i class='fa-solid fa-circle'></i>";
            const review_text_title = document.createElement("div");
            review_text_title.classList.add("review-title");

            review_text_title.innerText = "리뷰 제목";

            const review_text_content = document.createElement("div");
            review_text_content.classList.add("review-content");

            review_text_content.innerText = "내용";

            const review_text_date = document.createElement("div");
            review_text_date.classList.add("review-date");

                const review_text_rdt = document.createElement("span");
                review_text_rdt.classList.add("rdt");

                review_text_rdt.innerText = "방문날짜 :";

            review_text_date.innerText = "0000년 00월";

// ---------------------------------------------------------------------------------------------