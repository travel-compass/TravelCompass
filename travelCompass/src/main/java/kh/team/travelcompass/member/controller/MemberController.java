package kh.team.travelcompass.member.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kh.team.travelcompass.member.model.service.MemberService;
import kh.team.travelcompass.member.model.vo.Member;


/**
 * @author Tonic
 *
 */
@SessionAttributes("loginMember")
@RequestMapping("/member")
@Controller
public class MemberController {
	
	@Autowired
	MemberService service;
	
	/** 로그인 페이지 이동
	 * @return member/login 포워드
	 */
	@GetMapping("/login")
	public String login() {
		
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
	public String signUp() {
		return "member/signUp";
	}
	
	/** 회원가입
	 * @return / 메인페이지 리다이렉트
	 */
	@PostMapping("/signUp")
	public String signUp(Member member, String[] memberAddress, String[] memberRRN,
		RedirectAttributes ra, @RequestHeader("referer") String referer) {
			
		String path = "";
		String message = "";
		
		String combineMemberAddress = String.join(",," ,memberAddress);
		String combineMemberRRN = String.join("-", memberRRN);
		
		member.setMemberAddress(combineMemberAddress);
		member.setMemberRRN(combineMemberRRN);
		int result = service.signUp(member);
		
		if(result > 0) {				// 회원 가입 성공 시 메인페이지 리다이렉트
			path = "/";
			message = "회원가입 성공";
		} else {
			path = referer;
			message = "회원가입 실패";
		}
		
		// 회원 가입 실패 시 현재 페이지 리다이렉트
		ra.addFlashAttribute("message", message);
		return "redirect:" + path;
	}
	
	/** 이메일 찾기 페이지 이동
	 * @return member/findEmail 포워드
	 */
	@GetMapping("/findEmail")
	public String findEmail() {
		return "member/findEmail";
	}
	
	/** 이메일 찾기
	 * @param inputMember
	 * @param memberRRN
	 * @param ra
	 * @param referer
	 * @return 결과창 리다이렉트
	 */
	@PostMapping("/findEmail")
	public String findEmail(Member inputMember, String[] memberRRN, RedirectAttributes ra, @RequestHeader("referer") String referer) {
		
		// 주민등록번호 가공
		String combineMemberRRN = String.join("-", memberRRN);
		
		inputMember.setMemberRRN(combineMemberRRN);
		
		// service 호출
		Member findMember = service.findEmail(inputMember);

		if(findMember != null) {							// 일치하는 정보 있으면 결과창
			ra.addFlashAttribute("result", findMember.getMemberEmail());
		}

		ra.addFlashAttribute("memberName", inputMember.getMemberName());
		return "redirect:/member/result";
	}
	
	/** 결과 페이지 이동
	 * @return member/result 포워드
	 */
	@GetMapping("/result")
	public String result() {
		return "member/result";
	}
	
	/** 현재 비밀번호 확인
	 * @param currentMemberPw
	 * @return 일치:true, 불일치:false
	 */
	@ResponseBody
	@PostMapping("/checkMemberPw")
	public boolean checkMemberPw(String currentMemberPw, @SessionAttribute("loginMember") Member loginMember) {		
		return service.checkMemberPw(currentMemberPw, loginMember.getMemberNo());
	}
	
	
	/** 비밀번호 찾기 페이지 이동
	 * @return member/findPw
	 */
	@GetMapping("/findPw")
	public String findPw() {
		return "member/findPw";
	}
	
	
	/** 비밀번호 찾기
	 * @return 성공 시 비밀번호 변경페이지 리다이렉트, 실패 시 비밀번호 찾기 페이지 리다이렉트
	 */
	@PostMapping("/findPw")
	public String findPw(String memberEmail, RedirectAttributes ra, HttpSession session) {
		
		String path = "";
		// 파라미터로 받은 memberEmail로
		// service.findPw(memberEmail) 호출
		String result = service.findPw(memberEmail);
		
		if(result != null) {
			// 일치하는 회원 정보가 있으면
			// 회원정보 새션에 올리고
			session.setAttribute("tempMemberNo", result);
			session.setAttribute("referer", "findPw");
			// 비밀번호 변경 페이지로 리다이렉트
			path = "/member/changePw";
			
		
		} else {				// 일치하는 회원 정보가 없으면 
			// 메세지와 함께 리다이렉트
			
			ra.addFlashAttribute("message", "일치하는 회원정보가 존재하지않습니다.");
			path = "/member/findPw";
		}
		
		return "redirect:" + path;
	}
	
	/** 비밀번호 찾기 -> 비밀번호 변경 
	 * @return member/changePw 포워드
	 */
	@GetMapping("/changePw")
	public String changePw() {
		
		return "member/changePw";
	}
	
	/** 비밀번호 변경
	 * @param tempMemberNo 비로그인 요청 시
	 * @param loginMember  로그인 요청 시
	 * @param status       로그아웃을 위한 객체
	 * @param inputMember  사용자 입력
	 * @param session      비로그인 요청 시 올려진 세션값 무효화
	 * @param ra           메세지 응답시 필요
	 * @return path 경로로 리다이렉트
	 */
	@PostMapping("/changePw")
	public String changePw(@SessionAttribute(value="tempMemberNo", required=false) String tempMemberNo, @SessionAttribute(value="loginMember", required = false) Member loginMember,
			SessionStatus status, Member inputMember, HttpSession session, RedirectAttributes ra) {
		
		// 로그인 멤버의 회원번호로 먼저 검사
		if(loginMember != null) {									// 로그인 상태에서 요청했을 때 
			inputMember.setMemberNo(loginMember.getMemberNo());
			System.out.println("로그인 요청");
		} else {													// 비로그인 상태에서 요청했을 때 (비밀번호 찾기 후 자동 요청)
			inputMember.setMemberNo(Integer.parseInt(tempMemberNo));
			System.out.println("비로그인 요청");
		}
		
		// 비밀번호 변경 요청 후 결과 반환
		int result = service.changePw(inputMember);
		
		String message = "";
		String path = "";
		if(result > 0) {			// 비밀번호 변경 성공 시 성공 메세지와 함께 로그아웃 후 메인페이지 리다이렉트 
			message = "비밀번호가 변경되었습니다.";
			path = "/";
			status.setComplete();
			session.invalidate();	// 세션 무효화
			
		} else {				// 비밀번호 변경 실패 시 실패 메세지와 함께 비밀번호 변경 페이지 리다이렉트
			message = "비밀번호 변경에 실패하였습니다.";
			path = "/member/changePw";
		}
		ra.addFlashAttribute("message", message);
		return "redirect:" + path;
	}

	
	/** 회원 정보 페이지
	 * @return member/myPage-info 포워드
	 */
	@GetMapping("/info")
	public String myInfo() {
		return "member/myPage-info";
	}
	
	
	/** 회원 정보 수정
	 * @param ra            메세지 출력을 위한 변수
	 * @param inputMember   입력받은 데이터
	 * @param memberAddress 주소 데이터가공을 위한 배열
	 * @param loginMember   현재 로그인중인 회원번호를 얻기위한 변수
	 * @param referer       이전 요청 주소를 얻기위한 변수
	 * @return              성공여부에 따른 메세지와함께 이전요청으로 리다이렉트
	 */
	@PostMapping("/updateInfo")
	public String updateInfo(RedirectAttributes ra, Member inputMember, String[] memberAddress, @SessionAttribute("loginMember") Member loginMember
			, @RequestHeader("referer") String referer) {
		
		String message = "";
		
		String combineMemberAddress = String.join(",," ,memberAddress);
		
		inputMember.setMemberAddress(combineMemberAddress);
		inputMember.setMemberNo(loginMember.getMemberNo());
		
		int result = service.updateInfo(inputMember);
		
		if(result > 0) {			// 정보 수정에 성공했으면
			message = "회원 정보가 수정되었습니다.";
			// 현재 로그인멤버에 수정한 회원 정보 동기화
			loginMember.setMemberNickname(inputMember.getMemberNickname());
			loginMember.setMemberTel(inputMember.getMemberTel());
			loginMember.setMemberAddress(inputMember.getMemberAddress());
			
		} else {
			message = "회원 정보 수정에 실패했습니다.";
		}
		
		ra.addFlashAttribute("message", message);
		return "redirect:" + referer;
	}
	
	
	/** 회원 탈퇴 페이지
	 * @return member/myPage-secession 포워드
	 */
	@GetMapping("/secession")
	public String secession() {
		return "member/myPage-secession";
	}
	

	/** 회원 탈퇴
	 * @param loginMember
	 * @param referer
	 * @param ra
	 * @param status
	 * @return 성공시 메인페이지, 실패시 이전페이지 리다이렉트
	 */
	@PostMapping("/secession")
	public String secession(@SessionAttribute Member loginMember, @RequestHeader("referer") String referer,
			RedirectAttributes ra, SessionStatus status) {
		
		String path = "";
		String message = "";
		
		int result = service.secession(loginMember.getMemberNo());
		
		if(result > 0) {		// 회원 탈퇴 성공 시
			// 메인페이지로 리다이렉트
			path = "/";	
			message = "성공적으로 탈퇴되었습니다.";
			status.setComplete();
			
		} else {				// 회원 탈퇴 실패 시
			path = referer;
			message = "회원 탈퇴에 실패했습니다.";
		}
		ra.addFlashAttribute("message", message);
		return "redirect:" + path;
	}
	
	/**	이메일 중복 확인
	 * @param memberEmail
	 * @return result 
	 */
	@ResponseBody
	@GetMapping("/emailDupCheck")
	public int emailDupCheck(String memberEmail) {
		return service.emailDupCheck(memberEmail);
	}
	
	@ResponseBody
	@GetMapping("/memberRRNDupCheck")
	public int memberRRNDupCheck(String memberRRN) {
		return service.memberRRNDupCheck(memberRRN);
	}
}
