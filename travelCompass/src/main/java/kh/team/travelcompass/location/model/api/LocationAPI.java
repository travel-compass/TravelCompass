package kh.team.travelcompass.location.model.api;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.common.Util;
import kh.team.travelcompass.place.model.vo.Place;

@Component
public class LocationAPI {
	private final String HOST = "http://apis.data.go.kr/B551011/KorService/locationBasedList";
	private final String ESSENTIAL_PARAM = "?MobileOS=ETC&MobileApp=AppTest&_type=json&serviceKey=";
	private String key = "e+nonJ082FY6zfX+tup0hvcGTRAqHZV2OGGnVkjpa+zYdVpUYTHuuqfHYuIEzFwYXjbQXAhQa9tTuyiYdd0Eyw==";
	
	public LocationAPI() throws Exception{
		this.key = URLEncoder.encode(key, "UTF-8");
	}
	
	
	
	/** 위치기반 관광정보 조회
	 * @param paramMap
	 * @return placeList
	 */
	public List<Place> serachPlace(Map<String, String> paramMap) throws Exception {
		// 결과 반환 위한 변수
		List<Place> placeList = new ArrayList<>();
		
		
		String param = Util.createQueryString(paramMap);
		
		URL url = new URL(HOST + ESSENTIAL_PARAM + key + param);
		
		HttpURLConnection conn = (HttpURLConnection)url.openConnection();
		conn.setRequestMethod("GET");
		
		// 응답내용을 담을 객체
		StringBuilder response = new StringBuilder();
		
		// 한줄씩 읽어올 문자열변수
		String readline = "";
		
		// 커넥션에서 스트림 얻어오기
		BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		
		// 읽어온 내용이 null 일때까지 한줄 씩 읽어옴
		while((readline = br.readLine()) != null) {
			response.append(readline);	// 한줄씩 response객체에 추가
		}
		br.close(); 				// 스트림객체 사용 후 자원 반환(APIConnection 반환)
		
		String str = response.toString();
		
		
		placeList = Util.jsonToPlaceList(response.toString());
		
		
		System.out.println(placeList);
		
		return placeList;
	}
	
}
