package kh.team.travelcompass.report.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.team.travelcompass.report.model.service.ReportService;

@Controller
public class ReportController {
	@Autowired
	ReportService service;
	
	//리뷰 신고
	@GetMapping("/insertReport")
	@ResponseBody
	public int insertReport(@RequestParam Map<String, Object>paramMap) {

		int check = service.reportCheck(paramMap);
		int result = 0;
		
		if(check==0) {
		
			result= service.insertReport(paramMap);
		}
		
		
		return result;
	}
	
}
