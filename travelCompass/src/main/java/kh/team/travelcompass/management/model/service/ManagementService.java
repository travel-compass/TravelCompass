package kh.team.travelcompass.management.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.review.model.vo.Review;

public interface ManagementService {

	//모든 신고 조회
	List<Review> selectAll();
	
	//회원 블라인드 리뷰 수 조회
	List<Review> selectBlind();

	//정지 회원 조회
	List<Review> selectBanMember();
	
	
	
	//블라인드 처리
	int reviewBlind(int reviewNo);

	
	//회원 기능 정지
	int memberBan(int memberNo);

	//회원 정지 취소
	int memberBanCancel(int memberNo);

	
	

	


}
