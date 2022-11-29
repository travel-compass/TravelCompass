package kh.team.travelcompass.travel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.travel.model.service.TravelService;
import kh.team.travelcompass.travel.model.vo.Travel;


@RequestMapping("/travel")
@Controller
public class TravelController {

	@Autowired
	TravelService service;
	
	/** 특정회원의 모든 여행 조회
	 * @param memberNo
	 * @param model
	 * @return travelList
	 */
	@GetMapping("/list/{memberNo}")
	public String travelMain(@PathVariable("memberNo") int memberNo, Model model) {
		
		// 회원번호의 관련된 모든 여행 조회
		List<Travel> travelList = service.selectTravelList(memberNo);
		model.addAttribute("travelList", travelList);
		return "/travel/travelMain";
	}
	
	@ResponseBody
	@GetMapping("/create")
	public int createTravel(Travel travel, @SessionAttribute("loginMember") Member loginMember) {
		
		travel.setMemberNo(loginMember.getMemberNo());
		return service.createTravel(travel);
	}
	
	@ResponseBody
	@GetMapping("/select")
	public List<Travel> selectTravelList(int memberNo) {
		System.out.println("호출");
		List<Travel> travelList = service.selectTravelList(memberNo);
		System.out.println(travelList);
		return travelList;
	}
}
