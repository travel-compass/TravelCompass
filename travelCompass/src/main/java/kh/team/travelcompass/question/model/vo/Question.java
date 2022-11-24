package kh.team.travelcompass.question.model.vo;

import java.util.List;

<<<<<<< HEAD

=======
>>>>>>> Feat.이성호_1123
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Question {
	
	private int questionNo; // QnA 번호
	private String questionTitle; // QnA 제목
	private String questionContent; // QnA 내용
	private String questionDate; // QnA 작성일
	private String questionDelFlag; // QnA 삭제여부(삭제 Y)
	private String contentId; // QnA가 작성된 장소 번호
	private String memberNo; // QnA 작성한 회원 번호
	
	private int parentNo; // 부모글 식별번호
	
}
