package kh.team.travelcompass.question.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kh.team.travelcompass.question.model.service.QuestionService;
import kh.team.travelcompass.question.model.vo.Question;

@RestController
@RequestMapping("/question")
public class QuestionController {

	@Autowired
	private QuestionService service;
	

	// QnA 목록 조회
	@GetMapping("/iist")
	public Map<String, Object> selectQuestionList(String contentid,
			@RequestParam(value="cp",required=false, defaultValue="1") int cp) {
		Map<String, Object> questionMap=service.selectQuestionList(contentid, cp);
		
		return questionMap;
	}
	
	// QnA 등록
	@PostMapping("/insert")
	public int insertQuestion(Question question) {
		return service.insertQuestion(question);
	}
	
	// QnA 삭제
	@GetMapping("/delete")
	public int deleteQuestion(int questionNo) {
		return service.deleteQuestion(questionNo);
	}
	
	// QnA 수정
	@PostMapping("/update")
	public int updateQuestion(Question question) {
		return service.updateQuestion(question);
	}
}
