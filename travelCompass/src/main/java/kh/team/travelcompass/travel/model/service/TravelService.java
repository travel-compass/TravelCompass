package kh.team.travelcompass.travel.model.service;

import java.util.List;

import kh.team.travelcompass.travel.model.vo.Travel;

public interface TravelService {
	
	/** 회원별 모든 여행 조회
	 * @param boardNo
	 * @return travelList
	 */
	public List<Travel> selectTravelList(int memberNo);
}
