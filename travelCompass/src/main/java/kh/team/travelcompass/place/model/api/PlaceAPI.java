package kh.team.travelcompass.place.model.api;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import kh.team.travelcompass.place.model.vo.Place;

public interface PlaceAPI{
	
	
	
	/**	거리 중심 장소 목록 가져오기 (기본 카테고리 관광지 : 12)
	 *  api 호출 후 item 부분 파싱해서 리턴
	 * @return placeList
	 */
	public List<Place> nearByPlace(Map<String, String> paramMap) throws Exception;

	public Place detailPlace(Map<String, String> paramMap) throws Exception;

	public Place infoPlace(Map<String, String> paramMap);

	public Place imagePlace(Map<String, String> paramMap);

	
	
}
