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

/**
 * Servlet Filter implementation class LoginFilter
 */
// 로그아웃 상태일 때 요청 시 메인페이지로
@WebFilter(filterName = "loginFilter",
			urlPatterns = {"/member/logout", "/member/info", "/member/updateInfo", "/member/secession"})
public class LoginFilter implements Filter {

    /**
     * Default constructor. 
     */
    public LoginFilter() {

    }

	public void destroy() {

	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse resp = (HttpServletResponse)response;
		
		// 로그인 여부 확인
		// session LoginMember가 있는지 확인
		HttpSession session = req.getSession();
		
		if(session.getAttribute("loginMember") == null) {
			resp.sendRedirect("/");
		} else {
			chain.doFilter(request, response);	
		}		
	}

	public void init(FilterConfig fConfig) throws ServletException {

	}

}
