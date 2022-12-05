package kh.team.travelcompass.management.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;

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
	public String selectAll(){
		
		List<Map<String, Object>>reportList = null;		
		String jsonReportList="";
		
		try {
			
			reportList = service.selectAll();
			ObjectMapper objectMapper = new ObjectMapper();
			jsonReportList = objectMapper.writeValueAsString(reportList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
				
		return jsonReportList;
	}
		
	
}
