package kh.team.travelcompass.search.model.service;

import java.net.URLEncoder;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.search.model.api.SearchPlaceAPI;
import kh.team.travelcompass.place.model.vo.Pagination;
import kh.team.travelcompass.place.model.vo.Place;

@Service
public class SearchServiceImpl implements SearchService {
	@Autowired
	SearchPlaceAPI api;



	// 키워드 검색
	@Override
	public Map<String, Object> searchPlaceKeyword(String keyword, String areaCode, String contentTypeId, String pageNo)
			throws Exception {
		// 입력값을 api로 보낸다
		Map<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("keyword", URLEncoder.encode(keyword, "UTF-8"));
		paramMap.put("contentTypeId", contentTypeId);
		if (!areaCode.equals("-1")) {
			paramMap.put("areaCode", areaCode);
		}
		paramMap.put("pageNo", pageNo);
		

		Map<String, Object> placeMap = api.searchPlaceKeyword(paramMap);
		
		// totalCount, pagdNo로 페이징 처리 객체 생성
		Pagination pagination = new Pagination(placeMap.get("totalCount"),placeMap.get("pageNo"));
		
		placeMap.put("pagination", pagination);

		
		
		// api에서 placeMap를 받아서 리턴한다
		return placeMap;
	}

}
