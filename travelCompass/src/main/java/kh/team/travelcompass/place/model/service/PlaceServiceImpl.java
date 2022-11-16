package kh.team.travelcompass.place.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.place.model.api.PlaceAPI;
import kh.team.travelcompass.place.model.vo.Place;

@Service
public class PlaceServiceImpl implements PlaceService {

	@Autowired
	private PlaceAPI api;

	@Override
	public List<Place> nearByPlace(String x, String y) throws Exception {
		Map<String, String> paramMap = new HashMap<>();
		
		paramMap.put("mapx", x);
		paramMap.put("mapy", y);
		paramMap.put("contentTypeId", "12");
		
	
		return api.nearByPlace(paramMap);
	}
	
}
