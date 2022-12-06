package kh.team.travelcompass.profile.model.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.profile.model.dao.ProfileDAO;
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
	
	// 팔로우 체크하기
	@Override
	public int followCheck(Map<String, Object> map) {
		return dao.followCheck(map);
	}

	// 팔로우 하기
	@Transactional
	@Override
	public int follow(Map<String, Integer> paramMap) {
		return dao.follow(paramMap);
	}

	// 팔로우 취소 하기
	@Transactional
	@Override
	public int unFollow(Map<String, Integer> paramMap) {
		return dao.unFollow(paramMap);
	}

	// 팔로우한 인원 리스트 조회하기
	@Override
	public List<Member> selectFollowMemberList(int memberNo) {
		
		List<Member> followMemberList = dao.selectFollowMemberList(memberNo);
		
		return followMemberList;
	}

	// 팔로잉 한 인원 리스트 조회하기
	@Override
	public List<Member> selectFollowingMemberList(int memberNo) {
		
		List<Member> followingMemberList = dao.selectFollowingMemberList(memberNo);
		
		return followingMemberList;
	}
	
}
