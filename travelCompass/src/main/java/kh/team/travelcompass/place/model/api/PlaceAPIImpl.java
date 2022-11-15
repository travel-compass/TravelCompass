package kh.team.travelcompass.place.model.api;

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

import kh.team.travelcompass.place.model.vo.Place;


@Component
public class PlaceAPIImpl implements PlaceAPI{
	private String key = "e+nonJ082FY6zfX+tup0hvcGTRAqHZV2OGGnVkjpa+zYdVpUYTHuuqfHYuIEzFwYXjbQXAhQa9tTuyiYdd0Eyw==";
	private final String HOST = "http://apis.data.go.kr/B551011/KorService";
	private final String essentialParam = "MobileOS=ETC&MobileApp=AppTest&radius=1000&_type=json&serviceKey=";
	public PlaceAPIImpl() throws Exception{
		this.key = URLEncoder.encode(key, "UTF-8");
	}
	
	@Override
	public List<Place> nearByPlace(Map<String, String> paramMap) throws Exception{
		List<Place> placeList = new ArrayList<>();
		
		System.out.println("API 호출");
		String endPoint = "/locationBasedList?";
		String param = createQueryString(paramMap);
		
		URL url = new URL(HOST + endPoint + essentialParam + key + param);		
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
	
	private String createQueryString(Map<String, String> paramMap) {
		StringBuilder sb = new StringBuilder();
		
		for(Entry param : paramMap.entrySet()) {
			sb.append("&").append(param.getKey()).append("=").append(param.getValue());
		}
		return sb.toString();
	}
}
