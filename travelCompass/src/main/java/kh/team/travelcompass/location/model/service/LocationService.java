package kh.team.travelcompass.location.model.service;

import java.util.List;

import kh.team.travelcompass.place.model.vo.Place;


public interface LocationService {
	
	public List<Place> searchPlace(String latitude, String longitude) throws Exception;
}
