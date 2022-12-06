const managementType = document.getElementsByName("managementType");


for(let management of managementType){
    management.addEventListener("click", function(){
        console.log(management.value);
        //전체 신고 조회
        if(management.value == 1){
            $.ajax({
                url : "/selectAll",
                type : "GET",
                dataType : "json",
                success : reportAll => {
                    console.log(reportAll);
                    console.log(reportAll[0]);
                    const reportList= document.getElementsByClassName("report-list")[0];
                    reportList.innerHTML = "";

                    for(let report of reportAll){
                        console.log(report);
                        //div 생성
                        const managementDetail = document.createElement("div");
                        managementDetail.className = "management-detail";
                        reportList.appendChild(managementDetail);

                        //div 안에 ul 생성
                        const managementUl = document.createElement("ul");
                        managementDetail.appendChild(managementUl);

                        //ul 안에 li 생성
                        const managementLi = document.createElement("li");
                        managementUl.appendChild(managementLi);
                        managementLi.innerText = "불량 회원 :" + report.memberNo;
                        
                        const managementLi2 = document.createElement("li");
                        managementUl.appendChild(managementLi2);
                        managementLi2.innerText = "리뷰 번호 : " + report.reviewNo;
                        
                        const managementLi3 = document.createElement("li");
                        managementUl.appendChild(managementLi3);
                        managementLi3.innerText ="신고 횟수 : " + report.reviewReportCount;

                        const managementLi4 = document.createElement("li");
                        managementUl.appendChild(managementLi4);
                        managementLi4.innerText = "신고된 리뷰 내용  : " + report.reviewContent;

                        const managementBtn = document.createElement("button");
                        managementBtn.className = "report-list-btn";
                        managementBtn.innerText = "블라인드";
                        managementUl.appendChild(managementBtn);
                    }
                },
                error : error => {
                    console.log(error);
                }
            })
        };
        //블라인드 리스트 조회
        if(management.value == 2){
            $.ajax({
                url : "/selectBlind",
                type : "GET",
                dataType : "json",
                success : reportAll => {
                    console.log(reportAll);
                    console.log(reportAll[0]);
                    const reportList= document.getElementsByClassName("report-list")[0];
                    reportList.innerHTML = "";

                    for(let report of reportAll){
                        console.log(report);
                        //div 생성
                        const managementDetail = document.createElement("div");
                        managementDetail.className = "management-detail";
                        reportList.appendChild(managementDetail);

                        //div 안에 ul 생성
                        const managementUl = document.createElement("ul");
                        managementDetail.appendChild(managementUl);

                        //ul 안에 li 생성
                        const managementLi = document.createElement("li");
                        managementUl.appendChild(managementLi);
                        managementLi.innerText = "불량 회원 : " + report.memberNo;
                        
                        const managementLi2 = document.createElement("li");
                        managementUl.appendChild(managementLi2);
                        managementLi2.innerText = "블라인드 리뷰 횟수 : " + report.blindReviewCount;
                        
                        const managementBtn = document.createElement("button");
                        managementBtn.className = "secession-btn";
                        managementBtn.innerText = "회원 기능 정지";
                        managementUl.appendChild(managementBtn);
                    }
                },
                error : error => {
                    console.log(error);
                }
            })
        };
        //강퇴 회원 조회
        if(management.value == 3){
            $.ajax({
                url : "/selectBanMember",
                type : "GET",
                dataType : "json",
                success : reportAll => {
                    console.log(reportAll);
                    console.log(reportAll[0]);
                    const reportList= document.getElementsByClassName("report-list")[0];
                    reportList.innerHTML = "";

                    for(let report of reportAll){
                        console.log(report);
                        //div 생성
                        const managementDetail = document.createElement("div");
                        managementDetail.className = "management-detail";
                        reportList.appendChild(managementDetail);

                        //div 안에 ul 생성
                        const managementUl = document.createElement("ul");
                        managementDetail.appendChild(managementUl);

                        //ul 안에 li 생성
                        const managementLi = document.createElement("li");
                        managementUl.appendChild(managementLi);
                        managementLi.innerText = "불량 회원 : " + report.memberNo;
                        
                        const managementLi2 = document.createElement("li");
                        managementUl.appendChild(managementLi2);
                        managementLi2.innerText = "블라인드 리뷰 횟수 : " + report.blindReviewCount;

                        const managementBtn = document.createElement("button");
                        managementBtn.className = "secession-cancel-btn";
                        managementBtn.innerText = "회원 정지 취소";
                        managementUl.appendChild(managementBtn);

                    }
                },
                error : error => {
                    console.log(error);
                }
            })

        };
        });

    };


//블라인드 처리
$(document).on("click", ".report-list-btn", function(){
    //띄어쓰기 주의
    const reviewNo = $(this).parent().find("li").eq(1).text().split(" : ")[1];
    console.log(reviewNo);
    $.ajax({
        url : "/reviewBlind",
        type : "get",
        data : {
            reviewNo : reviewNo
        },
        success : result => {
            console.log(result);
            alert("블라인드 처리 되었습니다.");
            location.reload();
        },
        error : error => {
            console.log(error);
        }
    })
});

//회원 강퇴
$(document).on("click", ".secession-btn", function(){
    //띄어쓰기 주의
    const memberNo = $(this).parent().find("li").eq(0).text().split(" : ")[1];
    console.log(memberNo);
    $.ajax({
        url : "/memberBan",
        type : "get",
        data : {
            memberNo : memberNo
        },
        success : result => {
            console.log(result);
            alert("회원 강퇴 되었습니다.");
            location.reload();
        },
        error : error => {
            console.log(error);
        }
    })
});

//회원 강퇴 취소
$(document).on("click", ".secession-cancel-btn", function(){
    //띄어쓰기 주의
    const memberNo = $(this).parent().find("li").eq(0).text().split(" : ")[1];
    console.log(memberNo);
    $.ajax({
        url : "/memberBanCancel",
        type : "get",
        data : {
            memberNo : memberNo
        },
        success : result => {
            console.log(result);
            alert("회원 강퇴를 취소했습니다.");
            location.reload();
        },
        error : error => {
            console.log(error);
        }
    })
});