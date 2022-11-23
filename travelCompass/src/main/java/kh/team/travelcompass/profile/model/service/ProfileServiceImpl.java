package kh.team.travelcompass.profile.model.service;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.profile.model.dao.ProfileDAO;
@Service
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileDAO dao;

	// 리뷰 페이지 목록 조회
	@Override
	public Map<String, Object> profileReviewPage(int cp) {
		
		
		int listCount = dao.getListCount();
		
		System.out.println("확인");
		
		return null;
	}

	
	
}
