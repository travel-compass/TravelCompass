package kh.team.travelcompass.question.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.common.Util;
import kh.team.travelcompass.place.model.vo.Pagination;
import kh.team.travelcompass.question.model.dao.QuestionDAO;
import kh.team.travelcompass.question.model.vo.Question;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionDAO dao;

	// QnA 목록 조회
	@Override
	public Map<String, Object> selectQuestionList(String contentid, int cp) {

		// 1. 특정 게시판의 전체 게시글 수 조회(단, 삭제 제외)
		int listCount = dao.getListCount(contentid);

		// 2. 전체 게시글 수 + cp(현제 페이지)이용해서
		// 페이징 처리 객체 생성
		Pagination pagination = new Pagination(listCount, cp);

		// 3. 페이징 처리객체를 이용해서 게시글 목록 조회
		List<Question> questioinList = dao.selectQuestionList(pagination, contentid);

		Map<String, Object> questionMap = new HashMap<String, Object>();
		questionMap.put("pagination", pagination);
		questionMap.put("questionList", questioinList);

		return questionMap;
	}

	// QnA 등록
	@Override
	public int insertQuestion(Question question) {

		// XSS 방지, 개행문자 처리
//		question.setQuestionContent(Util.XSSHandling(question.getQuestionTitle()));
		question.setQuestionContent(Util.newLineHandling(question.getQuestionContent()));

		return dao.insertQuestion(question);
	}

	// QnA 삭제
	@Override
	public int deleteQuestion(int questionNo) {
		return dao.deleteQuestion(questionNo);
	}

	// QnA 수정
	@Override
	public int updateQuestion(Question question) {
		return dao.updateQuestion(question);
	}
}
