package kh.team.travelcompass.travel.model.vo;

import java.util.List;

import kh.team.travelcompass.place.model.vo.Place;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Travel {
	private int travelNo;				// 여행 번호
	private String travelTitle;			// 여행 제목
	private String travelContent;		// 여행 설명
	private int memberNo;				// 여행 생성한 회원 번호
	private String memberNickname;		// 여행 생성한 회원 이름
	private String profileImage;		// 여행 생성한 회원 프로필 이미지
	private String travelDate;			// 여행 생성 날짜
	private String privateFlag;			// 비공개 여부 기본값('N')
	private String travelFirstImage;	// 여행 썸네일 이미지
	private List<Place> placeList;		// 여행 장소 목록
	private int travelPlaceCount;		// 여행에 등록된 장소 갯수
	private int travelLikeCount;		// 여행 좋아요 갯수
}
