package kh.team.travelcompass.travel.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.team.travelcompass.common.Util;
import kh.team.travelcompass.place.model.vo.Place;
import kh.team.travelcompass.travel.model.dao.TravelDAO;
import kh.team.travelcompass.travel.model.vo.Travel;

@Service
public class TravelServiceImpl implements TravelService{
	
	@Autowired
	private TravelDAO dao; 

	// 회원별 모든 여행 조회 서비스
	@Override
	public List<Travel> selectTravelList(Map<String, Integer> paramMap) {
		return dao.selectTravelList(paramMap);
	}

	// 여행 추가 서비스
	@Override
	public int createTravel(Travel travel) {
		return dao.createTravel(travel);
	}

	// 여행 조회
	@Override
	public Travel selectTravel(int travelNo) {
		return dao.selectTravel(travelNo);
	}

	@Override
	public List<Place> selectScrapPlaceList(int memberNo) {
		return dao.selectScrapPlaceList(memberNo);
	}

	@Override
	public List<Place> searchScrap(Map<String, Object> paramMap) {
		return dao.searchScrap(paramMap);
	}

	@Override
	public int deleteScrap(int placeScrapNo) {
		return dao.deleteScrap(placeScrapNo);
	}

	
	// 비동기 여행 변경사항 저장
	@Transactional
	@Override
	public int updateTravel(Travel travel) throws Exception {
		
		// travel 테이블 정보 수정 (제목, 설명, 마지막수정날짜)
		
//		travel.setTravelTitle(Util.XSSHandling(travel.getTravelTitle()));
//		travel.setTravelTitle(Util.newLineHandling(travel.getTravelTitle()));
		
		if(travel.getTravelContent() != null) {		// 여행 설명이 비어있지 않을 때만
			travel.setTravelContent(Util.XSSHandling(travel.getTravelContent()));
			travel.setTravelContent(Util.newLineHandling(travel.getTravelContent()));			
		}
		int result = dao.updateTravel(travel);
		Map<String, Integer> paramMap = new HashMap<>();
		
		if(result > 0) {		// travel테이블 정보수정 성공 시
			// 여행의 장소 리스트 업데이트
			if(travel.getPlaceList().isEmpty()) {
				paramMap.put("travelNo", travel.getTravelNo());
				paramMap.put("maxOrder", 0);
				int delResult = dao.deleteTravelList(paramMap);
			} else {
				result = dao.updateTravelList(travel.getPlaceList());
				
				if(result > 0) {	// 이미지 수정 성공 시
					// 수정된 장소 리스트의 최대 order보다 높은 order를 가진 장소 삭제
				
					paramMap.put("travelNo", travel.getTravelNo());
					paramMap.put("maxOrder", travel.getPlaceList().size());
					int delResult = dao.deleteTravelList(paramMap);
				} else {			// 이미지 수정 실패 시 
					throw new Exception();
				}				
			}
		}
		
		return result;
	}

	// 여행 삭제
	@Override
	public int deleteTravel(int travelNo) {
		return dao.deleteTravelList(travelNo);
	}
	
	
	// 여행 스크랩
	@Override
	public int insertTravelScrap(Map<String, Integer> paramMap) {
		return dao.insertTravelScrap(paramMap);
	}

	// 여행 스크랩 취소
	@Override
	public int deleteTravelScrap(Map<String, Integer> paramMap) {
		return dao.deleteTravelScrap(paramMap);
	}
}
