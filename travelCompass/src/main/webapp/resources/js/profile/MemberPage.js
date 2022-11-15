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
const div_P = document.createElement("div");
div_P.className.add("user-page-review-colums2");

const div_Cdiv1 = document.createElement("div");
div_Cdiv1.className.add("user-page-review-header-style");

const div_Cdiv1_Cdiv1 = document.createElement("div");
div_Cdiv1_Cdiv1.className.add("user-page-review-header-layout");

const div_Cdiv1_Cdiv1_Ca1 = document.createElement("a");
div_Cdiv1_Cdiv1_Ca1.className.add("review-user-image");

const div_Cdiv1_Cdiv1_Cdiv1 = document.createElement("div");

const div_Cdiv1_Cdiv1_Cdiv1_Cspan1 = document.createElement("span");
const div_Cdiv1_Cdiv1_Cdiv1_Ca1 = document.createElement("a");

const div_Cdiv1_Cdiv2 = document.createElement("div");
const div_Cdiv1_Cdiv3 = document.createElement("div");

const div_Cdiv2 = document.createElement("div");

const div_Cdiv2_Cdiv1 = document.createElement("div");
const div_Cdiv2_Cdiv2 = document.createElement("div");
const div_Cdiv2_Cdiv3 = document.createElement("div");

const div_Cdiv3 = document.createElement("div");

const div_Cdiv3_Cdiv1 = document.createElement("div");

const div_Cdiv4 = document.createElement("div");

const div_Cdiv4_Cdiv1 = document.createElement("div");
const div_Cdiv4_Cdiv2 = document.createElement("div");
const div_Cdiv4_Cdiv3 = document.createElement("div");

// 실패 이름 너무 구림

// 재시도 비동기 리뷰 테이블 작성 작명

const reviewColums2_dt = document.createElement("div");