package kh.team.travelcompass.place.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kh.team.travelcompass.place.model.service.PlaceService;

@Controller
public class PlaceController {

	@Autowired
	private PlaceService service;
}
