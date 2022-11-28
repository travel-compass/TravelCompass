package kh.team.travelcompass.search.model.api;


import java.io.BufferedReader;


import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.common.Util;
import kh.team.travelcompass.place.model.vo.Place;


@Component
public class SearchPlaceAPIImpl implements SearchPlaceAPI{
	private String key = "e+nonJ082FY6zfX+tup0hvcGTRAqHZV2OGGnVkjpa+zYdVpUYTHuuqfHYuIEzFwYXjbQXAhQa9tTuyiYdd0Eyw=="; //영현 인증키
	private final String HOST = "http://apis.data.go.kr/B551011/KorService";
	private final String essentialParam = "MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&serviceKey=";
	public SearchPlaceAPIImpl() throws Exception{
		this.key = URLEncoder.encode(key, "UTF-8");
	}
	
	private String key2="1LHi8Ns0GDTi1MvhsRINU%2ByqOHB2UaZC7e%2FPj0yPsjPgzSuRE%2FIjhTeUHCVN8q7n%2F0J4RFA8ChYkG8f3gr7heQ%3D%3D"; //용하 인증키
	
	private String createQueryString(Map<String, String> paramMap) {
		StringBuilder sb = new StringBuilder();

		for(Entry param : paramMap.entrySet()) {
			sb.append("&").append(param.getKey()).append("=").append(param.getValue());
		}
		return sb.toString();
	}

	/**
	 *좌표 기반 검색(위치기반관광정보조회)
	 */
	@Override
	public List<Place> nearByPlace(Map<String, String> paramMap) throws Exception{
		List<Place> placeList = new ArrayList<>();

		System.out.println("API 호출");
		String endPoint = "/locationBasedList?";
		String radius = "&radius=1000";
		String param = createQueryString(paramMap);
		

		URL url = new URL(HOST + endPoint + essentialParam + key + radius + param);
		System.out.println(url.toString());
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		conn.setRequestMethod("GET");
		conn.setDoInput(true);
		conn.setDoOutput(false);

		StringBuilder response = new StringBuilder();

		BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String readline = "";

		while((readline = br.readLine()) != null) {
			response.append(readline);
		}
		br.close();

		JSONObject json = new JSONObject(response.toString());
		String items = json.getJSONObject("response").getJSONObject("body").getJSONObject("items").getJSONArray("item").toString();

		System.out.println(items);

		// ObjectMapper 객체 생성
		ObjectMapper objectMapper = new ObjectMapper();

		// JSONArray String -> List
		objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		placeList = objectMapper.readValue(items, new TypeReference<List<Place>>() {});
		System.out.println(placeList);

		return placeList;
	}



	/**
	 *키워드 검색(키워드검색조회)
	 */
	@Override
	public List<Place> searchPlaceKeyword(Map<String, String> paramMap) throws Exception {
		List<Place> placeList = new ArrayList<>();

		System.out.println("API 호출");
		String endPoint = "/searchKeyword?";
		String param = createQueryString(paramMap);

		URL url = new URL(HOST + endPoint + essentialParam + key + param);   //key 검색량 소진시 key2
		System.out.println(url.toString());
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		conn.setRequestMethod("GET");
		conn.setDoInput(true);
		conn.setDoOutput(false);

		StringBuilder response = new StringBuilder();

		BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String readline = "";

		while((readline = br.readLine()) != null) {
			response.append(readline);
		}
		br.close();
		System.out.println(response.toString());
		placeList=Util.jsonToPlaceList(response.toString());
		
		return placeList;
	}
}


