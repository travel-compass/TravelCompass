package kh.team.travelcompass.profile.model.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.profile.model.dao.ProfileDAO;
import kh.team.travelcompass.profile.model.vo.HSHReview;
import kh.team.travelcompass.review.model.vo.Review;
@Service
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileDAO dao;

	// ajax 리뷰 리스트 조회
	@Override
	public List<Review> ReviewSelectList(int memberNo) {
		
		int listCount = dao.getListCount(memberNo);
		
		List<Review> reviewList = dao.ReivewSelectList(memberNo);
		
		return reviewList;
	}

	// 프로필 페이지 이동 시 프로필 페이지의 회원 정보 받아오기
	@Override
	public Member selectMember(int memberNo) {
		
		Member member = dao.selectMember(memberNo);
		
		return member;
	}

	// 리뷰 페이지 목록 조회
//	@Override
//	public Map<String, Object> profileReviewPage(int cp) {
//		
//		
//		int listCount = dao.getListCount();
//		
//		List<HSHReview> reviewList = dao.selectReviewList();
//		
//		System.out.println(reviewList);
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		
//		map.put("listCount", listCount);
//		map.put("reviewList", reviewList);
//		
//		
//		return map;
//	}

	// 사진 리뷰만 있는 목록 조회하기
//	@Override
//	public Map<String, Object> profileOnlyImageReviewPage(int cp) {
//		
//		int listCount = dao.getListCount();
//		
//		List<HSHReview> reviewList = dao.selectOnlyImageReviewList();
//		
//		System.out.println(reviewList);
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		
//		map.put("reviewList", reviewList);
//		
//		map.put("listCount", listCount);
//		
//		
//		return map;
//		
//	}
	
}
