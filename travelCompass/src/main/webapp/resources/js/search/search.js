
const LIMIT = 3;
// 페이지 내 목록 제한
let wrap = document.querySelector('#wrap');
// 카드리스트 컨테이너 노드
let paging = document.querySelector('#paging');
// 페이지처리 컨테이너 노드
let origin = window.location.origin;
// origin 경로
let path = window.location.pathname;
// 페이지 경로
// origin+path로 request.getParameter를 만들고 태그에 파라미터 넘기기 위함

let total = jsonList.length / LIMIT;
// 전체 공연 개수에 3(LIMIT)을 나누면 잘 페이지 수가 총 나옵니다
let page = request.getParameter("page");
// 파라미터를 가져오는 함수로 page값을 가져옵니다.
let end = LIMIT * page;
let start = (page-1) * LIMIT;
// Array.slice(시작인덱스번호=start, 잘라낼번호=end);

let pagination = jsonList.slice(start,end);

for(let key in pagination){
    wrap.innerHTML += (pagination[key].template());
}

paging.innerHTML = // 페이지 감소 버튼입니다.
// 페이지가 1페이지이면 더이상 감소하지 않게 합니다.
// =입니다. +=아닙니다. 
`
<li class="page-item">
    <a href="${origin+path}?page=${page==1?page:parseInt(page)-1}" class="page-link">&lt;&lt;</a>
</li>
`;

for(let i=0; i<total; i++){
if(i>(total/2)-5 && i<(total/2)+5){
        // 화면을 벗어나서 ... 처리했습니다.
        // if 구문 지우면 전체 페이지가 나옵니다.
        if(i<(total/2)-4){
            paging.innerHTML += `
            <li class="page-item fw-bold">
                ...
            </li>
            `;
        }
        continue;
    } else {
        // 이 부분만 있어도 됩니다.
        paging.innerHTML += `
        <li class="page-item${i+1==page?" fw-bold":""}">
            <a href="${origin+path}?page=${i+1}" class="page-link">${i+1}</a>
        </li>
        `;
    }
}

paging.innerHTML += // 페이지 증가 버튼입니다.
// 페이지가 total값이면 getParameter 받은 값으로 유지합니다.
`
<li class="page-item">
    <a href="${origin+path}?page=${page==total?page:parseInt(page)+1}" class="page-link">&gt;&gt;</a>
</li>
`