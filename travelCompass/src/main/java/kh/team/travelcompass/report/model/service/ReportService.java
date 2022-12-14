package kh.team.travelcompass.report.model.service;

import java.util.Map;

public interface ReportService {

	
	/**중복신고 체크
	 * @param paramMap
	 * @return result
	 */
	int reportCheck(Map<String, Object> paramMap);	
	
	/**신고 등록
	 * @param paramMap
	 * @return result
	 */
	int insertReport(Map<String, Object> paramMap);

	
	
}
