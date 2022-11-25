package kh.team.travelcompass.question.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.question.model.dao.QuestionDAO;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionDAO dao;
}
