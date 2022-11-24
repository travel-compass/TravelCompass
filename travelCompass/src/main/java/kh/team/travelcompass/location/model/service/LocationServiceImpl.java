package kh.team.travelcompass.location.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.location.model.api.LocationAPI;
import kh.team.travelcompass.place.model.vo.Place;

@Service
public class LocationServiceImpl implements LocationService {
	
	@Autowired
	LocationAPI api;
	
	@Override
	public List<Place> searchPlace(String latitude, String longitude, String contentTypeId) throws Exception {
		
		// 파라미터 맵
		Map<String, String> paramMap = new HashMap<>();
		
		paramMap.put("mapX", longitude);
		paramMap.put("mapY", latitude);
		paramMap.put("radius", "3000");
		paramMap.put("numOfRows", "10");
		paramMap.put("contentTypeId", contentTypeId);
		
		List<Place> placeList = api.serachPlace(paramMap);
		
		// placeList 정렬 (contentId 오름차순)
		
		// placeList에서 contentId 가져와 리스트 생성
		
		// contentId에 대한 평점과 리뷰 갯수 dao 호출하여 받아옴(contentId 오름차순)
		
		// Place객체에 리뷰관련 데이터 세팅
		
		return placeList;
	}
	
}
