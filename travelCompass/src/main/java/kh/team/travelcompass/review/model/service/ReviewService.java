package kh.team.travelcompass.review.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.place.model.vo.Place;
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
	List<String> countRating(String contentid);
	
	
	/** 리뷰 연결(평균평점, 리뷰갯수)
	 * 
	 */
	public List<Place> connectReview(List<Place> placeList);

	/** 더보기 조회
	 * @param contentid
	 * @param rowBoundCount
	 * @return
	 */
	List<Review> moreReviewList(String contentid, int rowBoundCount);

	/** 좋아요 증가
	 * @param paramMap
	 * @return result
	 */
	int reviewLikeUp(Map<String, Object> paramMap);

	
	
	/** 좋아요 여부 체크
	 * @param map
	 * @return result
	 */
	int reviewLikeCheck(Map<String, Object> map);

	
	/** 좋아요 증가
	 * @param paramMap
	 * @return result
	 */
	int reviewLikeUp(Map<String, Object> paramMap);

	
	
	/** 좋아요 감소
	 * @param paramMap
	 * @return result
	 */
	int reviewLikeDown(Map<String, Object> paramMap);

	
	
	
}
