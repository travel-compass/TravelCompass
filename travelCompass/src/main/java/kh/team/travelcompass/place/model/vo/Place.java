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
}
