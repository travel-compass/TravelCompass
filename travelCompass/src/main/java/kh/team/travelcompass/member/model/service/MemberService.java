package kh.team.travelcompass.member.model.service;

import kh.team.travelcompass.member.model.vo.Member;

public interface MemberService {
	
	/** 로그인 서비스
	 * @param member
	 * @return loginMember
	 */
	public Member login(Member member);
	
	
	
	
	
	
	
	/**	이메일 중복 체크
	 * @param memberEmail
	 * @return result (중복아니면 0)
	 */
	public int emailDupCheck(String memberEmail);
}
