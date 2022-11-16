package kh.team.travelcompass.answer.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.team.travelcompass.answer.model.dao.AnswerDAO;

@Service
public class AnswerServiceImpl {

	@Autowired
	private AnswerDAO dao;
}
