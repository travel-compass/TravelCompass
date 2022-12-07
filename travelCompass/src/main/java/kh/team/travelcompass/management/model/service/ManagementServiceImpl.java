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
	
	//모든 신고 조회
	@Override
	public List<Review> selectAll() {
		
		List<Review>reportList=dao.selectAll();
		
		return reportList;
	}
	
	//회원 블라인드 리뷰 수 조회
	@Override
	public List<Review> selectBlind() {
		
		return dao.selectBlind();
	}
	
	//정지 회원 조회
	@Override
	public List<Review> selectBanMember() {
	
		return dao.selectBanMember();
	}
	
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
	
	
	
	
	
	//블라인드 처리
	@Override
	public int reviewBlind(int reviewNo) {
		
		return dao.reviewBlind(reviewNo);
	}
	
	//회원 기능 정지
	@Override
	public int memberBan(int memberNo) {
		
		return dao.memberBan(memberNo);
	}

	//회원 정지 취소
	@Override
	public int memberBanCancel(int memberNo) {
			
		return dao.memberBanCancel(memberNo);
	}



	


}
