package kh.team.travelcompass.profile.model.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.profile.model.dao.ProfileDAO;
import kh.team.travelcompass.profile.model.vo.HSHReview;
@Service
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileDAO dao;

	// 리뷰 페이지 목록 조회
	@Override
	public Map<String, Object> profileReviewPage(int cp) {
		
		
		int listCount = dao.getListCount();
		
		List<HSHReview> reviewList = dao.selectReviewList();
		
		System.out.println(reviewList);
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("listCount", listCount);
		map.put("reviewList", reviewList);
		
		
		return map;
	}

	// 사진 리뷰만 있는 목록 조회하기
	@Override
	public Map<String, Object> profileOnlyImageReviewPage(int cp) {
		
		int listCount = dao.getListCount();
		
		List<HSHReview> reviewList = dao.selectOnlyImageReviewList();
		
		System.out.println(reviewList);
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("reviewList", reviewList);
		
		map.put("listCount", listCount);
		
		
		return map;
		
	}
	
}
