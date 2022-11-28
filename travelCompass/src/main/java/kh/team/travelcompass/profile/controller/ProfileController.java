package kh.team.travelcompass.profile.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.team.travelcompass.profile.model.service.ProfileService;
import kh.team.travelcompass.review.model.vo.Review;

@Controller
public class ProfileController {
	
	@Autowired
	private ProfileService service;

	// 프로필 페이지 이동
	@GetMapping("/member/MemberPage")
	public String MemberPage() {
		
		return "profile/MemberPage";
	}
	
	// 리뷰 페이지 목록 조회
//	@GetMapping("/profile/MemberPage/Review")
//	public String profileReviewPage(Model model,
//			@RequestParam(value = "cp", required = false, defaultValue = "1") int cp
//			) {
//		
//		Map<String, Object> map = service.profileReviewPage(cp);
//		
//		model.addAttribute("map", map);
//		
//		return "profile/MemberPage";
//	}
	
	// 활동피드, 리뷰, 사진, 스크랩
	// 활동피드 = 활동한 이력 간단히 출력 예정
	// 리뷰 = 리뷰 중 글 리뷰 사진 리뷰 포함해서 출력
	// 지금 현재 리뷰가 없을 때 화면 출력 완료
	// jsp 에서 사진 있고 없고 분별해서 출력
	
	// 사진 = 리뷰 중 사진만 출력
	//
	
	// 포스팅 내가 쓴 리뷰 갯수
	// 팔로워 == 모달 팝업으로 리스트 출력
	// 팔로윙 == 모달 팝업으로 리스트 출력
	
	// 스크랩 = 스크랩 한 이력 출력
	
	// 프로필페이지 == 각 아이디가 다른 화면 구현
	// memberId or memberNo 에 따라 다르게 구현해야 함
	// 각 회원들마다 쓴 글 리뷰 나오게 구현
	// 사진 변경은 본인 프로필페이지일 때만 나오게
	
	// ajax 비동기식 화면 안깜빡이게 리뷰 목록 페이지 구현
	
	@GetMapping("/profile/MemberPage/Review")
	@ResponseBody
	public List<Review> profileReviewSelectList(Model model){
		
		
		List<Review> reviewList = service.ReviewSelectList();
		
		return reviewList;
	}
	
	// 사진만 있는 리뷰 페이지 목록 조회
//	@GetMapping("/profile/MemberPage/Image")
//	public String profileOnlyImageReviewPage(Model model,
//			@RequestParam(value = "cp", required = false, defaultValue = "1") int cp
//			) {
//		
//		Map<String, Object> map = service.profileOnlyImageReviewPage(cp);
//		
//		model.addAttribute("map", map);
//		
//		return "profile/MemberPage";
//	}
	
}
