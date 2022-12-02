package kh.team.travelcompass.travel.model.service;

import java.util.List;

import kh.team.travelcompass.place.model.vo.Place;
import kh.team.travelcompass.travel.model.vo.Travel;

public interface TravelService {
	
	/** 회원별 모든 여행 조회 서비스
	 * @param boardNo
	 * @return travelList
	 */
	public List<Travel> selectTravelList(int memberNo);

	
	/** 여행 추가 서비스
	 * @param travel
	 * @return result
	 */
	public int createTravel(Travel travel);


	/** 여행 조회
	 * @param travelNo
	 * @return travel
	 */
	public Travel selectTravel(int travelNo);


	/** 스크랩한 장소 목록 조회
	 * @param memberNo
	 * @return placeList
	 */
	public List<Place> selectScrapPlaceList(int memberNo);
}
