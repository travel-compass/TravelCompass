package kh.team.travelcompass.profile.model.service;

import java.util.Map;

public interface ProfileService {

	// 리뷰 페이지 목록 조회
	Map<String, Object> profileReviewPage(int cp);

	// 사진 리뷰만 있는 목록 조회
	Map<String, Object> profileOnlyImageReviewPage(int cp);
	
	

}
