package kh.team.travelcompass.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/member")
@Controller
public class MemberController {

	/** 로그인 페이지 이동
	 * @return forward to login.jsp 
	 */
	@GetMapping("/login")
	public String loginPage() {
		
		return "member/login";
	}
	
	/** 회원가입 페이지 이동
	 * @return forward to signUp.jsp 
	 */
	@GetMapping("/signUp")
	public String signUpPage() {
		return "member/signUp";
	}
	
	/** 계정찾기 페이지 이동
	 * @return forward to findAccount
	 */
	@GetMapping("/findAccount")
	public String findAccountPage() {
		return "member/findAccount";
	}
}
