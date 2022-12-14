package kh.team.travelcompass.report.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReportDAO {

	
	@Autowired
	private SqlSessionTemplate sqlSession;

	
	
	
	/**중복 신고 체크
	 * @param paramMap
	 * @return result
	 */
	public int reportCheck(Map<String, Object> paramMap) {
		
		return sqlSession.selectOne("reportMapper.reportCheck", paramMap);
	}
	
	
	/**신고 등록
	 * @param paramMap
	 * @return result
	 */
	public int insertReport(Map<String, Object> paramMap) {
		
		return sqlSession.insert("reportMapper.insertReport", paramMap);
	}

	
	
}
