package kh.team.travelcompass.member.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Member {
	private int memberNo;			// 회원 번호
	private String memberEmail;		// 회원 이메일
	private String memberPw;		// 회원 비밀번호
	private String memberNickname;	// 회원 닉네임
	private String memberName;		// 회원 이름(실명)
	private	String memberRRN;		// 회원 주민등록번호
	private String memberTel;		// 회원 전화번호
	private	String memberAddress;	// 회원 주소	(우편번호,,지번,,상세주소)
	private	String enrollDate;		// 회원 가입일
	private	String secessionFlag;	// 탈퇴 여부
	private	String sleepFlag;		// 휴면 여부 
	private String lastLoginDate;	// 마지막 로그인 날짜 
	private String profileImage;	// 프로필 이미지 경로
	private String authority;		// 권한
	private int totalPosting;		// 총 포스팅 갯수	(여행, 리뷰 갯수 카운트)
	private int totalFollower;		// 총 팔로워 수
	private int totalFollowing;		// 총 팔로잉 수
}
