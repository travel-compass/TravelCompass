package kh.team.travelcompass.question.model.dao;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.place.model.vo.Pagination;
import kh.team.travelcompass.question.model.vo.Question;

@Repository
public class QuestionDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	// 작성된 QnA 개수 조회
	public int getListCount(String contentid) {
		return sqlSession.selectOne("questionMapper.getListCount", contentid);
	}

	// QnA 목록 조회
	public List<Question> selectQuestionList(Pagination pagination, String contentid) {
		int offset = (pagination.getPageNo() - 1) * pagination.getNumOfRows();

		RowBounds rowBounds = new RowBounds(offset, pagination.getNumOfRows());

		return sqlSession.selectList("questionMapper.selectQuestionList", contentid, rowBounds);
	}
	
	// QnA 등록
	public int insertQuestion(Question question) {
		return sqlSession.insert("questionMapper.insertQuestion", question);
	}

	// QnA
	public int deleteQuestion(int questionNo) {
		return sqlSession.update("questionMapper.deleteQuestion", questionNo);
	}

	public int updateQuestion(Question question) {
		return sqlSession.update("questionMapper", question);
	}
	
	
	

	
	

}
