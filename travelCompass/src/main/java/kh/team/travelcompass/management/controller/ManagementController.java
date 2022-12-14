package kh.team.travelcompass.management.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;

import kh.team.travelcompass.management.model.service.ManagementService;
import kh.team.travelcompass.review.model.vo.Review;

@RequestMapping("/management")
@Controller
public class ManagementController {
	@Autowired
	ManagementService service;
	
	
	/**관리자 페이지 이동
	 * @param model
	 * @return "management/managementPage"포워드
	 */
	@GetMapping("/info")
	public String management(Model model) {
		List<Review>reportList = null;	
		
		try {
			reportList = service.selectAll();
			
			model.addAttribute("reportList",reportList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return "management/managementPage";
	}
	
	
	/**모든 신고 조회
	 * @return List<Review>reportList
	 */
	@ResponseBody
	@GetMapping("/selectAll")
	public String selectAll(){
		
		List<Review>reportList = null;		
		String jsonReportList="";
		
		try {
			
			reportList = service.selectAll();
			ObjectMapper objectMapper = new ObjectMapper();
			jsonReportList = objectMapper.writeValueAsString(reportList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
				
		return jsonReportList;
	}
	

	/**회원 블라인드 리뷰 수 조회 
	 * @return List<Review>reportList
	 */
	@ResponseBody
	@GetMapping("/selectBlind")
	public String selectReport(){
		
		List<Review>reportList = null;		
		String jsonReportList="";
		
		try {
			
			reportList = service.selectBlind();
			ObjectMapper objectMapper = new ObjectMapper();
			jsonReportList = objectMapper.writeValueAsString(reportList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
				
		return jsonReportList;
	}
	

	/**정지 회원 조회
	 * @return List<Review>reportList
	 */
	@ResponseBody
	@GetMapping("/selectBanMember")
	public String selectBanMember(){
		
		List<Review>reportList = null;		
		String jsonReportList="";
		
		try {
			
			reportList = service.selectBanMember();
			ObjectMapper objectMapper = new ObjectMapper();
			jsonReportList = objectMapper.writeValueAsString(reportList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
				
		return jsonReportList;
	}
	

	
	/**블라인드 처리
	 * @param reviewNo
	 * @return result
	 */
	@ResponseBody
	@GetMapping("/reviewBlind")
	public int reviewBlind(int reviewNo){
			
		return service.reviewBlind(reviewNo);
			
	}
	

	/**회원 기능 정지
	 * @param memberNo
	 * @return result
	 */
	@ResponseBody
	@GetMapping("/memberBan")
	public int memberBan(int memberNo){
		
		return service.memberBan(memberNo);
		
	}
	
	/**회원 정지 취소
	 * @param memberNo
	 * @return result
	 */
	@ResponseBody
	@GetMapping("/memberBanCancel")
	public int memberBanCancel(int memberNo){
			
		return service.memberBanCancel(memberNo);
			
	}
	

	
	
	
}
