package kh.team.travelcompass.common;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorPage {
	
	@GetMapping("/error/404")
	public String error404(){
		
		return "error/404";
	}
	
	@GetMapping("/error/500")
	public String error500(){
		
		return "error/500";
	}
}
