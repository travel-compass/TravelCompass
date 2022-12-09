package kh.team.travelcompass.management.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.review.model.vo.Review;

public interface ManagementService {

	
	/**모든 신고 조회
	 * @return List<Review>reportList
	 */
	List<Review> selectAll();
	
	
	/**회원 블라인드 리뷰 수 조회
	 * @return List<Review>reportList
	 */
	List<Review> selectBlind();

	
	/**정지 회원 조회
	 * @return List<Review>reportList
	 */
	List<Review> selectBanMember();
	
	
	
	/**블라인드 처리
	 * @param reviewNo
	 * @return result
	 */
	int reviewBlind(int reviewNo);

	
	/**회원 기능 정지
	 * @param memberNo
	 * @return result
	 */
	int memberBan(int memberNo);

	
	/**회원 정지 취소
	 * @param memberNo
	 * @return result
	 */
	int memberBanCancel(int memberNo);

	
	

	


}
