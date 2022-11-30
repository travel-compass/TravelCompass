package kh.team.travelcompass.common.interceptor;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class SearchInterceptorTest implements HandlerInterceptor{

	@Autowired
	ServletContext application;
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		System.out.println("인터셉터 호출");
		// 검색 결과가 있는지 확인
		int totalCount = (int)((Map<String, Object>) modelAndView.getModel().get("placeMap")).get("totalCount");
		System.out.printf("검색결과 갯수 : %d\n", totalCount);
		if(totalCount > 0) {	// 검색결과가 있으면 (유효한 키워드면)
			
			LinkedHashMap<String, Integer> keywordMap = (LinkedHashMap<String, Integer>) application.getAttribute("keywordMap");
			if(keywordMap == null ) {	// 어플리케이션 스코프에 popularKeywordMap키값으로 저장된 map 이없으면
				keywordMap = new LinkedHashMap<String, Integer>(); // 생성
				application.setAttribute("keywordMap", keywordMap); // 추가
			}
			
			// keyword 가져오기
			String keyword = request.getParameter("keyword");
			System.out.println(keyword);
			
			keywordMap.put(keyword, keywordMap.get(keyword) == null ? 1 : keywordMap.get(keyword) + 1);
			keywordMap.put("동대문", 44);
			keywordMap.put("뚝섬", 23);
			keywordMap.put("서울", 203);
			keywordMap.put("라면", 10);
			keywordMap.put("떡볶이", 10);
			System.out.println(keywordMap);
		} // 검색결과가 없으면 아무것도 하지 않음
		
		HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
	}
}
