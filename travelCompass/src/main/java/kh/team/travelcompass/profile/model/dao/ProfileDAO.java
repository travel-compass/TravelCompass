package kh.team.travelcompass.profile.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.profile.model.vo.HSHReview;
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
	public List<HSHReview> selectReviewList() {
		return sqlSession.selectList("profileMapper.selectReviewList");
	}

	public List<HSHReview> selectOnlyImageReviewList() {
		return sqlSession.selectList("profileMapper.selectOnlyImageReviewList");
	}
}
