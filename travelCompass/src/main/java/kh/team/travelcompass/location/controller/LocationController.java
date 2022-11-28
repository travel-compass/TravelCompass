package kh.team.travelcompass.location.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.team.travelcompass.location.model.service.LocationService;
import kh.team.travelcompass.place.model.vo.Place;

@Controller
@RequestMapping("/location")
public class LocationController {
	@Autowired
	private LocationService service;
	
	@ResponseBody
	@GetMapping("/searchPlace")
	public List<Place> serachPlace(String latitude, String longitude, String contentTypeId) throws Exception{
		List<Place> placeList = service.searchPlace(latitude, longitude, contentTypeId);
		
		return placeList;
		
	}
	
	@GetMapping("/aroundSearch")
	public String aroundSearch(String latitude, String longitude, String contentTypeId,
			Model model) throws Exception {
		List<Place> placeList = service.searchPlace(latitude, longitude, contentTypeId);
		
		model.addAttribute("placeList", placeList);
		return "search/searchpage";
	}
}
