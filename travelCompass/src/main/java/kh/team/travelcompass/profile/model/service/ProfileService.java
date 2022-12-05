package kh.team.travelcompass.profile.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.vo.Review;

public interface ProfileService {

	// ajax 리뷰 리스트 조회
	List<Review> ReviewSelectList(int memberNo);

	// 프로필 페이지 이동 시 프로필 페이지의 회원 정보 받아오기
	Member selectMember(int memberNo);

	// 팔로우 체크하기
	int followCheck(Map<String, Object> map);
	
	// 팔로우 하기
	int follow(Map<String, Integer> paramMap);

	// 팔로우 취소 하기
	int unFollow(Map<String, Integer> paramMap);

	// 팔로우 한 인원 리스트 출력
	List<Member> selectFollowMemberList(int memberNo);


}
