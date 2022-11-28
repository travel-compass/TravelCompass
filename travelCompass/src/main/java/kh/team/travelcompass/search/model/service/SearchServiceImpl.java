package kh.team.travelcompass.search.model.service;


import java.net.URLEncoder;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.search.model.api.SearchPlaceAPI;
import kh.team.travelcompass.place.model.vo.Place;

@Service
public class SearchServiceImpl implements SearchService {
	@Autowired
	SearchPlaceAPI api;
	
	@Override
	public List<Place> nearByPlace(String latitude, String longitude) throws Exception {

		Map<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("mapY", latitude);
		paramMap.put("mapX", longitude);
		paramMap.put("contentTypeId", "12");

		List<Place> placeList = api.nearByPlace(paramMap);
		return null;
	}
	
	//키워드 검색
	@Override
	public List<Place> searchPlaceKeyword(String keyword, String areaCode,
			String contentTypeId) throws Exception {
		// 입력값을 api로 보낸다
		Map<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("keyword", URLEncoder.encode(keyword, "UTF-8"));
		paramMap.put("contentTypeId", contentTypeId);    
		if (!areaCode.equals("-1")) {
			paramMap.put("areaCode", areaCode);
		}

		List<Place> placeList = api.searchPlaceKeyword(paramMap);

		//받아온 값 가공
		
		
		// api에서 List<Place>를 받아서 리턴한다
		return placeList;
	}

}



