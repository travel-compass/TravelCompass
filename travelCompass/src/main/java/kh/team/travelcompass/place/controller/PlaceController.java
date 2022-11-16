package kh.team.travelcompass.place.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import kh.team.travelcompass.place.model.service.PlaceService;
import kh.team.travelcompass.place.model.vo.Place;

@Controller
public class PlaceController {

	@Autowired
	private PlaceService service;
	
	@GetMapping("/page")
	public String page(String contentId,String contentTypeId,Model model) {
		
		Place place=service.page(contentId,contentTypeId);
		
		model.addAttribute("place", place);
		
		return "page"; 
	}
}
