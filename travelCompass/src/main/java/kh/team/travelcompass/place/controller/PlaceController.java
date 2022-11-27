package kh.team.travelcompass.place.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kh.team.travelcompass.place.model.service.PlaceService;
import kh.team.travelcompass.place.model.vo.Place;

@Controller
@RequestMapping("/detail")
public class PlaceController {

	@Autowired
	private PlaceService service;
	
//	@GetMapping("/place")
//	public String detailPlace() {
//		return "place/detailPlace";
//	}
	
	@GetMapping("/place")
	public String page(String contentId,String contentTypeId,Model model) throws Exception {
		
		// title,overview
		Place mainPlace=service.detailPlace(contentId,contentTypeId);
		
		// info 
		Place infoPlace=service.infoPlace(contentId,contentTypeId);
		
		// image
		Place ImagePlace=service.imagePlace(contentId,contentTypeId);
		
		model.addAttribute("place", mainPlace);
		
		return "place/detailPlace"; 
	}
}
