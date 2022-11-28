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

	@Override
	public List<Travel> selectTravelList(int memberNo) {
		return dao.selectTravelList(memberNo);
	}
}
