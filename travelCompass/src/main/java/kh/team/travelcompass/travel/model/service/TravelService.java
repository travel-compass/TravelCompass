package kh.team.travelcompass.travel.model.service;

import java.util.List;
import java.util.Map;

import kh.team.travelcompass.place.model.vo.Place;
import kh.team.travelcompass.travel.model.vo.Travel;

/**
 * @author Tonic
 *
 */
/**
 * @author Tonic
 *
 */
public interface TravelService {
	
	/** 회원별 모든 여행 조회 서비스
	 * @param boardNo
	 * @return travelList
	 */
	public List<Travel> selectTravelList(Map<String, Integer> paramMap);

	
	/** 여행 추가 서비스
	 * @param travel
	 * @return result
	 */
	public int createTravel(Travel travel);


	/** 여행 조회
	 * @param travelNo
	 * @return travel
	 */
	public Travel selectTravel(int travelNo);


	/** 스크랩한 장소 목록 조회
	 * @param memberNo
	 * @return placeList
	 */
	public List<Place> selectScrapPlaceList(int memberNo);


	/** 스크랩 장소 검색
	 * @param paramMap
	 * @return placeList
	 */
	public List<Place> searchScrap(Map<String, Object> paramMap);


	/** 스크랩 삭제
	 * @param paramMap
	 * @return result
	 */
	public int deleteScrap(int placeScrapNo);


	/** 비동기 여행 변경사항 저장
	 * @param travel
	 * @return result
	 */
	public int updateTravel(Travel travel) throws Exception;


	/** 여행 삭제
	 * @param travelNo
	 * @return result
	 */
	public int deleteTravel(int travelNo);


	/** 여행 스크랩
	 * @param paramMap
	 * @return result
	 */
	public int insertTravelScrap(Map<String, Integer> paramMap);


	/** 여행 스크랩 취소
	 * @param paramMap
	 * @return result
	 */
	public int deleteTravelScrap(Map<String, Integer> paramMap);


	/** 여행 좋아요
	 * @param paramMap
	 * @return result
	 */
	public int insertTravelLike(Map<String, Integer> paramMap);


	/** 여행 좋아요 취소
	 * @param paramMap
	 * @return result 
	 */
	public int deleteTravelLike(Map<String, Integer> paramMap);


	/** 여행 스크랩 여부 확인
	 * @param paramMap
	 * @return result
	 */
	public int checkTravelScrap(Map<String, Integer> paramMap);


	/** 여행 좋아요 여부 확인
	 * @param paramMap
	 * @return result
	 */
	public int checkTravelLike(Map<String, Integer> paramMap);


	/** 스크랩한 여행 목록 조회
	 * @param memberNo
	 * @return travelList
	 */
	public List<Travel> selectTravelScrapList(int memberNo);
}
