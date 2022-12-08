package kh.team.travelcompass.profile.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kh.team.travelcompass.member.model.vo.Member;
import kh.team.travelcompass.profile.model.service.ProfileService;
import kh.team.travelcompass.review.model.vo.Review;

@Controller
public class ProfileController {
	
	@Autowired
	private ProfileService service;

	// 프로필 페이지 이동
	@GetMapping("/profile/{memberNo}")
	public String MemberPage(@PathVariable("memberNo") int memberNo,
			Model model,
			@SessionAttribute(value = "loginMember", required = false) Member loginMember) {
		
		// 프로필 페이지의 회원정보 가져오기
		Member member = service.selectMember(memberNo);
		
		// 프로필 페이지의 리뷰 리스트 가져오기
		List<Review> reviewList = service.allReviewSelectList(memberNo);
		
		model.addAttribute("member", member);
		model.addAttribute("reviewList", reviewList);
		
		// 회원 팔로우 수, 여부 체크
		Map<String, Integer> map = new HashMap<String, Integer>();
		
		// reviewPageMemberNo 회원 페이지의 번호
		map.put("reviewPageMemberNo", memberNo);
		
		// loginMemberNo 로그인한 회원 번호
		if(loginMember != null) map.put("loginMemberNo", loginMember.getMemberNo());
		
		System.out.println(map);
		
		int result = service.followCheck(map);
		
		// result 가 1 이면 팔로우한 상태
		if(result > 0) {
			model.addAttribute("followCheck", "on");
		} else {
			model.addAttribute("followCheck", null);
		}
		
		return "profile/MemberPage";
	}
	
	// fed ajax 비동기(리뷰 사진 유무 같이 출력)
	@GetMapping("/profile/{memberNo}/Fed")
	@ResponseBody
	public List<Review> profileFedSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		List<Review> fedList = service.allReviewSelectList(memberNo);
		
		return fedList;
	}
	
	// review ajax 비동기(리뷰 사진 없는 게시물만 출력)
	@GetMapping("/profile/{memberNo}/Review")
	@ResponseBody
	public List<Review> profileReviewSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		List<Review> reviewList = service.ReviewSelectList(memberNo);
		
		
		return reviewList;
	}
	
	// imageReview ajax 비동기(리뷰 사진 있는 게시물만 출력)
	@GetMapping("/profile/{memberNo}/ImageReview")
	@ResponseBody
	public List<Review> profileImageReviewSelectList(Model model,
			@PathVariable("memberNo") int memberNo){
		
		List<Review> imageReviewList = service.imageReviewSelectList(memberNo);
		
		
		return imageReviewList;
	}
	
	// 팔로워 하기
	@GetMapping("/follow")
	@ResponseBody
	public int follow(@RequestParam Map<String, Integer> paramMap) {
		
		// 팔로우 버튼 누르면 로그인 맴버 번호 담기는 키 : loginMemberNo
		// 팔로우 버튼 누르면 팔로우 할 맴버 번호 담기는 키 : reviewPageMemberNo
		
		// 팔로우 하기 전 팔로우 했는지 안했는 지 체크
		
		int result = service.followCheck(paramMap);
		
		// result 가 1 이면 팔로우한 상태
		if(result > 0) {
			return 0;
		} else {
			return service.follow(paramMap);
		}
	}
	
	// 팔로워 취소 하기
	@GetMapping("/unFollow")
	@ResponseBody
	public int unFollow(@RequestParam Map<String, Integer> paramMap) {
		
		return service.unFollow(paramMap);
	}
	
	// 팔로워 리스트 조회하기
	@GetMapping("/profile/{memberNo}/follow")
	@ResponseBody
	public List<Member> selectFollowMemberList(Model model,
			@PathVariable("memberNo") int memberNo) {
		
		List<Member> followMemberList = service.selectFollowMemberList(memberNo);
		
		model.addAttribute("followMemberList", followMemberList);
		
		return followMemberList;
	}
	
	// 팔로잉 리스트 조회하기
	@GetMapping("/profile/{memberNo}/following")
	@ResponseBody
	public List<Member> selectFollowingMemberList(Model model,
			@PathVariable("memberNo") int memberNo) {
		
		List<Member> followingMemberList = service.selectFollowingMemberList(memberNo);
		
		model.addAttribute("followingMemberList", followingMemberList);
		
		return followingMemberList;
	}
	
	// 더보기 버튼 눌렀을 때 리뷰 10개씩 보여주기 
	@GetMapping("/profile/{memberNo}/reviewMoreList")
	@ResponseBody
	public List<Review> moreReviewList(
			@PathVariable("memberNo") int memberNo,
			@RequestParam int rowBoundCount) {
		
		List<Review> moreReviewList = service.moreReviewList(memberNo,rowBoundCount);
		
		return moreReviewList;
		
	}
	
	// ajax 더보기 버튼 눌렀을 때 피드 10개씩 보여주기
	@GetMapping("/profile/{memberNo}/ajaxfedMoreList")
	@ResponseBody
	public List<Review> fedMoreReviewList(
			@PathVariable("memberNo") int memberNo,
			@RequestParam int rowBoundCount) {
		
		List<Review> ajaxFedMoreList = service.moreFedList(memberNo,rowBoundCount);
		
		return ajaxFedMoreList;
		
	}
	
	// ajax 더보기 버튼 눌렀을 때 리뷰 10개씩 보여주기
	@GetMapping("/profile/{memberNo}/ajaxReviewMoreList")
	@ResponseBody
	public List<Review> reviewMoreReviewList(
			@PathVariable("memberNo") int memberNo,
			@RequestParam int rowBoundCount) {
		
		List<Review> ajaxReviewMoreList = service.moreReviewList(memberNo,rowBoundCount);
		
		return ajaxReviewMoreList;
		
	}
	
	// ajax 더보기 버튼 눌렀을 때 사진리뷰 10개씩 보여주기
	@GetMapping("/profile/{memberNo}/ajaxImageMoreList")
	@ResponseBody
	public List<Review> imageMoreReviewList(
			@PathVariable("memberNo") int memberNo,
			@RequestParam int rowBoundCount) {
		
		List<Review> ajaxImageMoreList = service.moreImageReviewList(memberNo,rowBoundCount);
		
		return ajaxImageMoreList;
		
	}
	
	// 프로필 이미지 변경
	@PostMapping("/profile/{memberNo}")
	public String updateProfile(
			@SessionAttribute("loginMember") Member loginMember,
			@RequestParam(value = "profileImage") MultipartFile profileImage,
			HttpServletRequest req, RedirectAttributes ra) throws Exception {
		
		String wepPath = "/resources/images/member/";
		
		String filePath = req.getSession().getServletContext().getRealPath(wepPath);

		int result = service.updateProfile(wepPath, filePath, profileImage, loginMember);
		
		String message = null;
		
		if (result > 0) message = "프로필 이미지가 변경되었습니다.";
		else message = "프로필 이미지 변경 실패";
				
		ra.addFlashAttribute("message", message);
		
		return "redirect:" + loginMember.getMemberNo();
	}
	
	// 리뷰 삭제하기
	@GetMapping("/profile/{memberNo}/{reviewNo}/delete")
	public String reviewDelete(
			@PathVariable("memberNo") int memberNo,
			@PathVariable("reviewNo") int reviewNo,
			@RequestHeader("referer") String referer,
			RedirectAttributes ra) {
		
		int result = service.boardDelete(reviewNo);
		
		String message = null;
		
		if (result > 0) {
			message = "삭제되었습니다.";
		} else {
			message = "게시글 삭제 실패";
		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:" + referer;
	}
}
