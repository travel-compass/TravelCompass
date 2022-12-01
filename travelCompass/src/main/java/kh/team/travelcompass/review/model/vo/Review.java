package kh.team.travelcompass.review.model.vo;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Review {
	private int reviewNo; // 리뷰 전호
	private int rating; // 평점
	private String reviewTitle; // 리뷰 제목
	private String reviewContent; // 리뷰 내용
	private String reviewDate; // 리뷰 작성일
	private int memberNo; // 리뷰 작성한 회번 번호
	private String contentId; // 리뷰 작성한 장소contentid 번호
	private String firstImage; // 장소 썸네일 이미지 주소
	private String reviewflag; // 리뷰 삭제Y / 비공개B

	private int reviewLike; // 리뷰 좋아요 갯수

	// 황석현 요구사항
	private String memberNickname; // 리뷰 작성한 회원 닉네임
	private String profileImage; // 리뷰 작성한 회원 프로필 사진

	private List<ReviewImage> reviewImgList;
	

}
