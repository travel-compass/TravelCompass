package kh.team.travelcompass.profile.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.profile.model.service.ProfileService;
import kh.team.travelcompass.review.model.vo.Review;

@Controller
public class ProfileController {
	
	@Autowired
	private ProfileService service;

	// 프로필 페이지 이동
	@GetMapping("/profile/{memberNo}")
	public String MemberPage(@PathVariable("memberNo") int memberNo,
			Model model) {
		
		// 프로필 페이지의 회원정보 가져오기
		Member member = service.selectMember(memberNo);
		
		// 프로필 페이지의 리뷰 리스트 가져오기
		List<Review> reviewList = service.ReviewSelectList(memberNo);
		
		
		model.addAttribute("member", member);
		model.addAttribute("reviewList", reviewList);
		
		return "profile/MemberPage";
	}
	
	// fed ajax 비동기(리뷰 사진 유무 같이 출력)
	@GetMapping("/profile/{memberNo}/Fed")
	@ResponseBody
	public List<Review> profileFedSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		List<Review> fedList = service.ReviewSelectList(memberNo);
		
		model.addAttribute("reviewList", fedList);
		
		return fedList;
	}
	
	// review ajax 비동기(리뷰 사진 없는 게시물만 출력)
	@GetMapping("/profile/{memberNo}/Review")
	@ResponseBody
	public List<Review> profileReviewSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		List<Review> reviewList = service.ReviewSelectList(memberNo);
		
		model.addAttribute("reviewList", reviewList);
		
		return reviewList;
	}
	
	// imageReview ajax 비동기(리뷰 사진 있는 게시물만 출력)
	@GetMapping("/profile/{memberNo}/ImageReview")
	@ResponseBody
	public List<Review> profileImageReviewSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		List<Review> imageReviewList = service.ReviewSelectList(memberNo);
		
		model.addAttribute("reviewList", imageReviewList);
		
		return imageReviewList;
	}
	
	
}
