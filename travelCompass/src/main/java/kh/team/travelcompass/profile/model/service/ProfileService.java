package kh.team.travelcompass.profile.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.review.model.vo.Review;

public interface ProfileService {

	// 리뷰 페이지 목록 조회
	//Map<String, Object> profileReviewPage(int cp);

	// 사진 리뷰만 있는 목록 조회
	//Map<String, Object> profileOnlyImageReviewPage(int cp);

	// ajax 리뷰 리스트 조회
	List<Review> ReviewSelectList();
	
	

}
