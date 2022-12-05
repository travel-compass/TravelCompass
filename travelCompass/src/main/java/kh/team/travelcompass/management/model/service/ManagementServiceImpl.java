package kh.team.travelcompass.management.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.management.model.dao.ManagementDAO;
import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.vo.Review;

@Service
public class ManagementServiceImpl implements ManagementService {
	@Autowired
	ManagementDAO dao;

	@Override
	public List<Map<String, Object>> selectAll() {
		
		List<Map<String, Object>>reportList=dao.selectAll();
		

		
		return reportList;
	}
	

}
