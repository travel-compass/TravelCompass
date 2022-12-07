package kh.team.travelcompass.common.scheduling;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class PopularKeywordScheduling {
	
	@Autowired
	ServletContext application;
	
	@Scheduled(fixedRate = 1000 * 60)		// 3분마다
	public void updatePopularKeyword() {
		// 맵 가져오기
		LinkedHashMap<String, Integer> keywordMap = (LinkedHashMap<String, Integer>) application.getAttribute("keywordMap"); 
		// 맵이 null이 아니면
		if(keywordMap != null) {
			// 리스트에 옮겨 담고
			List<Entry<String, Integer>> tempList = new ArrayList<>(keywordMap.entrySet());	
			
			// 리스트를 Entry의 value 내림차순으로 정렬
			Collections.sort(tempList, (e1, e2) -> e2.getValue().compareTo(e1.getValue()));
			
			// 정렬 완료한 리스트를 다시 map으로 변경
			keywordMap = new LinkedHashMap<String, Integer>();
			// 맵 정렬
			for(Entry<String, Integer> e : tempList) {
				keywordMap.put(e.getKey(), e.getValue());
			}
			// 맵 추가 끝 -----------------------------------
			
			
			// 화면에 보낼 키워드 10개만 잘라 저장
			List<String> keywordList = new ArrayList<>(keywordMap.keySet());
			
			if(keywordList.size() > 10) {
				keywordList = keywordList.subList(0, 10);
			}
			
			application.setAttribute("popularKeyword", keywordList);
			int index = 1;
			for(String keyword : keywordList) {
				System.out.printf("%d. %s\n", index++, keyword);
			}
		}
	}
	
	@Scheduled(cron="0 0/1 * * * *")
	public void initPoPopularKeyword() {
		// 맵 가져오기
		LinkedHashMap<String, Integer> keywordMap = (LinkedHashMap<String, Integer>) application.getAttribute("keywordMap");
		System.out.println("초기화 전");
		System.out.println(keywordMap);
		// 맵 초기화
		keywordMap = new LinkedHashMap<String, Integer>();
		application.setAttribute("keywordMap", keywordMap);
		
		// 인기 검색어 초기화
		keywordMap = (LinkedHashMap<String, Integer>) application.getAttribute("keywordMap");
		System.out.println("초기화 후");
		System.out.println(keywordMap);
	}
}
