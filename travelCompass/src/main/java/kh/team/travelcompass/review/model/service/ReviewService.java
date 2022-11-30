package kh.team.travelcompass.review.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.review.model.vo.Review;

public interface ReviewService {

	/** 상세페이지 속 조건 별 리뷰 조회(추천,최신,평점) + 페이징 처리
	 * @param paramMap
	 * @param cp
	 * @return
	 */
	Map<String, Object> orderReviewList(Map<String, Object> paramMap, int cp);

	/** 처음 리뷰목록 조회
	 * @param contentId
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectReviewList(String contentId, int cp);

	int insertReview(Review review);

	
	
		
	
	
}
