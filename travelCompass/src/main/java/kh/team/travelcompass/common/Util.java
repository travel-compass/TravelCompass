package kh.team.travelcompass.common;

import java.util.Map;
import java.util.Map.Entry;

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
}
