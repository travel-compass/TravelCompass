package kh.team.travelcompass.member.model.service;

import kh.team.travelcompass.member.model.vo.Member;

public interface MemberService {
	
	/** 로그인 서비스
	 * @param member
	 * @return loginMember
	 */
	public Member login(Member member);
	
}
