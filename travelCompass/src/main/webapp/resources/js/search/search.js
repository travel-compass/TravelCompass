// //페이징을 위한 전역변수

// let totalCount;
// let pageNo = 1 ;           //현재 페이지 번호(globalCurrentPage)
// let numOfRows = 10 ;       //한 페이지에 보여줄 게시글 수 = dataPerPage
// let pageCount=10;          //한 화면에 보여줄 페이지 수

// //검색시 pageNo를 1로 초기화
// function search(){
//     pageNo = 1;
// }

// //페이지 번호 클릭시 해당 페이지 데이터 출력
// $(document).on("click", "#pagination a", function(){
//     pageNo = $(this).attr("data-pageNo");
// });


// $(document).ready(function(){

//     //$ajax로 데이터 가져오기
//     $.ajax({
//         url: "localhost/search?keyword=${param.keyword}&contentTypeId=${param.contentTypeId}&areaCode=${param.areaCode}",
//         method: "GET",
//         dataType: "json",
//         success: function(data){
//             totalCount = ${totalCount};
//         }
//     });

//     //페이징 표시 호출
//     paging(totalCount, numOfRows, pageCount , globalPageNo );
// });

// //페이징 표시 함수
// function paging(totalCount, numOfRows, pageCount, currentpageNo){
//     console.log("currentPageNo :" + currentPageNo);
//     totalPage = Math.ceil(totalCount/numOfRows); //총 페이지 수

//     if(totalPage<pageCount){
//         pageCount = totalPage;
//     }

//     let pageGroup = Math.ceil(currentPageNo/pageCount); //페이지 그룹
//     let last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
//     if(last > totalPage){
//         last = totalPage;
//     }
//     let first = last - (pageCount-1); //화면에 보여질 첫번째 페이지 번호
//     let next = last+1;
//     let prev = first-1;

//     let pageHtml = "";

//     if(prev > 0){
//         pageHtml += "<li><a href='#' id='prev'>이전</a></li>";
//     }

//     //페이징 번호 표시
//     for(let i=first; i<=last; i++){
//         if(currentPage == i ){
//             pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
//         }else{
//             pageHtml += "<li><a href='#' id='" + i + "'>" + i + "</a></li>";
//         }
//     }

//     if(last < totalPage){
//         pageHtml += "<li><a href='#' id='next'>다음</a></li>";
//     }

//     $("#pagination").html(pageHtml);
//     let displayCount = "";
//     displayCount = "현재 -1" + totalPage + "페이지 / " + totalCount + "개의 게시글";
//     $("#displayCount").text(displayCount);

    
// }

// // 현재 페이지와 페이지당 글 개수 반영
// function displayData(currentPageNo, numOfRows){
//     let chartHtml = "";

//     currentPageNo = Number(currentPageNo);
//     numOfRows = Number(numOfRows);

//     for(
//         var i = (currentPageNo-1)*numOfRows;
//         i<(currentPageNo-1)*numOfRows + numOfRows;
//         i++
//     ){
//         chartHtml +=
//         "<tr><td>" +
//         dataList[i].d1 +
//         "</td><td>" +
//         dataList[i].d2 +
//         "</td><td>" +
//         dataList[i].d3 +
//         "</td></tr>";
//     } //dataList는 임의의 데이터임.. 각 소스에 맞게 변수를 넣어주면 됨...
//     $("#dataTableBody").html(chartHtml);
// }


// //페이지 번호 클릭시 이벤트
// $("#pagination li a").click(function(){
//     let $id = $(this).attr("id");
//     selectedPage = $(this).text();

//     if($id == "next")selectedPage = next;
//     if($id == "prev")selectedPage = prev;

//     //pageNo에 선태된 페이지 번호를 저장
//     globalPageNo = selectedPage;
//     //페이징 표시
//     paging(totalCount, numOfRows, pageCount, selectedPage);

//     displayData(selectedPage, numOfRows);
// });