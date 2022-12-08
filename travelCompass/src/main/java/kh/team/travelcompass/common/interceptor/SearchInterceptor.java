package kh.team.travelcompass.common.interceptor;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class SearchInterceptor implements HandlerInterceptor{

	@Autowired
	ServletContext application;
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		System.out.println("인터셉터 호출");
		Map<String, Object> model = modelAndView.getModel();
		if(model == null) {	// 응답이 잘못되면 리턴
			return;
		}
		// 검색 결과가 있는지 확인
		int totalCount = (int)((Map<String, Object>) modelAndView.getModel().get("placeMap")).get("totalCount");
		System.out.printf("검색결과 갯수 : %d\n", totalCount);
		if(totalCount > 0) {	// 검색결과가 있으면 (유효한 키워드면)
			
			LinkedHashMap<String, Integer> keywordMap = (LinkedHashMap<String, Integer>) application.getAttribute("keywordMap");
			if(keywordMap == null ) {	// 어플리케이션 스코프에 popularKeywordMap키값으로 저장된 map 이없으면
				keywordMap = new LinkedHashMap<String, Integer>(); // 생성
				application.setAttribute("keywordMap", keywordMap); // 추가
				keywordMap.put("동대문", 10);
				keywordMap.put("뚝섬", 11);
				keywordMap.put("서울", 12);
				keywordMap.put("라면", 13);
				keywordMap.put("떡볶이", 14);
			}
			
			// keyword 가져오기
			String keyword = request.getParameter("keyword");
			System.out.println(keyword);
			
			// 1. 쿠키를 가져와서 중복확인
			// 모든 쿠키 가져오기
			Cookie[] cookies = request.getCookies();	
			Cookie c = null;		// searchKeyword 이름의 쿠키가 있으면 저장할 변수
			
			// 쿠키가 하나라도 있으면
			if(cookies != null) {
				for(Cookie temp : cookies) {		// 모든 쿠키에 접근하여
					if(temp.getName().equals("searchKeyword")) {		// 쿠키 이름이 searchKeyword인 쿠키 찾기
						c = temp;
						break;
					}
				}
			}
			if(c != null) {												// searchKeyword 쿠키를 찾았으면
				// 키워드가 쿠키value중에 있는지 확인
				// 없으면 coocke에 keyword 추가
				if(c.getValue().indexOf("|" + keyword + "|") == -1) {
					c.setValue(c.getValue() + "|" + keyword + "|");
					
					// popularKeywordMap에 현재검색한 키워드가 key값으로 이미 존재하면 value + 1, 존재하지 않으면 1
					keywordMap.put(keyword, keywordMap.get(keyword) == null ? 1 : keywordMap.get(keyword) + 1);
				}
				// 있으면 추가 x
				
			} else {													// 못찾았으면
				// 새로운 쿠키 생성 후 값 저장 |keyword|
				c = new Cookie("searchKeyword", "|" + keyword + "|");
				keywordMap.put(keyword, keywordMap.get(keyword) == null ? 1 : keywordMap.get(keyword) + 1);
			}
			
			c.setPath("/");
			
			// 오늘 23시 59분 59초 까지 남은 시간을 초단위로 구하기
			
			Date a = new Date();
			Calendar cal = Calendar.getInstance();
			
			cal.add(cal.DATE, 1);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date temp = new Date(cal.getTimeInMillis());
			
			Date b = sdf.parse(sdf.format(temp));
			
			long diff = b.getTime() - a.getTime();
			
			c.setMaxAge((int)diff/1000);
			response.addCookie(c);
			System.out.println(keywordMap);
		} // 검색결과가 없으면 아무것도 하지 않음
		
		HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
	}
	
}
