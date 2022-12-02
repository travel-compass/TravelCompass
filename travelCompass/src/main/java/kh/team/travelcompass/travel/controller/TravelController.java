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
import kh.team.travelcompass.place.model.vo.Place;
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
	
	
	@GetMapping("/detail/{travelNo}")
	public String createTravel(@PathVariable("travelNo") int travelNo, Model model,
			@SessionAttribute(value="loginMember", required=false) Member loginMember) {
		String path = "";
		
		if(loginMember != null) {		// 로그인 중이라면
			if(travelNo == loginMember.getMemberNo()) {		// 조회하려는 여행 페이지가 자신이 만든 여행이라면
				// 로그인한 회원이 스크랩한 모든 장소 조회
				List<Place> scrapPlaceList = service.selectScrapPlaceList(loginMember.getMemberNo());
				model.addAttribute("scrapPlaceList", scrapPlaceList);
				path = "/travel/travelCreate";
			}
		} else {						// 로그인 중이 아니면 무조건 다른사람의 여행 페이지
			path = "/travel/travelDetail";
		}
		// 여행 번호에 맞는 여행 조회
		Travel travel = service.selectTravel(travelNo);
		model.addAttribute("travel", travel);
		return path;
	}
	
	/** 비동기 여행 생성
	 * @param travel
	 * @param loginMember
	 * @return result
	 */
	@ResponseBody
	@GetMapping("/create")
	public int createTravel(Travel travel, @SessionAttribute("loginMember") Member loginMember) {
		
		travel.setMemberNo(loginMember.getMemberNo());
		return service.createTravel(travel);
	}
	
	
	/** 비동기 여행 목록 조회
	 * @param memberNo
	 * @return travelList
	 */
	@ResponseBody
	@GetMapping("/select")
	public List<Travel> selectTravelList(int memberNo) {
		System.out.println("호출");
		List<Travel> travelList = service.selectTravelList(memberNo);
		System.out.println(travelList);
		return travelList;
	}
}
