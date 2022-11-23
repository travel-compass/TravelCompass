package kh.team.travelcompass.profile.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public class ProfileDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public int getListCount() {
		return 0;
	}
}
