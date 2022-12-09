package kh.team.travelcompass.common.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kh.team.travelcompass.member.model.vo.Member;

@WebFilter(filterName = "managementFilter",           //필터 이름, 필터가 여러개일 떄 순서 지정 
urlPatterns = {"/management/*"})
public class ManagementFilter implements Filter {


	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	public void destroy() {
		
	}
	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		//다운캐스팅 진행
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse resp = (HttpServletResponse)response;
				
		//로그인 여부 확인 -> session에 loginMember가 있는지 확인
		HttpSession session = req.getSession();
		Member loginMember = (Member) session.getAttribute("loginMember");
		
		if(loginMember==null) { //로그인x
			resp.sendRedirect("/"); //메인페이지로 리다이렉트
		}else { //로그인O
			if(loginMember.getAuthority().equals("Y")) {
				//연결된 다음 필터로 이동(없으면 Servlet/JSP로 이동)
				chain.doFilter(request, response);
				
			}else {
				resp.sendRedirect("/"); //메인페이지로 리다이렉트
				
			}
		}
		
	}


	

}
