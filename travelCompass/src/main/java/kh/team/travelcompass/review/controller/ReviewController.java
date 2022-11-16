package kh.team.travelcompass.review.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kh.team.travelcompass.review.model.service.ReviewService;

@Controller
public class ReviewController {
	
	@Autowired
	private ReviewService service;
}
