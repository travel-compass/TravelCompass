package kh.team.travelcompass.location.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
	public List<Place> serachPlace(String latitude, String longitude) throws Exception{
		List<Place> placeList = service.searchPlace(latitude, longitude);
		
		return placeList;
	}
}
