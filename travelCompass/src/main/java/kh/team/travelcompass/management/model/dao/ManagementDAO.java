package kh.team.travelcompass.management.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ManagementDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	public List<Map<String, Object>> selectAll() {
		
		 
	
		return sqlSession.selectList("reportMapper.selectAllReport");
	}



	
	
}