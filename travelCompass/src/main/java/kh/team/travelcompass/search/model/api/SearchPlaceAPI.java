package kh.team.travelcompass.search.model.api;


import java.util.List;


import java.util.Map;

import kh.team.travelcompass.place.model.vo.Place;

public interface SearchPlaceAPI {

	/**	거리 중심 장소 목록 가져오기 (기본 카테고리 관광지 : 12)
	 *  api 호출 후 item 부분 파싱해서 리턴
	 * @return placeList
	 */
	public List<Place> nearByPlace(Map<String, String> paramMap) throws Exception;

	
	
	/**	키워드 검색으로 장소 목록 가져오기 (기본 카테고리 관광지 : 12)
	 *  api 호출 후 item 부분 파싱해서 리턴
	 * @return placeList
	 */
	public List<Place> searchPlaceKeyword(Map<String, String> paramMap) throws Exception;

}



