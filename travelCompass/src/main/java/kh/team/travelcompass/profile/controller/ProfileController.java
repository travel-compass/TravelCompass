package kh.team.travelcompass.profile.controller;


import java.util.List;
import java.util.Map;

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
		
		Member member = service.selectMember(memberNo);
		
		model.addAttribute("member", member);
		
		return "profile/MemberPage";
	}
	
	
	@GetMapping("/profile/{memberNo}/Review")
	@ResponseBody
	public List<Review> profileReviewSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		
		List<Review> reviewList = service.ReviewSelectList(memberNo);
		
		model.addAttribute("reviewList", reviewList);
		
		return reviewList;
	}
	
	
}
