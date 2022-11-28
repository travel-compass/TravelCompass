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

	public List<Travel> selectTravelList(int memberNo) {
		return sqlSession.selectList("travelMapper.selectTravelList", memberNo);
	}
}
