const managementType = document.getElementsByName("managementType");
for(let management of managementType){
    management.addEventListener("click", function(){
    $.ajax({
        url : "/selectAll",
        type : "GET",
        sucess : result => {
            console.log(result);
        }
    });
})
}
