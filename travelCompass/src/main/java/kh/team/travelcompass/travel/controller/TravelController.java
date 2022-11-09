package kh.team.travelcompass.travel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.team.travelcompass.member.model.vo.Member;


@RequestMapping("/travel")
@Controller
public class TravelController {

	@GetMapping("/main")
	public String travelMain() {
		
		
		return "/travel/travelMain";
	}
	
}
