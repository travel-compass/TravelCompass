package kh.team.travelcompass.profile.model.vo;

import java.lang.reflect.Member;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class HSHReview {
	
	private int reviewNo;
	private int rating; // 평점
	private String reviewTitle;
	private String reviewContent;
	private String reviewDate;
	private int memberNo;
	private String contentId;
	private String firstImage;
	private String profileImage;
	private String memberNickname;
	private String reviewImagePath;
	
	 /*
	// 이미지 목록
	private List<HSHReviewImage> imageList;
	
	// 리뷰 쓴 맴버 목록(프로필 닉네임)
	private List<Member> memberList;
	
	*/
}
