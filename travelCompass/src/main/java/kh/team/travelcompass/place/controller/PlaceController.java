package kh.team.travelcompass.place.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import kh.team.travelcompass.location.model.service.LocationService;
import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.place.model.service.PlaceService;
import kh.team.travelcompass.place.model.vo.Place;
import kh.team.travelcompass.review.model.dao.ReviewDAO;
import kh.team.travelcompass.review.model.service.ReviewService;
import kh.team.travelcompass.review.model.vo.Review;

@Controller
@RequestMapping("/place")
public class PlaceController {

	@Autowired
	private PlaceService service;
	
	@Autowired
	private LocationService lservice;
	
	@Autowired
	private ReviewService rservice;
	
	
	@GetMapping("/detail")
	public String page(String contentId,
			String contentTypeId,
			@RequestParam(value="cp",required=false, defaultValue="1") int cp,
			@RequestParam Map<String,Object> paramMap,
			@SessionAttribute(value="loginMember",required=false) Member loginMember,
			Model model) throws Exception {
		
		// title,overview
		Place mainPlace=service.detailPlace(contentId,contentTypeId);
		
		// info 
		Place infoPlace=service.infoPlace(contentId,contentTypeId);
		
		// image
		List<String> imageList =service.imageList(contentId,contentTypeId);
		
		// aroundPlace list
		Map<String, List<Place>> aroundPlaceList=lservice.detailAroundSearch(mainPlace.getMapy(), mainPlace.getMapx(), contentTypeId);
		
		// reviewList
//		Map<String, Object> reviewMap=rservice.selectReviewList(contentId, cp);

		if(mainPlace!=null) {
			// PLACE_SCRAP 테이블 확인
			if(loginMember!=null) {
				Map<String, Object> map=new HashMap<String, Object>();
				map.put("contentid",contentId);
				map.put("memberNo", loginMember.getMemberNo());
				
				int result=service.scrapCheck(map);
				
				if(result>0) { // 스크랩 되어있는 경우
					model.addAttribute("scrapCheck", "on");
				}
			}
		}
		
		mainPlace.setImageList(imageList);
		mainPlace.setRestdate(infoPlace.getRestdate());
		mainPlace.setUsetime(infoPlace.getUsetime());
		mainPlace.setTreatmenu(infoPlace.getTreatmenu());

		
		model.addAttribute("place", mainPlace);
		model.addAttribute("aroundPlaceList",aroundPlaceList);
//		model.addAttribute("reviewMap", reviewMap);
		
		
		System.out.println(mainPlace);
		System.out.println(aroundPlaceList);
		
		return "place/detailPlace"; 
	}
	
	
	@GetMapping("/scrap")
	@ResponseBody
	public int scrap(@RequestParam Map<String, Object> paramMap) {
		return service.scrap(paramMap);
	}
	
	@GetMapping("/scrapCancel")
	@ResponseBody
	public int scrapCancel(@RequestParam Map<String, Object> paramMap) {
		return service.scrapCancel(paramMap);
	}
}
