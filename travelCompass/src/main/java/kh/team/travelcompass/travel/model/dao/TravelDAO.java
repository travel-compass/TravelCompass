package kh.team.travelcompass.travel.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.travel.model.vo.Travel;

@Repository
public class TravelDAO {
	@Autowired
	SqlSessionTemplate sqlSession;

	/** 특정 회원 여행 목록 조회 DAO
	 * @param memberNo
	 * @return travelList
	 */
	public List<Travel> selectTravelList(int memberNo) {
		return sqlSession.selectList("travelMapper.selectTravelList", memberNo);
	}

	
	/** 여행 추가 DAO
	 * @param travel
	 * @return result
	 */
	public int createTravel(Travel travel) {
		return sqlSession.insert("travelMapper.createTravel", travel);
	}
}
