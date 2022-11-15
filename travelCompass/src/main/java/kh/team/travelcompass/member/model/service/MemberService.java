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
}
