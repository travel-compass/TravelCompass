package kh.team.travelcompass.management.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.vo.Review;

@Repository
public class ManagementDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	
	public Map<String, Object> selectAll() {
		
		List<Object> review = sqlSession.selectList("managementMapper.selectAllReview");
		
		List<Object> member = sqlSession.selectList("managementMapper.selectAllMember");
		
		Map<String, Object>selectAll = new HashMap<String, Object>();
		
		selectAll.put("review", review);
		selectAll.put("member", member);
		
		
		return selectAll;
	}


	
	
}