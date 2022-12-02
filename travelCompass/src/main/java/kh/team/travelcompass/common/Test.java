package kh.team.travelcompass.common;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class Test {
	public static void main(String[] args) {
//		LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
//		
//		map.put("사과", 32);
//		map.put("바나나", 2);
//		map.put("동대문", 5);
//		map.put("뚝섬", 101);
//		map.put("부대찌개", 22);
//		map.put("햄버거", 501);
//		map.put("라면", 60);
//		System.out.println(map);
//		
//		List<Entry<String, Integer>> tempList = new ArrayList<>(map.entrySet());
//		
//		Collections.sort(tempList, (e1, e2) -> e2.getValue().compareTo(e1.getValue()));
//		map = new LinkedHashMap<>();
//		for(Entry<String, Integer> e : tempList) {
//			map.put(e.getKey(), e.getValue());
//		}
//		List<String> keywordList = new ArrayList<>(map.keySet());
//		
//		System.out.println(keywordList);
//		keywordList = keywordList.subList(0, 3);
//		System.out.println(keywordList);
		testDiv();
	}
	
	public static void testDiv() {
		System.out.println(100 * (4.3*20)/100);
	}
}
