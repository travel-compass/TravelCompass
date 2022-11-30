package kh.team.travelcompass.place.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.place.model.vo.Place;

public interface PlaceService {
	
	
	/** 좌표근처 장소 조회 서비스
	 * @param x x좌표
	 * @param y y좌표
	 * @return placeList
	 */
	public List<Place> nearByPlace(String x, String y) throws Exception;

	/** 장소 상세페이지 조회
	 * @param contentId
	 * @param contentTypeId
	 * @return
	 * @throws Exception
	 */
	public Place detailPlace(String contentId, String contentTypeId) throws Exception;

	// 장소 정보 조회
	public Place infoPlace(String contentId, String contentTypeId) throws Exception;
	
	// 장소 이미지 조회
	public List<String> imageList(String contentId, String contentTypeId) throws Exception;

	/** 스크랩 체크
	 * @param map
	 * @return
	 */
	public int scrapCheck(Map<String, Object> map);

	/** 장소 스크랩
	 * @param paramMap
	 * @return
	 */
	public int scrap(Map<String, Object> paramMap);

	/** 스크랩 취소
	 * @param paramMap
	 * @return
	 */
	public int scrapCancel(Map<String, Object> paramMap);

	
	
	
	
}
