package kh.team.travelcompass.place.model.service;

import java.util.List;

import kh.team.travelcompass.place.model.vo.Place;

public interface PlaceService {
	
	
	/** 좌표근처 장소 조회 서비스
	 * @param x x좌표
	 * @param y y좌표
	 * @return placeList
	 */
	public List<Place> nearByPlace(String x, String y) throws Exception;

	public Place page(String contentId, String contentTypeId);
	
	
	
}
