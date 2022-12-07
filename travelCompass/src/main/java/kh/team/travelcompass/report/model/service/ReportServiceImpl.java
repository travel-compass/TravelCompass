package kh.team.travelcompass.report.model.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.report.model.dao.ReportDAO;

@Service
public class ReportServiceImpl implements ReportService{
	@Autowired
	ReportDAO dao;
	
	
	
	//중복 신고 체크 
	@Override
	public int reportCheck(Map<String, Object> paramMap) {
		
		return dao.reportCheck(paramMap);
	}
	
	//신고 등록
	@Override
	public int insertReport(Map<String, Object> paramMap) {
		
		return dao.insertReport(paramMap);
	}
	
}
