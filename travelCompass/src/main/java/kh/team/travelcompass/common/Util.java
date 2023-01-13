package kh.team.travelcompass.common;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONObject;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.place.model.vo.Place;

/**
 * @author Tonic
 * 프로젝트 전반의 유틸 클래스
 */
public class Util {

	/**
	 * 동적 쿼리스트링 생성
	 * 
	 * @param paramMap
	 * @return queryString
	 */
	public static String createQueryString(Map<String, String> paramMap) {
		StringBuilder sb = new StringBuilder();

		for (Entry<String, String> e : paramMap.entrySet()) {
			sb.append("&").append(e.getKey()).append("=").append(e.getValue());
		}
		return sb.toString();
	}

	/**
	 * Place json을 Place객체로 변환
	 * 
	 * @param json
	 * @return place
	 */
	public static Place jsonToPlace(String json) throws Exception {
		List<Place> placeList = null;

		// 파싱

		System.out.println(json);
		String items = new JSONObject(json).getJSONObject("response").getJSONObject("body").get("items").toString();
//		System.out.println("아래는 items");
//		System.out.println(items.toString());

		if (!items.equals("")) {
			String item = new JSONObject(items).getJSONArray("item").toString();
			ObjectMapper om = new ObjectMapper();
			om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			placeList = om.readValue(item, new TypeReference<List<Place>>() {});
		}
		System.out.println(placeList.get(0));
		return placeList.get(0);
	}

	/** json을 List<Place>로 변환
	 * @param json
	 * @return placeList
	 * @throws Exception
	 */
	public static List<Place> jsonToPlaceList(String json) throws Exception {
		List<Place> placeList = null;

//		System.out.println(json);
		String items = new JSONObject(json).getJSONObject("response").getJSONObject("body").get("items").toString();
//		System.out.println("아래는 items");
//		System.out.println(items.toString());

		if (!items.equals("")) {
			String item = new JSONObject(items).getJSONArray("item").toString();
			ObjectMapper om = new ObjectMapper();
			om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			placeList = om.readValue(item, new TypeReference<List<Place>>() {
			});
		}
		return placeList;
	}

	
	/** json을 List<Image>로 변환
	 * @param json
	 * @return imageList
	 * @throws Exception
	 */
	public static List<String> jsonToImageList(String json) throws Exception {
		List<String> imageList = new ArrayList<String>();
		System.out.println(json);
		String items = new JSONObject(json).getJSONObject("response").getJSONObject("body").get("items").toString();
		if (!items.equals("")) {
			String item = new JSONObject(items).getJSONArray("item").toString();
			ObjectMapper om = new ObjectMapper();
			om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			List<Map<String, String>> tempList = om.readValue(item, new TypeReference<List<Map<String, String>>>() {
			});

			for (Map<String, String> image : tempList) {
				imageList.add(image.get("originimgurl"));
			}
		}

		return imageList;
	}

	// 파일명 변경 메소드
	public static String fileRename(String originFileName) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		String date = sdf.format(new java.util.Date(System.currentTimeMillis()));

		int ranNum = (int) (Math.random() * 100000); // 5자리 랜덤 숫자 생성

		String str = "_" + String.format("%05d", ranNum);

		String ext = originFileName.substring(originFileName.lastIndexOf("."));

		return date + str + ext;
	}

	// XSS(크로스 사이트 스크립트 공격) 방지 처리
	// : HTML에서 해석되는 문자를 단순 글자로 변경
	public static String XSSHandling(String content) {

		if (content != null) {
			content = content.replaceAll("&", "&amp;");
			content = content.replaceAll("<", "&lt;");
			content = content.replaceAll(">", "&gt;");
			content = content.replaceAll("\"", "&quot;");
		}

		return content;
	}

	// 개행문자 처리 : \r\n, \n, \r, \n\r -> <br> , &nbsp; -> " "
	public static String newLineHandling(String content) {

		return content.replaceAll("(\r\n|\n|\r|\n\r)", "<br>").replaceAll(" ", "&nbsp;");
	}

	// 댓글 띄어쓰기 빈칸 처리 해제
//		public static List<Comment> newLineClear(List<Comment> commentList) {
//			for(Comment c:commentList) {
//				c.setCommentContent(c.getCommentContent().replaceAll("&nbsp;", " "));
//			}
//			return commentList; 
//		}

	// 개행문자 처리 해제
	public static String newLineClear(String content) {

		return content.replaceAll("<br>", "\n");
	}
}
