package kh.team.travelcompass.answer.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AnswerDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
}
