package kh.team.travelcompass.travel.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.common.Util;
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
	
	
	/** 여행 상세 조회
	 * @param travelNo
	 * @param model
	 * @param loginMember
	 * @return path로 포워드
	 * @throws JsonProcessingException
	 */
	@GetMapping("/detail/{memberNo}/{travelNo}")
	public String createTravel(@PathVariable("travelNo") int travelNo, Model model,
			@PathVariable("memberNo") int memberNo,
			@SessionAttribute(value="loginMember", required=false) Member loginMember) throws JsonProcessingException {
		String path = "";
		
		if(loginMember != null) {		// 로그인 중이라면
			if(memberNo == loginMember.getMemberNo()) {		// 조회하려는 여행 페이지가 자신이 만든 여행이라면
				// 로그인한 회원이 스크랩한 모든 장소 조회
				List<Place> scrapPlaceList = service.selectScrapPlaceList(loginMember.getMemberNo());
				model.addAttribute("scrapPlaceList", scrapPlaceList);
				model.addAttribute("jsonScrapPlaceList", new ObjectMapper().writeValueAsString(scrapPlaceList));
				path = "/travel/travelCreate";
			}
		} else {						// 로그인 중이 아니면 무조건 다른사람의 여행 페이지
			path = "/travel/travelDetail";
		}
		// 여행 번호에 맞는 여행 조회
		Travel travel = service.selectTravel(travelNo);
		model.addAttribute("jsonTravel", new ObjectMapper().writeValueAsString(travel));
		if(travel.getTravelContent() != null) {
			travel.setTravelContent(Util.newLineClear(travel.getTravelContent()));
		}
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
	
	/** 비동기 여행 상세 조회
	 * @param travelNo
	 * @return travel
	 */
	@ResponseBody
	@GetMapping("/selectTravel")
	public Travel selectTravel(int travelNo) {
		return service.selectTravel(travelNo);
	}
	
	
	/** 비동기 스크랩 장소 목록 검색
	 * @param memberNo
	 * @param keyword
	 * @param sort
	 * @return placeList
	 */
	@ResponseBody
	@GetMapping("/searchScrap")
	public List<Place> searchScrap(int memberNo, String keyword, @RequestParam(value="sort", required=false, defaultValue="0") int sort) {
		
		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("memberNo", memberNo);
		paramMap.put("keyword", keyword);
		paramMap.put("sort", sort);
		
		return service.searchScrap(paramMap);
	}
	
	@ResponseBody
	@GetMapping("/deleteScrap")
	public int deleteScrap(int placeScrapNo)  {
		
		
		return service.deleteScrap(placeScrapNo);
	}
	
	@ResponseBody
	@PostMapping("/updateTravel")
	public int updateTravel(String jsonTravel) throws JsonParseException, JsonMappingException, IOException {
		int result = 0;
		// 전달받은 json문자열을 객체로 변환
		ObjectMapper ob = new ObjectMapper();
		Travel travel = ob.readValue(jsonTravel, Travel.class);
		
		try {
			result = service.updateTravel(travel);
			
		}catch (Exception e) {
			e.printStackTrace();
			result = 0;
		}
		
		return result;
	}
	
	
	
	/** 여행 삭제
	 * @param loginMember
	 * @param travelNo
	 * @param referer
	 * @param ra
	 * @return path로 리다이렉트
	 */
	@PostMapping("/deleteTravel/{travelNo}")
	public String deleteTravel(@SessionAttribute("loginMember") Member loginMember,
			@PathVariable int travelNo,
			RedirectAttributes ra ) {
		String path = "";
		String message = "";
		
		
		// 삭제 서비스 수행 후 result 반환
		int result = service.deleteTravel(travelNo);
		
		// result가 0보다 크면
		// 로그인 되어있는 회원의 여행 목록 페이지로 메세지와 함께 이동
		if(result > 0) {
			path = "/travel/list/" + loginMember.getMemberNo();
			message = "여행을 삭제했습니다.";
		} else {
			path = "/travel/detail/" + travelNo;
			message = "여행 삭제에 실패했습니다.";
			// result가 0보다 크지 않으면
			// 메세지와 함께 현재 페이지 리다이렉트
		}
		ra.addFlashAttribute("message", message);
		return "redirect:"+path;
	}
}
