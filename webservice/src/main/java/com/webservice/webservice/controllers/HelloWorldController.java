package com.webservice.webservice.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@CrossOrigin
	@RequestMapping(path="hello-world", method=RequestMethod.GET)
	public ResponseEntity<String> helloWorld(@RequestParam String name, HttpServletRequest request){
		return new ResponseEntity<String>("Hello, " + name + "!", HttpStatus.OK);
	}
}
