package kh.team.travelcompass.profile.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.vo.Review;
@Repository
public class ProfileDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 리뷰 수 조회
	 * @return listCount
	 */
	public int getListCount(int memberNo) {
		return sqlSession.selectOne("profileMapper.getListCount", memberNo);
	}

	/** ajax 리뷰 리스트 조회
	 * @return reviewList
	 */
	public List<Review> ReivewSelectList(int memberNo) {
		return sqlSession.selectList("profileMapper.ReviewSelectList", memberNo);
	}

	/** 프로필 페이지 이동 시 프로필 페이지의 회원 정보 받아오기
	 * @param memberNo
	 * @return list
	 */
	public Member selectMember(int memberNo) {
		return sqlSession.selectOne("memberMapper.totalSelectMember", memberNo);
	}
	
	/** 팔로우 체크
	 * @param map
	 * @return result
	 */
	public int followCheck(Map<String, Object> map) {
		return sqlSession.selectOne("profileMapper.followCheck", map);
	}
	

	/** 팔로우 하기 (insert)
	 * @param paramMap
	 * @return result
	 */
	public int follow(Map<String, Integer> paramMap) {
		return sqlSession.insert("profileMapper.Follow", paramMap);
	}

	/** 팔로우 취소 하기0 (delete)
	 * @param paramMap
	 * @return result
	 */
	public int unFollow(Map<String, Integer> paramMap) {
		return sqlSession.delete("profileMapper.unFollow", paramMap);
	}

	/** 팔로우한 인원 리스트 조회
	 * @param memberNo
	 * @return selectFollowMemberList
	 */
	public List<Member> selectFollowMemberList(int memberNo) {
		return sqlSession.selectList("memberMapper.selectFollowMemberList", memberNo);
	}
}
