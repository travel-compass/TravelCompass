package kh.team.travelcompass.review.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReviewImage {
	
	private int reviewImageNo; // 리뷰 이미지 정렬번호
	private int reviewNo; // 해당 리뷰 번호
	private String reviewImgPath; // 리뷰 이미지 경로
	private String reviewImgDelFlag; // 리뷰 이미지 삭제 여부
	private int reviewImgOrder; // 리뷰 이미지 순서

}
