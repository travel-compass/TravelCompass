package kh.team.travelcompass.question.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.question.model.vo.Question;

public interface QuestionService {
	
	
	/** QnA 목록 조회
	 * @param contentid
	 * @return qList
	 */
	Map<String, Object> selectQuestionList(String contentid, int cp);
	

	/** QnA 등록
	 * @param question
	 * @return question
	 */
	int insertQuestion(Question question);


	/** QnA 삭제
	 * @param questionNo
	 * @return result
	 */
	int deleteQuestion(int questionNo);


	/** QnA 수정
	 * @param question
	 * @return result
	 */
	int updateQuestion(Question question);

}
