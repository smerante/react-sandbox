package com.webservice.webservice.services;

import org.springframework.stereotype.Service;

import com.webservice.webservice.models.Product;

@Service()
public class ProductService {

	private Product[] products;
	
	ProductService(){
		this.products = new Product[9];
		this.products[0] = new Product("$44.99","Football", "Sporting Goods", true);
		this.products[1] = new Product("$9.99","Baseball", "Sporting Goods", true);
		this.products[2] = new Product("$29.99","Basketball", "Sporting Goods", false);
		this.products[3] = new Product("$99.99","iPod Touch", "Electronics", true);
		this.products[4] = new Product("'$399.99","iPhone 5", "Electronics", false);
		this.products[5] = new Product("$199.99","$199.99", "Electronics", true);
		this.products[6] = new Product("$19.99","Saw", "Hardware", true);
		this.products[7] = new Product("$29.99","Hammer", "Hardware", false);
		this.products[8] = new Product("$9.99","Nails", "Hardware", true);
	}
	
	public Product[] getProdcuts() {
		return this.products;
	}
}
