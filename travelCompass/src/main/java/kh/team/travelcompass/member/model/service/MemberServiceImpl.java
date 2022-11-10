package kh.team.travelcompass.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.team.travelcompass.member.model.dao.MemberDAO;
import kh.team.travelcompass.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService{
	@Autowired
	MemberDAO dao;
	@Autowired
	BCryptPasswordEncoder bcrypt;
	
	@Transactional
	@Override
	public Member login(Member member) {
		
		Member loginMember = dao.login(member.getMemberEmail());
		
		// 로그인 정보가 없으면 리턴 null
		
		if(loginMember != null) {
			// 로그인 정보가 있다면
			loginMember.setMemberPw(null);	// 보안을 위해 비밀번호 null로 변경			
			
			// ** 암호화 코드 **
				// 입력된 평문과 저장되어있던 암호문 비교 후
				// true시 loginMember 리턴
			
				// false시 loginMember = null 후 리턴
			//
		}
		
		return loginMember;
	}

	@Override
	public int emailDupCheck(String memberEmail) {
		return dao.emailDupCheck(memberEmail);
	}
}
