package kh.team.travelcompass.member.model.service;

import kh.team.travelcompass.member.model.vo.Member;

public interface MemberService {
	
	/** 로그인 서비스
	 * @param member
	 * @return loginMember
	 */
	public Member login(Member member);
	

	/**	이메일 중복 체크 서비스
	 * @param memberEmail
	 * @return result (중복아니면 0)
	 */
	public int emailDupCheck(String memberEmail);


	/** 회원가입 서비스
	 * @param member
	 * @return result (result > 0) 성공
	 */
	public int signUp(Member member);


	/** 아이디 찾기 서비스
	 * @param inputMember
	 * @return findMember (이름, 이메일)
	 */
	public Member findEmail(Member inputMember);


	/** 비밀번호 찾기 서비스
	 * @param memberEmail
	 * @return 이메일과 일치하는 회원의 회원번호
	 */
	public String findPw(String memberEmail);


	/** 비밀번호 변경 서비스(암호화)
	 * @param inputMember
	 * @return result
	 */
	public int changePw(Member inputMember);


	/** 회원 정보 수정 (닉네임, 전화번호, 주소)
	 * @param inputMember
	 * @return result
	 */
	public int updateInfo(Member inputMember);


	/** 현재 비밀번호 확인 서비스
	 * @param currentMemberPw 비교할 비밀번호 평문
	 * @param memberNo 로그인한 회원의 암호화된 비밀번호를 가져오기위한 파라미터
	 * @return 일치:true, 불일치:false
	 */
	public boolean checkMemberPw(String inputMemberPw, int memberNo);
}
