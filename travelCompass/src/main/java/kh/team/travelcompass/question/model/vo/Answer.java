package kh.team.travelcompass.question.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Answer {
	
	private int answerNo; // 답변 번호
	private String answerContent; // 답변 내용
	private String answerDate; // 답변 작성일
	private String answerDelFlag; // 삭제플래그(삭제Y, 비공개B)
	private String questionNo; // 답변이 작성된 QnA 번호
	private int memberNo; // 답변을 작성한 회원번호
}
