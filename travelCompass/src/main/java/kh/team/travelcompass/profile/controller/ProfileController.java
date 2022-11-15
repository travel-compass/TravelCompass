package kh.team.travelcompass.profile.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/profile")
@Controller
public class ProfileController {

	@GetMapping("/MemberPage")
	public String MemberPage() {
		
		return "profile/MemberPage";
	}
}
