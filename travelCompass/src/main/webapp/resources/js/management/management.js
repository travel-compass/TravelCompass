const managementType = document.getElementsByName("managementType");


for(let management of managementType){
    management.addEventListener("click", function(){
        console.log(management.value);
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
                managementLi.innerText = "신고 번호 : " + report.reportNo;
                
                const managementLi2 = document.createElement("li");
                managementUl.appendChild(managementLi2);
                managementLi2.innerText = "불량 회원 :" + report.memberNo;

                const managementLi3 = document.createElement("li");
                managementUl.appendChild(managementLi3);
                managementLi3.innerText = "신고 사유  : " + report.resonCode;

                const managementLi4 = document.createElement("li");
                managementUl.appendChild(managementLi4);
                managementLi4.innerText = "신고 내용  : " + report.reviewContent;

            }
        },
        error : error => {
            console.log(error);
        }
    });
})
}
