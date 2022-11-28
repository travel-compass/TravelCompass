package kh.team.travelcompass.location.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.place.model.vo.Place;


public interface LocationService {
	
	public List<Place> searchPlace(String latitude, String longitude, String contentTypeId) throws Exception;
	
	public Map<String, List<Place>> detailAroundSearch(String latitude, String longitude, String contentTypeId) throws Exception;
}
