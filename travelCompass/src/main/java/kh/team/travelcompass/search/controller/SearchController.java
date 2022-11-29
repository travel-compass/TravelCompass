package kh.team.travelcompass.search.controller;


import java.util.List;



import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kh.team.travelcompass.search.model.service.SearchService;
import kh.team.travelcompass.place.model.vo.Place;

@Controller
public class SearchController {
	@Autowired
	SearchService service;
	
	
	
	@ResponseBody
	@GetMapping("/nearByPlace")
	public List<Place> nearByPlace(String latitude, String longitude) {

		try {
			service.nearByPlace(latitude, longitude);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	// jsp에서 keyword, areaCode, contentTypeId를 받아 service -> api
	// api(검색 결과(json객체)) ->  service -> controller -> jsp
	//@ResponseBody 
	@GetMapping("/search")
	public String searchPlaceKeyword(String keyword,
			@RequestParam(value = "areaCode", required = false, defaultValue = "null") 
			String areaCode,
			@RequestParam(value = "contentTypeId", required = false, defaultValue = "null")
			String contentTypeId, Model model
			) {

		try {
			Map<String, Object> placeMap = service.searchPlaceKeyword(keyword, areaCode, contentTypeId);

			model.addAttribute("placeMap", placeMap);
		} catch (Exception e) {

			e.printStackTrace();
		}

		return "search/searchpage";
	}
	

	
	
}




