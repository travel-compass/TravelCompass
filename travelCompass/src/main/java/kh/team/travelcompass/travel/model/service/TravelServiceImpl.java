package kh.team.travelcompass.travel.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.travel.model.dao.TravelDAO;
import kh.team.travelcompass.travel.model.vo.Travel;

@Service
public class TravelServiceImpl implements TravelService{
	
	@Autowired
	private TravelDAO dao; 

	// 회원별 모든 여행 조회 서비스
	@Override
	public List<Travel> selectTravelList(int memberNo) {
		return dao.selectTravelList(memberNo);
	}

	// 여행 추가 서비스
	@Override
	public int createTravel(Travel travel) {
		return dao.createTravel(travel);
	}

	// 여행 조회
	@Override
	public Travel selectTravel(int travelNo) {
		
		
		
		return ;
	}
}
