package kh.team.travelcompass.management.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.review.model.vo.Review;

@Repository
public class ManagementDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	
	/**모든 신고 조회
	 * @return 신고한 글 번호,글 내용, 불량글 작성 회원번호, 불량글 신고 횟수  
	 * 			RP.REVIEW_NO, RV.REVIEW_CONTENT, RV.MEMBER_NO, (COUNT(*))REVIEW_REPORT_COUNT
	 */
	public List<Review> selectAll() {
		
		List<Review>result = sqlSession.selectList("reportMapper.selectAllReport");			
		return result;
	}


	
	/**회원 블라인드 리뷰 수 조회
	 * @return 불량글 작성 회원번호, 회원의 불량글 작성 횟수 
	 * 			R.MEMBER_NO, (COUNT(*))BLIND_REVIEW_COUNT 
	 */
	public List<Review> selectBlind() {
		
		return sqlSession.selectList("reportMapper.selectBlind");
	}

	
	/**정지 회원 조회
	 * @return 정지 회원 번호, 불량글 작성 횟수
	 * 			R.MEMBER_NO, (COUNT(*))BLIND_REVIEW_COUNT
	 */
	public List<Review> selectBanMember() {
	
		return sqlSession.selectList("reportMapper.selectBanMember");
	}

	
	
	/**블라인드 처리
	 * @param reviewNo
	 * @return result
	 */
	public int reviewBlind(int reviewNo) {
		
		return sqlSession.update("reportMapper.reviewBlind", reviewNo);
	}

	
	
	/**회원 기능 정지
	 * @param memberNo
	 * @return result
	 */
	public int memberBan(int memberNo) {
		
		return sqlSession.update("reportMapper.memberBan", memberNo);
	}

	
	/**회원 정지 취소
	 * @param memberNo
	 * @return result
	 */
	public int memberBanCancel(int memberNo) {
			
		return sqlSession.update("reportMapper.memberBanCancel", memberNo);
	}	




	
	
}