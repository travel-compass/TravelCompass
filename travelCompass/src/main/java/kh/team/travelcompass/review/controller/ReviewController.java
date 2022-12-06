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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.review.model.service.ReviewService;
import kh.team.travelcompass.review.model.vo.Review;

@RestController
@RequestMapping("/review")
public class ReviewController {

	@Autowired
	private ReviewService service;

	// 리뷰 목록 정렬 리스트(추천,최신,평점 순 조회)
//	@GetMapping("/reviewList")
//	public Map<String, Object> orderReviewList(String contentid, @RequestParam Map<String, Object> paramMap,
//			@RequestParam(value = "cp", required = false, defaultValue = "1") int cp, Model model) {
//
//		paramMap.put("contentid", contentid);
//		// pm=={contentid,key,query,cp}
//
//		Map<String, Object> reviewMap = service.orderReviewList(paramMap, cp);
//
//		model.addAttribute("reviewMap", reviewMap);
//
//		return reviewMap;
//	}
	
	@GetMapping("/list")
	public Map<String, Object> selectReviewList(String contentid,
			Map<String, Object> paramMap,
			@RequestParam(value="cp",required=false, defaultValue="1") int cp) {
		
		paramMap.put("contentid", contentid);
		
		Map<String, Object> reviewMap=service.selectReviewList(contentid,paramMap, cp);
		
		return reviewMap;
	}
	
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
	@GetMapping("/deleteReview")
	public int deleteReview(int reviewNo) {
		return service.deleteReview(reviewNo);
	}

	// 리뷰 수정
	@PostMapping("/update")
	public int updateReview(Review review) {
		return service.updateReview(review);
	}
	
	// 평점별 개수 조회
	@GetMapping("/countRating")
	public List<String> countRating(String contentid){
		return service.countRating(contentid);
	}
	

}
