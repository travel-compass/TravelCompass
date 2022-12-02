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
	
}
