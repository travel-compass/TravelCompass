package kh.team.travelcompass.review.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.profile.model.service.ProfileService;
import kh.team.travelcompass.review.model.service.ReviewService;
import kh.team.travelcompass.review.model.vo.Review;

@RestController
@RequestMapping("/review")
public class ReviewController {

	@Autowired
	private ReviewService service;

	@Autowired
	private ProfileService pservice;

	/**
	 * @param contentid 리뷰가 포함된 contentid
	 * @param paramMap 
	 * @param cp 페이지네이션 페이지 변수
	 * @param loginMember 로그인한 회원 객체
	 * @return reviewMap reivew List와 pagination객체
	 */
	@GetMapping("/list")
	public Map<String, Object> selectReviewList(String contentid, Map<String, Object> paramMap,
			@RequestParam(value = "cp", required = false, defaultValue = "1") int cp,
			@SessionAttribute(value = "loginMember", required = false) Member loginMember) {

		paramMap.put("contentid", contentid);
		int memberNo;
		
		// 로그인 확인 / 멤버 넘버 세팅
		if (loginMember == null) { // 로그인하지 않았을 때
			memberNo = -1;
		} else {
			memberNo = loginMember.getMemberNo();
		}
		
		paramMap.put("memberNo", memberNo);
		Map<String, Object> reviewMap = service.selectReviewList(contentid, paramMap, cp);

		return reviewMap;
	}

	// 리뷰 등록
	@PostMapping("/insert")
	public int insertReview(Review review) {

//		String contentid=req.getParameter("contentid");
//		
//		Cookie[] cookies=req.getCookies();
//		Cookie cookie=null;
//		
//		// reviewContentid 쿠키가 있는지 확인 후 세팅
//		for(Cookie c:cookies) {
//			if(c.getName().equals("reviewContentid")) {
//				cookie=c;
//				break;
//			}
//		}
//		
//		// contentid기 쿠키value에 있는지 확인
//		if(cookie!=null) {
//			if(cookie.getValue().indexOf("|"+contentid+"|")==-1) {
//				cookie.setValue(cookie.getValue()+"|"+contentid+"|");
//			}
//		} else { // 없으면 새로운 쿠키 생성하여 contentid 저장
//			cookie=new Cookie("reviewContentid", "|"+contentid+"|");
//		}
//		
//		cookie.setPath("/");
//		
//		// 오늘 23시 59분 59초 까지 남은 시간을 초단위로 구하기
//		
//		Date a = new Date();
//		Calendar cal = Calendar.getInstance();
//		
//		cal.add(cal.DATE, 1);
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		Date temp = new Date(cal.getTimeInMillis());
//		
//		Date b = sdf.parse(sdf.format(temp));
//		
//		long diff = b.getTime() - a.getTime();
//		
//		cookie.setMaxAge((int)diff/1000);
//		
//		resp.addCookie(cookie);

		return service.insertReview(review);
	}

	// 리뷰 삭제
	@GetMapping("/delete")
	public int deleteReview(int reviewNo) {

//		System.out.println();

		return service.deleteReview(reviewNo);
	}

	// 리뷰 수정
	@PostMapping("/update")
	public int updateReview(Review review) {
		return service.updateReview(review);
	}

	// 평점별 개수 조회
	@GetMapping("/countRating")
	public List<String> countRating(String contentid) {
		return service.countRating(contentid);
	}

	// 리뷰 무한스크롤 더보기 조회
	@GetMapping("/moreReview")
	public List<Review> reviewMoreReviewList(String contentid, @RequestParam int rowBoundCount) {

		List<Review> reviewMoreList = service.moreReviewList(contentid, rowBoundCount);

		return reviewMoreList;
	}

	// 좋아요 증가
	@GetMapping("/likeUp")
	@ResponseBody
	public int reviewLikeUp(@RequestParam Map<String, Object> paramMap) {

		return service.reviewLikeUp(paramMap);
	}

	// 좋아요 감소
	@GetMapping("/likeDown")
	@ResponseBody
	public int reviewLikeDown(@RequestParam Map<String, Object> paramMap) {

		return service.reviewLikeDown(paramMap);
	}

	
	
	
	
	
}
