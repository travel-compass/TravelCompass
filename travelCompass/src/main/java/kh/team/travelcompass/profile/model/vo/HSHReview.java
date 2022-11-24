package kh.team.travelcompass.profile.model.vo;

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

}
