package kh.team.travelcompass.review.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.review.model.vo.Review;

public interface ReviewService {

	/** 처음 리뷰목록 조회 + 페이징처리
	 * @param contentId
	 * @param cp
	 * @return
	 */
	Map<String, Object> selectReviewList(String contentid, Map<String, Object> paramMap, int cp);
	
	/** 상세페이지 속 조건 별 리뷰 조회(추천,최신,평점) + 페이징 처리
	 * @param paramMap
	 * @param cp
	 * @return
	 */
	Map<String, Object> orderReviewList(String contentid, Map<String, Object> paramMap, int cp);


	/** 리뷰 등록
	 * @param review
	 * @return
	 */
	int insertReview(Review review);

	/** 리뷰 삭제
	 * @param contentid
	 * @return
	 */
	int deleteReview(int reviewNo);

	/** 평균 리뷰평점 조회
	 * @param contentId
	 * @return avgRating
	 */
	double selectAvgRating(String contentId);

	/** 작성된 리뷰 개수 조회
	 * @param contentId
	 * @return reviewCount
	 */
	int selectReviewCount(String contentId);

	/** 리뷰 수정
	 * @param review
	 * @return
	 */
	int updateReview(Review review);

	/** 평점별 개수 조회
	 * @param contentid
	 * @return
	 */
	List<Map<String, Integer>> countRating(String contentid);
	
}
