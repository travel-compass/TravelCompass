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

	//모든 신고 조회
	public List<Review> selectAll() {
		
		List<Review>result = sqlSession.selectList("reportMapper.selectAllReport");			
		return result;
	}


	//회원 블라인드 리뷰 수 조회
	public List<Review> selectBlind() {
		
		return sqlSession.selectList("reportMapper.selectBlind");
	}

	//정지 회원 조회
	public List<Review> selectBanMember() {
	
		return sqlSession.selectList("reportMapper.selectBanMember");
	}

	
	
	//블라인드 처리
	public int reviewBlind(int reviewNo) {
		
		return sqlSession.update("reportMapper.reviewBlind", reviewNo);
	}

	
	//회원 기능 정지
	public int memberBan(int memberNo) {
		
		return sqlSession.update("reportMapper.memberBan", memberNo);
	}

	//회원 정지 취소
	public int memberBanCancel(int memberNo) {
			
		return sqlSession.update("reportMapper.memberBanCancel", memberNo);
	}	

	//신고 등록
	public int insertReport(Map<String, Object> paramMap) {
		
		return sqlSession.insert("reportMapper.insertReport", paramMap);
	}
	
	
}