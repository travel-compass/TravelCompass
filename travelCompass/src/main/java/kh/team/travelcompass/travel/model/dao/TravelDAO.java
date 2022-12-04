package kh.team.travelcompass.travel.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.place.model.vo.Place;
import kh.team.travelcompass.travel.model.vo.Travel;

@Repository
public class TravelDAO {
	@Autowired
	SqlSessionTemplate sqlSession;

	/** 특정 회원 여행 목록 조회 DAO
	 * @param memberNo
	 * @return travelList
	 */
	public List<Travel> selectTravelList(int memberNo) {
		return sqlSession.selectList("travelMapper.selectTravelList", memberNo);
	}

	
	/** 여행 추가 DAO
	 * @param travel
	 * @return result
	 */
	public int createTravel(Travel travel) {
		return sqlSession.insert("travelMapper.createTravel", travel);
	}


	/** 스크랩한 장소 목록 조회
	 * @param memberNo
	 * @return placeList
	 */
	public List<Place> selectScrapPlaceList(int memberNo) {
		return sqlSession.selectList("placeMapper.selectScrapPlaceList", memberNo);
	}


	/** 여행 상세 조회
	 * @param travelNo
	 */
	public Travel selectTravel(int travelNo) {
		return sqlSession.selectOne("placeMapper.selectTravel", travelNo);
	}


	/** 스크랩 장소 검색
	 * @param paramMap
	 * @return placeList
	 */
	public List<Place> searchScrap(Map<String, Object> paramMap) {
		return sqlSession.selectList("placeMapper.searchScrap", paramMap);
	}


	/** 스크랩 장소 삭제
	 * @param paramMap
	 * @return result
	 */
	public int deleteScrap(int placeScrapNo) {
		return sqlSession.delete("placeMapper.deleteScrap", placeScrapNo);
	}


	/** travel 테이블 정보 수정 (제목, 설명, 마지막수정날짜)
	 * @param travel
	 * @return result
	 */
	public int updateTravel(Travel travel) {
		return sqlSession.update("travelMapper.updateTravel", travel);
	}


	/** travel_list 테이블 정보 수정 (여행에 등록된 장소 목록 업데이트)
	 * @param placeList
	 * @return result
	 */
	public int updateTravelList(List<Place> placeList) {
		return sqlSession.update("travelMapper.updateTravelList", placeList);
	}


	/** 수정된 장소 리스트의 최대 order보다 높은 order를 가진 장소 삭제
	 * @param size
	 * @return delResult
	 */
	public int deleteTravelList(Map<String, Integer> paramMap) {
		return sqlSession.delete("travelMapper.deleteTravelList", paramMap);
	}
}
