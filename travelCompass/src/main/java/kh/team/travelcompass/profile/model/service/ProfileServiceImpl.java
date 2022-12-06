package kh.team.travelcompass.profile.model.service;


import java.io.File;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import kh.team.travelcompass.common.Util;
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

	// 더보기 버튼 눌렀을 때 남은 리뷰 테이블 불러오기
	@Override
	public List<Review> moreReviewList(int memberNo, int rowBoundCount) {
		
		List<Review> moreReviewList = dao.moreReviewList(memberNo, rowBoundCount);
		
		return moreReviewList;
	}

	// 프로필 이미지 수정
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int updateProfile(String wepPath, String filePath, 
			MultipartFile profileImage, Member loginMember) throws Exception {
		
		String temp = loginMember.getProfileImage();
		
		String rename = null;
		
		if (profileImage.getSize() == 0) {
			loginMember.setProfileImage(null);
		} else {
			
			rename = Util.fileRename(profileImage.getOriginalFilename());
			
			loginMember.setProfileImage(wepPath + rename);
		}
		
		int result = dao.updateProfile(loginMember);
		
		if (result > 0) {
			
			if (rename != null) {
				
				profileImage.transferTo(new File(filePath, rename));
			}
		} else {
			
			loginMember.setProfileImage(temp);
			throw new Exception("파일 업로드 실패");
		}
		
		return result;
	}
	
}
