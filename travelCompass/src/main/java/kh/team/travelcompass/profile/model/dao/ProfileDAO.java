package kh.team.travelcompass.profile.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.profile.model.vo.HSHReview;
import kh.team.travelcompass.review.model.vo.Review;
@Repository
public class ProfileDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 리뷰 수 조회
	 * @return
	 */
	public int getListCount() {
		return sqlSession.selectOne("profileMapper.getListCount");
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
	public List<Review> ReivewSelectList() {
		return sqlSession.selectList("profileMapper.ReviewSelectList");
	}
}
