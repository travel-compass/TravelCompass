package kh.team.travelcompass.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.member.model.vo.Member;

@Repository
public class MemberDAO {
	
	@Autowired
	SqlSessionTemplate sqlSession;
	
	
	/** 로그인 DAO
	 * @param memberEmail
	 * @return loginMember
	 */
	public Member login(String memberEmail) {
		return sqlSession.selectOne("memberMapper.login", memberEmail); 
				
	}


	/** 이메일 중복 체크 DAO
	 * @param memberEmail
	 * @return
	 */
	public int emailDupCheck(String memberEmail) {
		return sqlSession.selectOne("memberMapper.emailDupCheck", memberEmail);
	}


	public int signUp(Member member) {

		return sqlSession.insert("memberMapper.signUp", member);
	}
}
