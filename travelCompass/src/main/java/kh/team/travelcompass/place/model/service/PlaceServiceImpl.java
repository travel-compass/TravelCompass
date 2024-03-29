package kh.team.travelcompass.place.model.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.place.model.api.PlaceAPI;
import kh.team.travelcompass.place.model.dao.PlaceDAO;
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
	private PlaceDAO dao;
	
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
	public Place detailPlace(String contentId, String contentTypeId) throws Exception {
		Map<String, String> paramMap=new HashMap<String, String>();
		
		paramMap.put("contentId", contentId);
		paramMap.put("contentTypeId", contentTypeId);
		paramMap.put("defaultYN","Y");
		paramMap.put("firstImageYN","Y");
		paramMap.put("addrinfoYN","Y");
		paramMap.put("mapinfoYN","Y");
		paramMap.put("overviewYN","Y");
		
		
		
		return api.detailPlace(paramMap);
	}
	
	@Override
	public Place infoPlace(String contentId, String contentTypeId) throws Exception {
		Map<String, String> paramMap=new HashMap<String, String>();
		
		paramMap.put("contentId", contentId);
		paramMap.put("contentTypeId", contentTypeId);
		
		return api.infoPlace(paramMap);
	}
	
	@Override
	public List<String> imageList(String contentId, String contentTypeId) throws Exception {
		Map<String, String> paramMap=new HashMap<String, String>();
		
		paramMap.put("contentId", contentId);
		
		paramMap.put("imageYN", "Y");
		paramMap.put("subImageYN", "Y");
		
		
		return api.imageList(paramMap);
	}
	
	// 스크랩 체크
	@Override
	public int scrapCheck(Map<String, Object> map) {
		return dao.scrapCheck(map);
	}
	
	// 장소 스크랩
	@Override
	public int scrap(Map<String, Object> paramMap) {
		return dao.scrap(paramMap);
	}
	
	// 스크랩 취소
	@Override
	public int scrapCancel(Map<String, Object> paramMap) {
		return dao.scrapCancel(paramMap);
	}
}
