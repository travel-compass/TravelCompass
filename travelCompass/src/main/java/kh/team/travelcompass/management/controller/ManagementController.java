package kh.team.travelcompass.management.controller;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.team.travelcompass.management.model.service.ManagementService;

@Controller
public class ManagementController {
	@Autowired
	ManagementService service;
	
	@GetMapping("/management")
	public String management() {
		
		
		
		return "management/managementPage";
	}
	
	@ResponseBody
	@GetMapping("/selectAll")
	public Map<String,Object>selectAll(){
		
		Map<String,Object>selectAll=null;
		
		try {
			
			selectAll=service.selectAll();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return selectAll;
	}
		
	
}
