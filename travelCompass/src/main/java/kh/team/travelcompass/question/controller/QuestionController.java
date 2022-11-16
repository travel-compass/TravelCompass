package kh.team.travelcompass.question.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kh.team.travelcompass.question.model.service.QuestionService;

@Controller
public class QuestionController {

	@Autowired
	private QuestionService service;
}
