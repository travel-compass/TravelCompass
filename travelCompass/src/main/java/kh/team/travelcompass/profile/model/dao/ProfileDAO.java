package kh.team.travelcompass.profile.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
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

		// 25개의 리스트 카운트가 존재한다
		// 25개중 10개씩 출력하기 원한다
		// 0 ~ 9 번 출력 후
		// 10 ~ 19 번 출력
		// 20 ~ 29 번 출력
		
		// RowBounds(0, 10);
		// RowBounds(10, 10);
		// RowBounds(20, 10);
		
		RowBounds rowBounds = new RowBounds(0, 10);
		
		return sqlSession.selectList("profileMapper.ReviewSelectList", memberNo, rowBounds);
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

	/** 팔로우 취소 하기 (delete)
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

	/** 팔로잉 한 인원 리스트 조회하기
	 * @param memberNo
	 * @return followingMemberList
	 */
	public List<Member> selectFollowingMemberList(int memberNo) {
		return sqlSession.selectList("memberMapper.selectFollowingMemberList", memberNo);
	}

	/** 더보기 버튼 눌렀을 때 남은 리뷰 테이블 불러오기
	 * @param memberNo
	 * @param rowBoundCount
	 * @return moreReviewList
	 */
	public List<Review> moreReviewList(int memberNo, int rowBoundCount) {
		
		RowBounds rowBounds = new RowBounds(rowBoundCount, 10);
		
		return sqlSession.selectList("profileMapper.ReviewSelectList", memberNo, rowBounds);
	}

	/** 프로핑 이미지 변경
	 * @param loginMember
	 * @return result
	 */
	public int updateProfile(Member loginMember) {
		return sqlSession.update("memberMapper.updateProfile", loginMember);
	}

	/** 리뷰 삭제
	 * @param reviewNo
	 * @return result
	 */
	public int boardDelete(int reviewNo) {
		return sqlSession.update("profileMapper.reviewDelete", reviewNo);
	}
}
