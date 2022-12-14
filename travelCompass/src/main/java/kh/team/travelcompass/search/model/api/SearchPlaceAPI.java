package kh.team.travelcompass.search.model.api;


import java.util.List;


import java.util.Map;

import kh.team.travelcompass.place.model.vo.Pagination;
import kh.team.travelcompass.place.model.vo.Place;

public interface SearchPlaceAPI {


	
	/**	키워드 검색으로 장소 목록 가져오기 
	 *  api 호출 후 item 부분 파싱해서 리턴
	 * @return placeMap
	 */
	public Map<String, Object> searchPlaceKeyword(Map<String, String> paramMap) throws Exception;



}



