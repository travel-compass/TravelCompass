package kh.team.travelcompass.profile.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kh.team.travelcompass.profile.model.service.ProfileService;

@Controller
public class ProfileController {
	
	@Autowired
	private ProfileService service;

	// 프로필 페이지 이동
	@GetMapping("/profile/MemberPage")
	public String MemberPage() {
		
		return "profile/MemberPage";
	}
	
	// 리뷰 페이지 목록 조회
	@GetMapping("/profile/MemberPage/Review")
	public String profileReviewPage(Model model,
			@RequestParam(value = "cp", required = false, defaultValue = "1") int cp
			) {
		
		Map<String, Object> map = service.profileReviewPage(cp);
		
		model.addAttribute("map", map);
		
		return "profile/MemberPage";
	}
	
	// 사진만 있는 리뷰 페이지 목록 조회
	@GetMapping("/profile/MemberPage/Imgae")
	public String profileOnlyImageReviewPage(Model model,
			@RequestParam(value = "cp", required = false, defaultValue = "1") int cp
			) {
		
		Map<String, Object> map = service.profileOnlyImageReviewPage(cp);
		
		model.addAttribute("map", map);
		
		return "profile/MemberPage";
	}
	
}
