package kh.team.travelcompass.place.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.place.model.api.PlaceAPI;
import kh.team.travelcompass.place.model.vo.Place;
import kh.team.travelcompass.question.model.dao.QuestionDAO;
import kh.team.travelcompass.question.model.vo.Question;
import kh.team.travelcompass.review.model.dao.ReviewDAO;
import kh.team.travelcompass.review.model.vo.Review;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired
	private PlaceAPI api;
	
	@Autowired
	private ReviewDAO rDao;
	
	@Autowired
	private QuestionDAO qDao;


	@Override
	public List<Place> nearByPlace(String x, String y) throws Exception {
		Map<String, String> paramMap = new HashMap<>();
		
		paramMap.put("mapx", x);
		paramMap.put("mapy", y);
		paramMap.put("contentTypeId", "12");
		
	
		return api.nearByPlace(paramMap);
	}
	
	@Override
	public Place page(String contentId, String contentTypeId) {
		
		// api에서 요청받은 객체 - 리뷰,qna 연결해야함
//		Place place=api.place(contentId,contentTypeId);
//		
//		List<Review> reviewList=rDao.select(contentId);
//		List<Question> questionList=qDao.select(contentId);
//		
//		place.setReviewList(reviewList);
//		place.setQuestionList(questionList);
		
		return null;
	}
	
}
