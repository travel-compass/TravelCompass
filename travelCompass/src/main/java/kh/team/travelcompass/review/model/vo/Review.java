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
	private String contentid; // 리뷰 작성한 장소contentid 번호
	private String firstimage; // 장소 썸네일 이미지 주소
	private String reviewflag; // 리뷰 삭제Y / 비공개B

	private int reviewLike; // 리뷰 좋아요 갯수
	private int likeCheck; // 리뷰 좋아요 확인

	private String memberNickname; // 리뷰 작성한 회원 닉네임
	private String profileImage; // 리뷰 작성한 회원 프로필 사진

	private List<ReviewImage> reviewImgList;
	
	private String contenttypeid;
	// Report 관련 column추가
	private int reportNo;          //신고 번호
	private int reasonCode;        //사유 코드
	private int reviewReportCount; //리뷰당 신고횟수
	private int blindReviewCount;  //멤버당 블라인드 리뷰 개수
	private int reporter;          //신고자(loginMemberNo)

}
