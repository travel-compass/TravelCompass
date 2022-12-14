package kh.team.travelcompass.profile.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.vo.Review;

public interface ProfileService {

	/**프로필 페이지 이동 시 프로필 페이지의 회원 정보 받아오기
	 * @param memberNo
	 * @return member, reviewList
	 */
	Member selectMember(int memberNo);
	
	/** 리뷰 조회 시 모든 리뷰 조회하기 (사진 유무 포함)
	 * @param memberNo
	 * @return FedList
	 */
	List<Review> allReviewSelectList(int memberNo);
	
	/** ajax 리뷰 리스트 조회
	 * @param memberNo
	 * @return reviewList
	 */
	List<Review> ReviewSelectList(int memberNo);

	/** ajax 이미지 리뷰 리스트 조회
	 * @param memberNo
	 * @return imageReviewList
	 */
	List<Review> imageReviewSelectList(int memberNo);
	
	// 팔로우 체크하기
	int followCheck(Map<String, Integer> map);
	
	// 팔로우 하기
	int follow(Map<String, Integer> paramMap);

	// 팔로우 취소 하기
	int unFollow(Map<String, Integer> paramMap);

	// 팔로우 한 인원 리스트 조회하기
	List<Member> selectFollowMemberList(int memberNo);

	// 팔로잉 한 인원 리스트 조회하기
	List<Member> selectFollowingMemberList(int memberNo);

	// 더보기 버튼 눌렀을 때 남은 피드 테이블 불러오기
	List<Review> moreFedList(int memberNo, int rowBoundCount);
	
	// 더보기 버튼 눌렀을 때 남은 리뷰 테이블 불러오기
	List<Review> moreReviewList(int memberNo, int rowBoundCount);
	
	// 더보기 버튼 눌렀을 때 남은 사진리뷰 테이블 불러오기
	List<Review> moreImageReviewList(int memberNo, int rowBoundCount);

	// 프로필 이미지 변경
	int updateProfile(String wepPath, String filePath, 
			MultipartFile profileImage, Member loginMember) throws Exception;

	// 리뷰 삭제
	int reviewDelete(int reviewNo);



}
