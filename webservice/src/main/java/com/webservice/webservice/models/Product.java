package com.webservice.webservice.models;

public class Product {

	String price;
	String name;
	String category;
	boolean stocked;
	
	public Product(String price, String name, String category, boolean stocked) {
		super();
		this.price = price;
		this.name = name;
		this.category = category;
		this.stocked = stocked;
	}
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isStocked() {
		return stocked;
	}
	public void setStocked(boolean stocked) {
		this.stocked = stocked;
	}

	@Override
	public String toString() {
		return "Product [price=" + price + ", name=" + name + ", category=" + category + ", stocked=" + stocked + "]";
	}
}
