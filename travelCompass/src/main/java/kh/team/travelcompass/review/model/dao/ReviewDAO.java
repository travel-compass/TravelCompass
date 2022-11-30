package kh.team.travelcompass.review.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.team.travelcompass.place.model.vo.Pagination;
import kh.team.travelcompass.review.model.vo.Review;

@Repository
public class ReviewDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/**
	 * 장소 상세페이지 리뷰 개수 조회
	 * 
	 * @param contentid
	 * @return
	 */
	public int getListCount(String contentid) {
		return sqlSession.selectOne("reviewMapper.getListCount", contentid);
	}

	/**
	 * 정렬 조건이 일치하는 게시글 수 조회
	 * 
	 * @param paramMap
	 * @return
	 */
	public int getListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("reviewMapper.getListCount_order", paramMap);
	}

	/**
	 * 리뷰 목록 정렬
	 * 
	 * @param pagination
	 * @param contentid
	 * @return reivewList
	 */
	public List<Review> orderReviewList(Pagination pagination, Map<String, Object> paramMap) {

		// RowBounds 객체(마이바티스)
		// - 여러행 조회 결과 중 특정 위치부터 지정된 행의 개수만 조회하는 객체
		// (몇 행을 건너 뒬것인가?)

		int offset = (pagination.getPageNo() - 1) * pagination.getNumOfRows();

		RowBounds rowBounds = new RowBounds(offset, pagination.getNumOfRows());

		// namespace.id , 파라미터 , RowBounds객체
		// 파라미터가 없을 경우 null 대입
		return sqlSession.selectList("reviewMapper.selectReviewList", paramMap, rowBounds);
	}

	/** 특정 contentid 리뷰 조회
	 * @param pagination
	 * @param contentId
	 * @return reviewList
	 */
	public List<Review> selectReviewList(Pagination pagination, String contentId) {
		
		int offset = (pagination.getPageNo() - 1) * pagination.getNumOfRows();

		RowBounds rowBounds = new RowBounds(offset, pagination.getNumOfRows());

		return sqlSession.selectList("reviewMapper.selectReviewList", contentId, rowBounds);

	}

	// 리뷰 삽입(작성)
	public int insertReview(Review review) {
		return sqlSession.insert("reviewMapper.insertReview", review);
	}

}
