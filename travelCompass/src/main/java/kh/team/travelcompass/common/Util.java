package kh.team.travelcompass.common;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.place.model.vo.Place;

public class Util {
	
	/** 동적 쿼리스트링 생성 
	 * @param paramMap
	 * @return queryString
	 */
	public static String createQueryString(Map<String, String> paramMap) {
		StringBuilder sb = new StringBuilder();
		
		for(Entry<String, String> e : paramMap.entrySet()) {
			sb.append("&").append(e.getKey()).append("=").append(e.getValue());
		}
		return sb.toString();
	}
	
	
	/** Place json을 Place객체로 변환
	 * @param json
	 * @return place
	 */
	public static Place jsonToPlace(String json) throws Exception{
		List<Place> placeList = null;
		
		// 파싱
		
		System.out.println(json);
		String items = new JSONObject(json).getJSONObject("response").getJSONObject("body").get("items").toString();
//		System.out.println("아래는 items");
//		System.out.println(items.toString());
		
		if(!items.equals("")) {
			String item = new JSONObject(items).getJSONArray("item").toString();
			ObjectMapper om = new ObjectMapper();
			om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			placeList = om.readValue(item, new TypeReference<List<Place>>() {});			
		}
		System.out.println(placeList.get(0));
		return placeList.get(0);
	}
	
	public static List<Place> jsonToPlaceList(String json) throws Exception {
		List<Place> placeList = null;
		
//		System.out.println(json);
		String items = new JSONObject(json).getJSONObject("response").getJSONObject("body").get("items").toString();
//		System.out.println("아래는 items");
//		System.out.println(items.toString());
		
		if(!items.equals("")) {
			String item = new JSONObject(items).getJSONArray("item").toString();
			ObjectMapper om = new ObjectMapper();
			om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			placeList = om.readValue(item, new TypeReference<List<Place>>() {});			
		}
		return placeList;
	}
}
