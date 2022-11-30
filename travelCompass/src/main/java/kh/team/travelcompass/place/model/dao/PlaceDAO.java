package kh.team.travelcompass.place.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PlaceDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 스크랩 여부 체크
	 * @param map
	 * @return
	 */
	public int scrapCheck(Map<String, Object> map) {
		return sqlSession.selectOne("placeMapper.scrapCheck", map);
	}

	/** 장소 스크랩
	 * @param paramMap
	 * @return
	 */
	public int scrap(Map<String, Object> paramMap) {
		return sqlSession.insert("placeMapper.scrap", paramMap);
	}

	public int scrapCancel(Map<String, Object> paramMap) {
		return sqlSession.delete("placeMapper.scrapCancel", paramMap);
	}
	
	
}
