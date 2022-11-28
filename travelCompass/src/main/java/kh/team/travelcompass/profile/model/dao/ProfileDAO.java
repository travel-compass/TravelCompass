package kh.team.travelcompass.profile.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.vo.Review;
@Repository
public class ProfileDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 리뷰 수 조회
	 * @return
	 */
	public int getListCount(int memberNo) {
		return sqlSession.selectOne("profileMapper.getListCount", memberNo);
	}

	/** 리뷰 게시판 목록 조회
	 * @return
	 */
//	public List<HSHReview> selectReviewList() {
//		return sqlSession.selectList("profileMapper.selectReviewList");
//	}
//
//	public List<HSHReview> selectOnlyImageReviewList() {
//		return sqlSession.selectList("profileMapper.selectReviewList");
//	}

	/** ajax 리뷰 리스트 조회
	 * @return reviewList
	 */
	public List<Review> ReivewSelectList(int memberNo) {
		return sqlSession.selectList("profileMapper.ReviewSelectList", memberNo);
	}

	/** 프로필 페이지 이동 시 프로필 페이지의 회원 정보 받아오기
	 * @param memberNo
	 * @return list
	 */
	public Member selectMember(int memberNo) {
		return sqlSession.selectOne("memberMapper.selectMember", memberNo);
	}
}
