package kh.team.travelcompass.answer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kh.team.travelcompass.answer.model.service.AnswerService;

@Controller
public class AnswerController {

	@Autowired
	private AnswerService service;
}
