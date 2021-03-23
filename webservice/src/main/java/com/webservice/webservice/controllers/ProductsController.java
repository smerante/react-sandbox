package com.webservice.webservice.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webservice.webservice.models.Product;
import com.webservice.webservice.services.ProductService;

@RestController()
public class ProductsController {
	
	@Autowired()
	ProductService productService;
	
	@CrossOrigin
	@RequestMapping(path="products", method=RequestMethod.GET)
	public ResponseEntity<Product[]> helloWorld(){
		return new ResponseEntity<Product[]>(productService.getProdcuts(), HttpStatus.OK);
	}
}
