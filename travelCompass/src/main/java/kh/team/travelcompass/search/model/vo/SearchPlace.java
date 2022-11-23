package kh.team.travelcompass.search.model.vo;

import lombok.Getter;

import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SearchPlace {
//	private String contentid;			// 콘텐츠 ID
//	private String contenttypeid;		// 콘텐츠타입 ID
//	private String firstimage2;			// 썸네일 이미지
//	private String title;				// 제목
//	private String dist;				// 거리
	private String contentid; // 호출 id
	private String contenttypeid; // 분류 카테고리
	private String areacode; // 지역코드
	private String tel; // 전화번호
	private String title; // 이름
	private String firstimage; // 대표이미지
	private String Address; // 주소
	private String mapx; // 맵x좌표
	private String mapy; // 맵y좌표
	private String overview; //개요(설명)
	private String restdate; // 쉬는날
	private String usetime; // 이용시간
	private String treatmenu; // 취급메뉴
	
}
