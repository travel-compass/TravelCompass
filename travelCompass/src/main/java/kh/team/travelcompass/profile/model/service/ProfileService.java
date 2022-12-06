package kh.team.travelcompass.profile.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

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

	// 팔로우 한 인원 리스트 조회하기
	List<Member> selectFollowMemberList(int memberNo);

	// 팔로잉 한 인원 리스트 조회하기
	List<Member> selectFollowingMemberList(int memberNo);

	// 더보기 버튼 눌렀을 때 남은 리뷰 테이블 불러오기
	List<Review> moreReviewList(int memberNo, int rowBoundCount);

	// 프로필 이미지 변경
	int updateProfile(String wepPath, String filePath, 
			MultipartFile profileImage, Member loginMember) throws Exception;


}
