package kh.team.travelcompass.question.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class QuestionDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

}
