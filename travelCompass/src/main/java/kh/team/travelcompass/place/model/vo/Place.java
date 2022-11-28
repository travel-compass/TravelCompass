package kh.team.travelcompass.place.model.vo;

import java.util.List;

import kh.team.travelcompass.question.model.vo.Question;
import kh.team.travelcompass.review.model.vo.Review;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Place {
	private String contentid; // 호출 id
	private String contenttypeid; // 분류 카테고리
	private String areaCode; // 지역코드
	private String tel; // 전화번호
	private String title; // 이름
	private String firstimage; // 대표이미지
	private List<String> imageList;
	private String addr1; // 주소
	private String mapx; // 맵x좌표
	private String mapy; // 맵y좌표
	private String overview; //개요(설명)
	private String restdate; // 쉬는날
	private String usetime; // 이용시간
	private String treatmenu; // 취급메뉴
	private String dist;		  // 중심좌포로부터거리 (m)
	
	private List<Review> reviewList; // 장소에 달린 리뷰리스트
	private List<Question> questionList;  // 장소에 달린 리뷰리스트
	
	// 여행 관련 필드
	private String scrapDate;
	private int travelListNo;
	private int travelNo;
	private int travelListOrder;
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//pagination
	
	private int pageNo;        //현재 페이지 번호 
	private int totalCount;    //전체 게시글 수
	private int numOfRows=10;     //한 페이지 목록에 보여지는 게시글 수
	private int pageSize=10 ;     // 보여질 페이지 번호 개수
	   
	private int maxPage;           // 마지막 페이지 번호
	private int startPage;         // 보여지는 맨 앞 페이지 번호 
	private int endPage;           // 보여지는 맨 뒤 페이지 번호
	   
    private int prevPage;          // 이전 페이지의 페이지 번호 맨 끝
	private int nextPage;          // 다음 페이지의 페이지 번호 맨 앞
	
	public Place(int totalCount, int pageNo) {
	      this.totalCount = totalCount;
	      this.pageNo = pageNo;
	      
	      // 객체 생성 시 전달 받은 값을 이용해
	      // 나머지 필드 값 생성
	      makePagination();
	   }
	   
    public Place(int totalCount, int pageNo, int numOfRows, int pageSize) {
	      this.totalCount = totalCount;
	      this.pageNo     = pageNo;
	      this.numOfRows  = numOfRows;
	      this.pageSize   = pageSize;
	      
	      makePagination();
	   }
	   
	   
	   
	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getNumOfRows() {
		return numOfRows;
	}

	public void setNumOfRows(int numOfRows) {
		this.numOfRows = numOfRows;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getMaxPage() {
		return maxPage;
	}

	public void setMaxPage(int maxPage) {
		this.maxPage = maxPage;
	}

	public int getStartPage() {
		return startPage;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public int getPrevPage() {
		return prevPage;
	}

	public void setPrevPage(int prevPage) {
		this.prevPage = prevPage;
	}

	public int getNextPage() {
		return nextPage;
	}

	public void setNextPage(int nextPage) {
		this.nextPage = nextPage;
	}

	

	   
	// 페이징 처리에 필요한 값을 계산하는 메소드
	private void makePagination() {
	      
	   // * maxPage : 최대 페이지 == 마지막 페이지 == 총 페이지 수
	   // 한 페이지에 글이 10개 씩 보여질 경우
	   // - 게시글이 95개인 경우 필요한 페이지 수 :  10 페이지
	   // - 게시글이 100개인 경우 필요한 페이지 수 : 10 페이지
	   // - 게시글이 101개인 경우 필요한 페이지 수 : 11 페이지
       // - 게시글이 109개인 경우 필요한 페이지 수 : 11 페이지
	      
	   // 전체 게시글 수 / 한 페이지에 보여지는 글 수 -> 올림처리
	   //   95  /  10 = 9.5  == 10
       //  100  /  10 = 10   == 10
       //  101  /  10 = 10.1 == 11
	   maxPage  =   (int)Math.ceil( (double)totalCount / numOfRows );
	      
	      
	   // * startPage : 페이지네이션 목록에서 제일 앞에 보여지는 페이지 번호
	   // 페이지네이션 목록이 10개씩 보여진다고 했을 때
	   // 현재 페이지가 1~10 인 경우 :  1 페이지
	   // 현재 페이지가 11~20 인 경우 : 11 페이지
	   // 현재 페이지가 21~30 인 경우 : 21 페이지
	   startPage = (pageNo-1) / pageSize * pageSize + 1;
	      
	      
	   // * endPage : 페이지네이션 목록에서 가장 끝 페이지 번호
	   // 페이지네이션 목록이 10개씩 보여진다고 했을 때
	   // 현재 페이지가 1~10 인 경우 :  10 페이지
	   // 현재 페이지가 11~20 인 경우 : 20 페이지
	   // 현재 페이지가 21~30 인 경우 : 30 페이지
	   endPage = startPage + pageSize - 1;
	      
	   // ** 계산된 endPage가 전체 페이지네이션 목록 수(maxPage)를 초과하는 경우
	   if(endPage > maxPage) {
	      endPage = maxPage;
	   }
	      
	      
	   // prevPage : 이전 페이지네이션 목록의 끝 번호
	   // nextPage : 다음 페이지네이션 목록의 시작 번호
	      
	   if(pageNo <= 10)   prevPage = 1;
	   else
	      //prevPage = (currentPage - 1) / pageSize * pageSize;
	      prevPage = startPage - 1;
	      
	   if(endPage == maxPage) nextPage = maxPage;
	   else               nextPage = endPage + 1;
	      
	      
	   }

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
