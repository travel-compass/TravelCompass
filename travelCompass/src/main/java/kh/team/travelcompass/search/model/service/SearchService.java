package kh.team.travelcompass.search.model.service;


import java.util.List;


import java.util.Map;

import kh.team.travelcompass.search.model.vo.SearchPlace;

public interface SearchService {

	/** 좌표기반 장소 목록 조회 서비스
	 * @return placeList
	 */
	public List<SearchPlace> nearByPlace(String latitude, String longitude) throws Exception;

	
	/** 키워드 검색 장소 목록 조회 서비스
	 * @param paramMap
	 * @param keyword
	 * @param areaCode
	 * @param contentTypeId
	 * @return
	 */
	public List<SearchPlace> searchPlaceKeyword( String keyword, String areaCode,
			String contentTypeId) throws Exception;

	
}