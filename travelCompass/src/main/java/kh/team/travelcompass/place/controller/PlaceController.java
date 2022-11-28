package kh.team.travelcompass.place.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kh.team.travelcompass.location.model.service.LocationService;
import kh.team.travelcompass.place.model.service.PlaceService;
import kh.team.travelcompass.place.model.vo.Place;

@Controller
@RequestMapping("/place")
public class PlaceController {

	@Autowired
	private PlaceService service;
	
	@Autowired
	private LocationService lservice;
	
	
	@GetMapping("/detail")
	public String page(String contentId,
			String contentTypeId,Model model) throws Exception {
		
		// title,overview
		Place mainPlace=service.detailPlace(contentId,contentTypeId);
		
		// info 
		Place infoPlace=service.infoPlace(contentId,contentTypeId);
		
		// image
		List<String> imageList =service.imageList(contentId,contentTypeId);
		
		// aroundPlace list
		Map<String, List<Place>> aroundPlaceList=lservice.detailAroundSearch(mainPlace.getMapy(), mainPlace.getMapx(), contentTypeId);
		
		mainPlace.setImageList(imageList);
		mainPlace.setRestdate(infoPlace.getRestdate());
		mainPlace.setUsetime(infoPlace.getUsetime());
		mainPlace.setTreatmenu(infoPlace.getTreatmenu());
		
		model.addAttribute("place", mainPlace);
		model.addAttribute("aroundPlaceList",aroundPlaceList);
		
		System.out.println(mainPlace);
		
		System.out.println(aroundPlaceList);
		
		return "place/detailPlace"; 
	}
}
