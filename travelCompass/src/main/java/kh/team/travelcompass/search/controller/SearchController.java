package kh.team.travelcompass.search.controller;

import java.util.List;


import java.util.Map;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.search.model.service.SearchService;
import kh.team.travelcompass.place.model.vo.Place;

@Controller
public class SearchController {
	@Autowired
	SearchService service;


	// jsp에서 keyword, areaCode, contentTypeId를 받아 service -> api
	// api(검색 결과(json객체)) -> service -> controller -> jsp
	
	/**키워드 검색
	 * @param keyword
	 * @param areaCode
	 * @param contentTypeId
	 * @param model
	 * @param pageNo
	 * @return "search/searchpage"
	 */
	@GetMapping("/search")
	public String searchPlaceKeyword(String keyword,
			/*@RequestParam(value = "areaCode", required = false, defaultValue = "null")*/ String areaCode,
			/*@RequestParam(value = "contentTypeId", required = false, defaultValue = "null")*/ String contentTypeId,
			Model model, /*@RequestParam(value = "pageNo", required = false, defaultValue = "1")*/ String pageNo) {

		try {
			Map<String, Object> placeMap = service.searchPlaceKeyword(keyword, areaCode, contentTypeId, pageNo);

			model.addAttribute("placeMap", placeMap);

		} catch (Exception e) {

			e.printStackTrace();
		}

		return "search/searchpage";
	}

	/** 카테고리 클릭시 비동기 검색
	 * @param keyword
	 * @param areaCode
	 * @param contentTypeId
	 * @param pageNo
	 * @return placeMap
	 */
	@ResponseBody
	@GetMapping("/categorySearch")
	public Map<String,Object> categorySearch(String keyword,
			/*@RequestParam(value = "areaCode", required = false, defaultValue = "null")*/ String areaCode,
			/*@RequestParam(value = "contentTypeId", required = false, defaultValue = "null")*/ String contentTypeId,
			/*@RequestParam(value = "pageNo", required = false, defaultValue = "1")*/ String pageNo) {

		Map<String, Object> placeMap = null;
		try {
			placeMap = service.searchPlaceKeyword(keyword, areaCode, contentTypeId, pageNo);
		} catch (Exception e) {

			e.printStackTrace();
		}

//		ObjectMapper mapper = new ObjectMapper();
//		String json = null;
//		try {
//			json = mapper.writeValueAsString(placeMap);
//		} catch (JsonProcessingException e) {
//			e.printStackTrace();
//		}
//		System.out.println("json : "+ json);
		
		return placeMap;

	}

}
