import React from "react";
import FilterableProductTable, { Product } from "../Components/FilterableProductTable/FilterableProductTable";
import axios, { AxiosResponse } from 'axios';

export default class ProductTableDemo extends React.Component<any, any> {


    private mockDataCall = [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ];

    constructor(props: any) {
        super(props);
        this.state = {
            products: this.mockDataCall
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/products').then((res: AxiosResponse<Product[]>) => {
            this.setState({
                products: res.data
            })
        });
    }

    render() {
        return <div>
            <FilterableProductTable products={this.state.products}></FilterableProductTable>
        </div>
    }
}