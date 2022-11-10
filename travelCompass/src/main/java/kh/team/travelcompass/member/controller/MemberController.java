package kh.team.travelcompass.member.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kh.team.travelcompass.member.model.service.MemberService;
import kh.team.travelcompass.member.model.vo.Member;


@SessionAttributes({"loginMember"})
@RequestMapping("/member")
@Controller
public class MemberController {
	
	@Autowired
	MemberService service;
	
	/** 로그인 페이지 이동
	 * @return member/login 포워드
	 */
	@GetMapping("/login")
	public String loginPage() {
		
		return "member/login";
	}
	
	@PostMapping("/login")
	public String login(Member member, String saveId, @RequestHeader("referer") String referer, HttpServletResponse resp, Model model,
			RedirectAttributes ra) {
		String path = "";
		String message = "";
		System.out.println(member);
		System.out.println(referer);
		// 로그인 서비스 호출 후 반환
		Member loginMember = service.login(member);
		

		if(loginMember == null) {							// 로그인 실패 시 로그인 페이지로 리다이렉트
			path = referer;
			message = "회원 정보가 맞지 않습니다.";
			ra.addFlashAttribute("message", message);
		} else {											// 로그인 성공 시 
			
			Cookie cookie = new Cookie("saveId", loginMember.getMemberEmail());			// 쿠키 생성
			
			if(saveId != null) {							// 아이디 저장이 체크되었다면
				cookie.setMaxAge(60 * 60 * 24 * 365);									// 쿠키 생명주기 1년 지정
			} else {
				cookie.setMaxAge(0);													// 쿠기 삭제
			}
//			cookie.setPath("/");		// setPath 설정을 하지 않으면 cookie를 생성했던 url범위에서만 쿠키 인식 -> /member 에서만 인식
			resp.addCookie(cookie);
			model.addAttribute("loginMember", loginMember);
			
			path = "/";
		}
		
		return "redirect:" + path;
	}
	
	@GetMapping("/logout")
	public String logout(SessionStatus status) {
		status.setComplete();
		
		return "redirect:/";
	}
	
	/** 회원가입 페이지 이동
	 * @return member/signUp 포워드
	 */
	@GetMapping("/signUp")
	public String signUpPage() {
		return "member/signUp";
	}
	
	/** 회원가입
	 * @return / 메인페이지 리다이렉트
	 */
	@PostMapping("/signUp")
	public String signUpPage(Member member) {
		String path = "";
		
		// 회원 가입 실패 시 현재 페이지 리다이렉트
		
		// 회원 가입 성공 시 메인페이지 리다이렉트
		
		
		
		return "redirect:" + path;
	}
	
	/** 계정찾기 페이지 이동
	 * @return member/findAccount 포워드
	 */
	@GetMapping("/findAccount")
	public String findAccountPage() {
		return "member/findAccount";
	}
	
	
	/** 결과 페이지 이동
	 * @return member/result 포워드
	 */
	@GetMapping("/result")
	public String result() {
		return "member/result";
	}
	
	
	/** 비밀번호 찾기 -> 비밀번호 변경 
	 * @return member/changePw 포워드
	 */
	@GetMapping("/changePw")
	public String changePw() {
		
		return "member/changePw";
	}
	
	@ResponseBody
	@GetMapping("/emailDupCheck")
	public int emailDupCheck(String memberEmail) {
		return service.emailDupCheck(memberEmail);
	}
}
